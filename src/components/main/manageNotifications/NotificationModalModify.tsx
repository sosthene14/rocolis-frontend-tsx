import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  destructiveButton,
  noDestructiveButton,
  popoverClass,
  publishAddInputStyle,
  publishAddLabel,
} from "@/common/ClassNames";
import { CustomSelect } from "@/components/customs/CustomSelect";
import { citiesList, initializedData, minDate } from "@/constants/variables";
import { CustomDatePicker } from "@/components/customs/CustomDatePicker";
import { getSystemTheme } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { INotificationsData } from "@/components/interfaces/interfaces";
import { useNotificationsDatasStore } from "@/store/store";

interface IProps {
  loadedData: INotificationsData;
  modalVisibility?: (value: boolean) => void;
  shareDatas?: (data: INotificationsData[]) => void;
}

export const NotificationModalModify = ({
  loadedData,
  shareDatas,
  modalVisibility,
}: IProps) => {
  const [openModal, setOpenModal] = useState(true);
  useEffect(() => {
    modalVisibility && modalVisibility(openModal);
  }, [openModal, modalVisibility]);
  return (
    <div>
      <Modal
        dismissible
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="dark:bg-slate-700  bg-slate-100 rounded-md" />
        <Modal.Body className="dark:bg-slate-700 bg-slate-100 rounded-md">
          <ModalInputs shareDatas={(data) => shareDatas && shareDatas(data)}  loadedData={loadedData} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

const ModalInputs = ({ loadedData,shareDatas }: IProps) => {
  const [data, setData] = useState<INotificationsData>(
    loadedData || initializedData
  );
  const [haveReseted] = useState(false);
  const [disabledInput] = useState(false);
  const { notificationsDatas,_setNotificationsDatas } = useNotificationsDatasStore();
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
 
  const replaceObjectByUUID = (array: INotificationsData[], uuid: string, newObject: INotificationsData): INotificationsData[] => {
    const index = array.findIndex(obj => obj.uuid === uuid);
    if (index !== -1) {
      array[index] = newObject;
    } else {
      console.warn(`UUID ${uuid} not found in array`);
    }
    _setNotificationsDatas(array)
    shareDatas && shareDatas(array);
    return array;
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
          minDate={minDate}
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
          onClick={() => {
            replaceObjectByUUID(notificationsDatas, data.uuid as string, data);
          }}
        >
          Valider
        </button>{" "}
      </div>
    </div>
  );
};
