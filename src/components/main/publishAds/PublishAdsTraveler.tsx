import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { LoaderCircle } from "@/assets/animations/LoaderCircle";
import { Footer } from "@/components/common/footer/Footer";
import { CustomDatePicker } from "@/components/customs/CustomDatePicker";
import { minDate } from "@/constants/variables";
import { CustomSelect } from "@/components/customs/CustomSelect";
import { CustomPhoneInput } from "@/components/customs/CustomPhoneInput";
import { useEffect, useState } from "react";
import { IPublishAdd } from "@/components/interfaces/interfaces";
import { initializedData } from "@/constants/variables";
import { InputField } from "@/components/customs/CustomInput";
import { TextAreaField } from "@/components/customs/CustomTextarea";
import {
  gradientBtn,
  popoverClass,
  publishAddInputStyle,
  publishAddLabel,
} from "@/common/ClassNames";
import { NavBar } from "@/components/common/navbar/NavBar";
import { addOneDay, convertToDate, removeOneDay } from "@/lib/utils";

export const PublishAdsTraveler = () => {
  const [disabledInput] = useState(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [data, setData] = useState<IPublishAdd>(initializedData);
  const maxDepartureDate = data.arrivalDate && removeOneDay(data.arrivalDate as unknown as string)
  const minDateArrivel = data.departureDate && addOneDay(data.departureDate as unknown as string)


  useEffect(() => {
    const destination = localStorage.getItem("destination");
    const departure = localStorage.getItem("departure");

    setData((prev) => ({
      ...prev,
      destinationCity: destination || "",
      departureCity: departure || "",
    }));
  }, []);

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

  const handlePhoneChange = (value: string) => {
    setData((prev) => ({
      ...prev,
      travelerPhone: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    data.kilosPrice = Number(data.kilosPrice);
    data.expirationDate = data.arrivalDate
    data.publicationDate = new Date();
    data.departureDate = convertToDate(data.departureDate as unknown as string);
    data.arrivalDate = convertToDate(data.arrivalDate as unknown as string);
    data.availableKilos = Number(data.availableKilos);
    console.log(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <ToastContainer />
      <LoaderCircle isLoading={false} />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 dark:bg-slate-700 bg-slate-100 w-[90%] xl:w-3/4 mx-auto rounded-xl py-10 items-center justify-center mt-20 gap-0 sm:gap-5  ">
          <div className="flex items-center gap-4 lg:gap-16 flex-wrap justify-center">
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
          <div className="flex items-center mt-4 lg:mt-0 gap-4 lg:gap-16 flex-wrap justify-center">
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
                label="devise"
                classNameInput="mr-8 mb-2"
                classNamePopover={popoverClass}
                notFoundText="Devise introuvable"
                cityType="devise"
                className={`${publishAddInputStyle} py-[22px]`}
                defaultvalue={data.currency || ""}
                disabled={disabledInput}
                onChange={(value) => handleSelectChange("currency", value)}
              />
            </div>
          </div>
          <div className="flex items-center mt-4 lg:mt-0 gap-4 lg:gap-16  flex-wrap justify-center">
            <div>
              <label className={publishAddLabel}>
                Date de départ <span className="text-red-500">*</span>
              </label>
              <CustomDatePicker
                required={true}
                maxDate={maxDepartureDate}
                minDate={minDate}
                disabled={disabledInput}
                onChange={(_date, dateString) =>
                  handleDateChange("departureDate", dateString)
                }
                className={`${publishAddInputStyle} custom-datepicker`}
                placeholder="Date de départ"
              />
            </div>
            <div className="z-20">
              <label className={publishAddLabel}>
                Ville de départ <span className="text-red-500">*</span>
              </label>
              <CustomSelect
                classNamePopover={popoverClass}
                classNameInput="mr-8 mb-2"
                className={`${publishAddInputStyle} py-[22px]`}
                label="ville de depart"
                cityType="ville de depart"
                notFoundText="Ville introuvable"
                defaultvalue={data.departureCity || ""}
                disabled={disabledInput}
                onChange={(value) => handleSelectChange("departureCity", value)}
              />
            </div>
          </div>
          <div className="flex mt-4 lg:mt-0 items-center gap-4 lg:gap-16  flex-wrap justify-center">
            <div>
              <label className={publishAddLabel}>
                Date d'arrivée <span className="text-red-500">*</span>
              </label>
              <CustomDatePicker
                required={true}
                minDate={minDateArrivel}
                disabled={disabledInput}
                onChange={(_date, dateString) =>
                  handleDateChange("arrivalDate", dateString)
                }
                className={`${publishAddInputStyle} custom-datepicker `}
                placeholder="Date d'arrivée"
              />
            </div>
            <div>
              <label className={publishAddLabel}>
                Ville d'arrivée <span className="text-red-500">*</span>
              </label>
              <CustomSelect
                classNameInput="mr-8 mb-2"
                classNamePopover={popoverClass}
                className={`${publishAddInputStyle} py-[22px]`}
                label="ville d'arrivée"
                cityType="ville d'arrivée"
                notFoundText="Ville introuvable"
                defaultvalue={data.destinationCity || ""}
                disabled={disabledInput}
                onChange={(value) =>
                  handleSelectChange("destinationCity", value)
                }
              />
            </div>
          </div>
          <div className="flex mt-4 lg:mt-0 items-center gap-4 lg:gap-16 flex-wrap justify-center">
            <div>
              <label className={publishAddLabel}>
                Discutable <span className="text-red-500">*</span>
              </label>
              <CustomSelect
                classNameInput="hidden"
                classNamePopover={popoverClass}
                label="discutable"
                notFoundText="veuillez choisir oui ou non"
                className={`${publishAddInputStyle} py-[22px]`}
                cityType="discutable"
                defaultvalue={data.discuss ? "Oui" : "Non"}
                disabled={disabledInput}
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
                isValidedPhone={setIsValidPhoneNumber}
                disabled={disabledInput}
                onChange={handlePhoneChange}
                className={`${publishAddInputStyle} py-[11px] ${
                  isValidPhoneNumber
                    ? ""
                    : "border-red-400 focus:border-red-400"
                }`}
              />
            </div>
          </div>
          <div className="flex mt-4 lg:mt-0 justify-center  w-[90%] xl:w-[75%] mx-auto">
            <TextAreaField
              label="Description (facultative)"
              disabled={disabledInput}
              id="description"
              placeholder="description"
              value={data.description || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-2 w-[90%] xl:w-[75%] mx-auto">
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
              type="reset"
              className="inline-flex items-center justify-center px-4 py-2 text-red-500 transition duration-300 ease-in-out bg-white border border-red-500 rounded-md shadow-md hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring focus:ring-red-200"
            >
              Annuler
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </motion.div>
  );
};
