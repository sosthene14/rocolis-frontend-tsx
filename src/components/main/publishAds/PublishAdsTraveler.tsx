import { ToastContainer } from "react-toastify";
import { LoaderCircle } from "@/assets/animations/LoaderCircle";
import { CustomDatePicker } from "@/components/customs/CustomDatePicker";
import {
  citiesList,
  currencyList,
  discussList,
  minDate,
} from "@/constants/variables";
import { CustomSelect } from "@/components/customs/CustomSelect";
import { CustomPhoneInput } from "@/components/customs/CustomPhoneInput";
import React, { useCallback, useEffect, useState } from "react";
import { IPublishAdd } from "@/components/interfaces/interfaces";
import { initializedData } from "@/constants/variables";
import { InputField } from "@/components/customs/CustomInput";
import { TextAreaField } from "@/components/customs/CustomTextarea";
import { useTheme } from "@/hooks/useTheme";
import { message } from "antd";
import {
  destructiveButton,
  gradientBtn,
  popoverClass,
  publishAddInputStyle,
  publishAddLabel,
} from "@/common/ClassNames";
import {
  addOneDay,
  convertToDate,
  getCurrentDateSlashFormat,
  getSystemTheme,
  removeOneDay,
} from "@/lib/utils";
import { useAuthStore } from "@/store/store";
import { postDatas } from "@/api/Routes";

