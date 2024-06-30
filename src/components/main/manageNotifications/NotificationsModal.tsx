/* eslint-disable react-compiler/react-compiler */
import { Modal } from "flowbite-react";
import React, {  useState } from "react";
import {
  destructiveButton,
  noDestructiveButton,
  popoverClass,
  publishAddInputStyle,
  publishAddLabel,
} from "@/common/ClassNames";
import { CustomSelect } from "@/components/customs/CustomSelect";
import { citiesList, minDate } from "@/constants/variables";
import { CustomDatePicker } from "@/components/customs/CustomDatePicker";
import { getSystemTheme } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { INotificationsData } from "@/components/interfaces/interfaces";
interface IProps {
  shareData: (data: INotificationsData) => void;
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  loadedData?: INotificationsData;
}

export const NotificationsModal = ({ shareData,loadedData }: IProps) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        className="gradient-btn p-3 rounded-md"
        onClick={() => setOpenModal(true)}
      >
        Ajouter une notification
      </button>
      <Modal
        dismissible
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header  className="dark:bg-slate-700  bg-slate-100 rounded-md" />
        <Modal.Body  className="dark:bg-slate-700 bg-slate-100 rounded-md">
          <ModalInputs setOpenModal={setOpenModal} loadedData={loadedData} shareData={shareData} />
        </Modal.Body>
      </Modal>
    </>
  );
};

const initialData: INotificationsData = {
  notificationDepartureCity: "",
  notificationDestinationCity: "",
  notificationDepartureCountry: "",
  notifictionDestinationCountry: "",
  notificationDepartureDate: undefined,
  isActive: true,
};

const ModalInputs = ({ shareData,setOpenModal,loadedData }: IProps) => {
  const [data, setData] = useState<INotificationsData>(initialData||loadedData);
  const [haveReseted] = useState(false);
  const [disabledInput] = useState(false);
  const theme = useTheme().theme;
  const systemTheme = getSystemTheme();
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

  const handleSelectChange = (field: string, value: string | boolean) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDateChange = (field: string, value: string | string[]) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="z-20">
        <label className={publishAddLabel}>
          Ville de départ <span className="text-red-500">*</span>
        </label>
        <CustomSelect
          haveReseted={haveReseted}
          datas={citiesList}
          defaultQuery={data.notificationDepartureCity}
          classNamePopover={popoverClass}
          classNameInput="mr-6 my-4 text-gray-500"
          className={`${publishAddInputStyle} bg-white py-[22px]`}
          label="ville de depart"
          cityType="ville de depart"
          notFoundText="Ville introuvable"
          defaultvalue={data.notificationDepartureCity.toLowerCase() || ""}
          disabled={disabledInput}
          onChange={(value, label) => {
            handleSelectChange("notificationDepartureCity", value),
              handleSelectChange(
                "notificationDepartureCountry",
                label as string
              );
          }}
        />
      </div>
      <div>
        <label className={publishAddLabel}>
          Ville d'arrivée <span className="text-red-500">*</span>
        </label>
        <CustomSelect
          haveReseted={haveReseted}
          datas={citiesList}
          defaultQuery={data.notificationDestinationCity}
          classNameInput="mr-6 my-4 text-gray-500"
          classNamePopover={popoverClass}
          className={`${publishAddInputStyle} py-[22px] bg-white`}
          label="ville d'arrivée"
          cityType="ville d'arrivée"
          notFoundText="Ville introuvable"
          defaultvalue={data.notificationDestinationCity.toLowerCase() || ""}
          disabled={disabledInput}
          onChange={(value, label) => {
            handleSelectChange("notificationDestinationCity", value),
              handleSelectChange(
                "notifictionDestinationCountry",
                label as string
              );
          }}
        />
      </div>
      <div>
        <label className={publishAddLabel}>Date de départ</label>
        <CustomDatePicker
          value={data.notificationDepartureDate as string}
          defaultValue={data.notificationDepartureDate as string}
          required={true}
          minDate={minDate as string}
          disabled={disabledInput}
          onChange={(_date, dateString) =>
            handleDateChange("notificationDepartureDate", dateString)
          }
          className={`${publishAddInputStyle}  ${classForDatePicker}`}
          placeholder="Date de départ"
        />
      </div>
      <div className="flex gap-10 justify-between mt-3">
        <button
          style={{ padding: "5px 8px" }}
          onClick={() => console.log("Supprimer")}
          className={destructiveButton}
        >
          Annuler
        </button>
        <button
          style={{ padding: "5px 8px", fontWeight: "normal" }}
          className={noDestructiveButton}
          onClick={(() => {
            data.uuid = crypto.randomUUID(),
            shareData(data),setOpenModal && setOpenModal(false)
          })}
        >
          Valider
        </button>{" "}
      </div>
    </div>
  );
};
