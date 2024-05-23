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

export const PublishAdsTraveler = () => {
  const [disabledInput] = useState(false);
  const [, setIsValidPhoneNumber] = useState(false);
  const [data, setData] = useState<IPublishAdd>(initializedData);

  useEffect(() => {
    const destination = localStorage.getItem("destination");
    const departure = localStorage.getItem("departure");

    setData((prev) => ({
      ...prev,
      destinationCity: destination || "",
      departureCity: departure || "",
    }));
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <ToastContainer />
      <LoaderCircle isLoading={false} />
      <form>
        <div className="flex flex-col dark:bg-slate-700 bg-slate-100 w-[90%] xl:w-3/4 mx-auto rounded-xl py-10 items-center justify-center mt-20 gap-5 ">
          <div className="flex items-center gap-8 xl:gap-20 flex-wrap justify-center">
            <InputField
              label="Nom du voyageur"
              disabled={disabledInput}
              type="text"
              id="name"
              placeholder="nom"
              value={data.travelerName || ""}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => console.log(e.target.value)}
              pattern="[A-Za-zÀ-ÿ\s]{2,20}"
              title="Uniquement des lettres de l'alphabet français, les accents ne sont pas acceptés, 2 caractères minimum"
              required
            />
            <InputField
              label="Kilos disponibles"
              disabled={disabledInput}
              type="number"
              placeholder="kilos dispo"
              value={data.availableKilos || ""}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => console.log(e.target.value)}
              min={1}
              required
            />
          </div>
          <div className="flex items-center gap-8 xl:gap-20 flex-wrap justify-center">
            <InputField
              label="Prix du kilo"
              disabled={disabledInput}
              type="number"
              placeholder="prix kilo"
              value={data.kilosPrice || ""}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => console.log(e.target.value)}
              min={1}
              required
            />
            <div>
              <label className={publishAddLabel}>Devise</label>

              <CustomSelect
                label="devise"
                classNamePopover={popoverClass}
                notFoundText="Devise introuvable"
                cityType="devise"
                className={`${publishAddInputStyle} py-[22px]`}
                defaultvalue={data.currency || ""}
                disabled={disabledInput}
                onChange={(e) => console.log(e)}
              />
            </div>
          </div>
          <div className="flex items-center gap-8 xl:gap-20 flex-wrap justify-center">
            <div>
              <label className={publishAddLabel}>Date de départ</label>
              <CustomDatePicker
                required={true}
                minDate={minDate}
                disabled={disabledInput}
                onChange={(_date, dateString) => {
                  console.log(dateString);
                }}
                className={`${publishAddInputStyle} custom-datepicker`}
                placeholder="Date de départ"
              />
            </div>

            <div className="z-20">
              <label className={publishAddLabel}>Ville de départ</label>
              <CustomSelect
              
                classNamePopover={popoverClass}
                className={`${publishAddInputStyle} py-[22px]`}
                label="ville de depart"
                cityType="ville de depart"
                notFoundText="Ville introuvable"
                defaultvalue={data.departureCity || ""}
                disabled={disabledInput}
                onChange={(e) => console.log(e)}
              />
            </div>
          </div>
          <div className="flex items-center gap-8 xl:gap-20 flex-wrap justify-center">
            <div>
              <label className={publishAddLabel}>Date d'arrivée</label>
              <CustomDatePicker
                required={true}
                minDate={minDate}
                disabled={disabledInput}
                onChange={(_date, dateString) => {
                  console.log(dateString);
                }}
                className={`${publishAddInputStyle} custom-datepicker `}
                placeholder="Date d'arrivée"
              />
            </div>

            <div>
              <label className={publishAddLabel}>Ville d'arrivée</label>
              <CustomSelect
              
                classNamePopover={popoverClass}
                className={`${publishAddInputStyle} py-[22px]`}
                label="ville d'arrivée"
                cityType="ville d'arrivée"
                notFoundText="Ville introuvable"
                defaultvalue={data.destinationCity || ""}
                disabled={disabledInput}
                onChange={(e) => console.log(e)}
              />
            </div>
          </div>
          <div className="flex items-center gap-8 xl:gap-20 flex-wrap justify-center">
            <div>
              <label className={publishAddLabel}>Discutable</label>
              <CustomSelect
                classNamePopover={popoverClass}
                label="discutable"
                notFoundText="veuillez choisir oui ou non"
                className={`${publishAddInputStyle} py-[22px]`}
                cityType="discutable"
                defaultvalue={""}
                disabled={disabledInput}
                onChange={(e) => console.log(e)}
              />
            </div>
            <div>
              <label className={publishAddLabel}>Numéro de téléphone</label>
              <CustomPhoneInput
                isValidedPhone={setIsValidPhoneNumber}
                disabled={disabledInput}
                onChange={(e) => console.log(e)}
                className={`${publishAddInputStyle} py-[11px]`}
              />
            </div>
          </div>
          <div className="flex justify-center w-[90%] xl:w-[75%] mx-20">
            <TextAreaField
              label="Description (facultative)"
              disabled={disabledInput}
              placeholder="description"
              value={data.description || ""}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => data.description === e.target.value}
            />
          </div>
          <div className="flex justify-center w-[90%] xl:w-[75%] mx-20">
            <TextAreaField
              label="Contraintes (facultative)"
              disabled={disabledInput}
              placeholder="contraintes"
              value={data.constraintes || ""}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => data.constraintes === e.target.value}
            />
          </div>
          <div className="flex flex-wrap flex-row-reverse items-center justify-center gap-8">
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