export const PublishAdsTraveler = ({
  loadedDatas,
  setIsModifying,
}: {
  loadedDatas?: IPublishAdd;
  setIsModifying?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [disabledInput, setDisabledInput] = useState(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [data, setData] = useState<IPublishAdd>(loadedDatas || initializedData);
  const [messageApi, contextHolder] = message.useMessage();
  const [haveReseted, setHaveReseted] = useState(false);
  const maxDepartureDate =
    data.arrivalDate && removeOneDay(data.arrivalDate as unknown as string);
  const minDateArrivel =
    data.departureDate && addOneDay(data.departureDate as unknown as string);
  const theme = useTheme().theme;
  const systemTheme = getSystemTheme();
  const isValidPath = window.location.pathname == "/publish-ad";
  const { sub, accessToken } = useAuthStore();
  const classForDatePicker =
    theme === "dark"
      ? "custom-datepicker"
      : theme === "light"
      ? "custom-datepicker-2"
      : systemTheme === "dark"
      ? "custom-datepicker"
      : systemTheme === "light"
      ? "custom-datepicker-2"
      : "";

  useEffect(() => {
    const destination = localStorage.getItem("destination");
    const departure = localStorage.getItem("departure");

    setData((prev) => ({
      ...prev,
      destinationCity: destination || "",
      departureCity: departure || "",
    }));
  }, []);
  const errorM = useCallback(
    (message: string) => {
      messageApi.error(message);
      return false;
    },
    [messageApi]
  );
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleDateChange = (field: string, value: string | string[]) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSelectChange = (field: string, value: string | boolean) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCityValidation = (
    cityValue: string,
    setData: React.Dispatch<React.SetStateAction<IPublishAdd>>,
    cityField: string
  ) => {
    try {
      JSON.parse(cityValue);
      setData((prev) => ({
        ...prev,
        [cityField]: "",
      }));
    } catch (error) {
      return;
    }
  };
  useEffect(() => {
    console.log(data.discuss);
  }, [data.discuss]);
  useEffect(() => {
    handleCityValidation(data.departureCity, setData, "departureCity");
  }, [data.departureCity]);

  useEffect(() => {
    handleCityValidation(data.destinationCity, setData, "destinationCity");
  }, [data.destinationCity]);

  const handlePhoneChange = (value: string) => {
    setData((prev) => ({
      ...prev,
      travelerPhone: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData((prevValues) => {
      const updatedValues = {
        ...prevValues,
        kilosPrice: Number(prevValues.kilosPrice),
        expirationDate: convertToDate(
          prevValues.arrivalDate as unknown as string
        )!,
        publicationDate: new Date(),
        publishedBy: sub || "",
        availableKilos: Number(prevValues.availableKilos),
        departureDate: convertToDate(
          prevValues.departureDate as unknown as string
        )!,
        arrivalDate: convertToDate(
          prevValues.arrivalDate as unknown as string
        )!,
      };
      if (handleValidation(updatedValues, isValidPhoneNumber)) {
        uploadAds(updatedValues);
        setDisabledInput(true)
        return data;
      }
      return data;
    });
  };

  
  const uploadAds = async (data: IPublishAdd) => {
    data.sub = sub || "";
    await postDatas("/api/v1/upload-ads/traveler", data, accessToken, false).then(
      (res) => {
        console.log(data, accessToken)
        if (res){
          messageApi.success("Annonce ajoutée avec succes, vous allez recevoir un email de confirmation");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
        else{
          messageApi.error("Une erreur est survenue");
        }
  })}

  const handleValidation = (data: IPublishAdd, isValidPhoneNumber: boolean) => {
    if (data.departureCity === "") {
      return errorM("Veuillez entrer une ville de départ");
    }
    if (data.destinationCity === "") {
      return errorM("Veuillez entrer une ville de destination");
    }
    if (data.travelerName === "") {
      return errorM("Veuillez entrer votre nom");
    }
    if (data.travelerPhone === "" || !isValidPhoneNumber) {
      return errorM("Veuillez entrer un numéro de téléphone valide");
    }
    if (
      data.discuss === undefined ||
      data.discuss === null ||
      typeof data.discuss !== "boolean"
    ) {
      return errorM("Discutable ou non ?");
    }
    if (data.departureCity === data.destinationCity) {
      return errorM("Veuillez entrer deux villes differentes");
    }
    if (data.departureDate === "") {
      return errorM("Veuillez entrer une date de depart");
    }
    if (data.arrivalDate === "") {
      return errorM("Veuillez entrer une date d'arrivee");
    }
    if (data.currency === "") {
      return errorM("Veuillez entrer une devise");
    }
    if (!isValidNumber(data.kilosPrice)) {
      return errorM("Veuillez entrer un prix");
    }
    if (!isValidNumber(data.availableKilos)) {
      return errorM("Veuillez entrer une quantité");
    }
    return true;
  };

  const isValidNumber = (value: number) => {
    if (value === 0 || value === null || value === undefined) {
      return false;
    } else {
      return true;
    }
  };

  const handleResetInputs = () => {
    setData(initializedData);
    setHaveReseted(true);
  };

  useEffect(() => {
    if (haveReseted) {
      setHaveReseted(false);
    }
  }, [haveReseted]);

  return (
    <div>
      <ToastContainer />
      <LoaderCircle isLoading={false} />

      <form onSubmit={handleSubmit}>
        {contextHolder}
        <div className="grid grid-cols-1 dark:bg-slate-700 bg-slate-200/50 w-[90%] xl:w-3/4 mx-auto rounded-md py-10 items-center justify-center mt-20 gap-0 sm:gap-5  ">
          <div className="flex mx-2 items-center gap-4 lg:gap-16 flex-wrap justify-center">
            <InputField
              label="Nom du voyageur"
              disabled={disabledInput}
              type="text"
              id="travelerName"
              placeholder="nom"
              value={data.travelerName || ""}
              onChange={handleChange}
              pattern="[A-Za-zÀ-ÿ\s]{2,20}"
              title="Uniquement des lettres de l'alphabet français, les accents ne sont pas acceptés, 2 caractères minimum"
              required
            />
            <InputField
              label="Kilos disponibles"
              disabled={disabledInput}
              type="number"
              id="availableKilos"
              placeholder="kilos dispo"
              value={data.availableKilos || ""}
              onChange={handleChange}
              min={1}
              required
            />
          </div>
          <div className="flex mx-2 items-center mt-4 lg:mt-0 gap-4 lg:gap-16 flex-wrap justify-center">
            <InputField
              label="Prix du kilo"
              disabled={disabledInput}
              type="number"
              id="kilosPrice"
              placeholder="prix kilo"
              value={data.kilosPrice || ""}
              onChange={handleChange}
              min={1}
              required
            />
            <div>
              <label className={publishAddLabel}>
                Devise <span className="text-red-500">*</span>
              </label>
              <CustomSelect
                haveReseted={haveReseted}
                datas={currencyList}
                defaultQuery={data.currency}
                label="devise"
                classNameInput="mr-6 my-4 text-gray-500"
                classNamePopover={popoverClass}
                notFoundText="Devise introuvable"
                cityType="devise"
                className={`${publishAddInputStyle} py-[22px] bg-white`}
                defaultvalue={data.currency || ""}
                disabled={disabledInput}
                onChange={(value) => handleSelectChange("currency", value)}
              />
            </div>
          </div>
          <div className="flex mx-2 items-center mt-4 lg:mt-0 gap-4 lg:gap-16  flex-wrap justify-center">
            <div>
              <label className={publishAddLabel}>
                Date de départ <span className="text-red-500">*</span>
              </label>
              <CustomDatePicker
                value={
                  getCurrentDateSlashFormat(
                    data.departureDate as string
                  ) as string
                }
                defaultValue={data.departureDate as string}
                required={true}
                maxDate={maxDepartureDate}
                minDate={minDate as string}
                disabled={disabledInput}
                onChange={(_date, dateString) =>
                  handleDateChange("departureDate", dateString)
                }
                className={`${publishAddInputStyle}  ${classForDatePicker}`}
                placeholder="Date de départ"
              />
            </div>
            <div className="z-20">
              <label className={publishAddLabel}>
                Ville de départ <span className="text-red-500">*</span>
              </label>
              <CustomSelect
                haveReseted={haveReseted}
                datas={citiesList}
                defaultQuery={data.departureCity}
                classNamePopover={popoverClass}
                classNameInput="mr-6 my-4 text-gray-500"
                className={`${publishAddInputStyle} bg-white py-[22px]`}
                label="ville de depart"
                cityType="ville de depart"
                notFoundText="Ville introuvable"
                defaultvalue={""}
                disabled={disabledInput}
                onChange={(value) => handleSelectChange("departureCity", value)}
              />
            </div>
          </div>
          <div className="flex mx-2 mt-4 lg:mt-0 items-center gap-4 lg:gap-16  flex-wrap justify-center">
            <div>
              <label className={publishAddLabel}>
                Date d'arrivée <span className="text-red-500">*</span>
              </label>
              <CustomDatePicker
                value={
                  getCurrentDateSlashFormat(
                    data.arrivalDate as string
                  ) as string
                }
                defaultValue={data.arrivalDate as string}
                required={true}
                minDate={minDateArrivel}
                disabled={disabledInput}
                onChange={(_date, dateString) =>
                  handleDateChange("arrivalDate", dateString)
                }
                className={`${publishAddInputStyle} ${classForDatePicker} `}
                placeholder="Date d'arrivée"
              />
            </div>
            <div>
              <label className={publishAddLabel}>
                Ville d'arrivée <span className="text-red-500">*</span>
              </label>
              <CustomSelect
                haveReseted={haveReseted}
                datas={citiesList}
                defaultQuery={data.destinationCity}
                classNameInput="mr-6 my-4 text-gray-500"
                classNamePopover={popoverClass}
                className={`${publishAddInputStyle} py-[22px] bg-white`}
                label="ville d'arrivée"
                cityType="ville d'arrivée"
                notFoundText="Ville introuvable"
                defaultvalue={data.destinationCity.toLowerCase() || ""}
                disabled={disabledInput}
                onChange={(value) =>
                  handleSelectChange("destinationCity", value)
                }
              />
            </div>
          </div>
          <div className="flex mt-4 mx-2 lg:mt-0 items-center gap-4 lg:gap-16 flex-wrap justify-center">
            <div>
              <label className={publishAddLabel}>
                Discutable <span className="text-red-500">*</span>
              </label>
              <CustomSelect
                haveReseted={haveReseted}
                datas={discussList}
                classNameInput="mr-6 my-4 text-gray-500"
                classNamePopover={popoverClass}
                label="discutable"
                notFoundText="veuillez choisir oui ou non"
                className={`${publishAddInputStyle}  py-[22px] bg-white`}
                cityType="discutable"
                defaultvalue={data.discuss ? "oui" : "non"}
                disabled={disabledInput}
                canDeleteInput={false}
                onChange={(value) =>
                  handleSelectChange("discuss", value === "Oui")
                }
              />
            </div>
            <div>
              <label className={publishAddLabel}>
                Numéro de téléphone <span className="text-red-500">*</span>
              </label>
              <CustomPhoneInput
                haveReseted={haveReseted}
                defaultValue={data.travelerPhone}
                isValidedPhone={setIsValidPhoneNumber}
                disabled={disabledInput}
                onChange={handlePhoneChange}
                className={`${publishAddInputStyle} py-[11px] ${
                  isValidPhoneNumber
                    ? ""
                    : "border-red-500 focus:border-red-400"
                }`}
              />
            </div>
          </div>
          <div className="flex mx-2 flex-wrap flex-row-reverse items-center justify-center ">
            <TextAreaField
              label="Description (facultative)"
              disabled={disabledInput}
              id="description"
              placeholder="description"
              value={data.description || ""}
              onChange={handleChange}
            />
            <TextAreaField
              label="Contraintes (facultative)"
              disabled={disabledInput}
              id="constraintes"
              placeholder="contraintes"
              value={data.constraintes || ""}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-wrap mt-5 flex-row-reverse items-center justify-center gap-8">
            <button type="submit" className={gradientBtn}>
              Publier
            </button>
            <button
              onClick={() => {
                isValidPath
                  ? handleResetInputs()
                  : setIsModifying && setIsModifying(false);
              }}
              type="reset"
              className={destructiveButton}
            >
              {isValidPath ? "Effacer" : "Annuler"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
