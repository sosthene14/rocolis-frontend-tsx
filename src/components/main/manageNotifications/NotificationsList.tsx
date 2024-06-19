import { destructiveButton, noDestructiveButton } from "@/common/ClassNames";
import { INotificationsData } from "@/components/interfaces/interfaces";
import {
  convertToDate,
  getCountryFullname,
  getCurrentDateInFrench,
} from "@/lib/utils";
import { Switch } from "antd";
import { useState } from "react";
import { NotificationModalModify } from "./NotificationModalModify";

export const NotificationsList = ({
  notificationList,
  shareData,
}: {
  notificationList: INotificationsData[];
  shareData?: (data: INotificationsData[]) => void;
}) => {
  return (
    <div className="flex gap-5 -mt-8 flex-wrap items-center justify-center">
      {notificationList.map((notification, index: number) => (
        <AvaibleNotificationsList shareData={shareData} key={index} notification={notification} />
      ))}
    </div>
  );
};

const AvaibleNotificationsList = ({
  notification,
  shareData,
}: {
  notification: INotificationsData;
  shareData?: (data: INotificationsData[]) => void;
}) => {
  const [, setData] = useState<INotificationsData>(notification);
  const departureDate = convertToDate(
    notification.notificationDepartureDate as string
  )
    ? new Date(convertToDate(notification.notificationDepartureDate as string)!)
    : null;
  const isExpired = departureDate ? departureDate < new Date() : false;
  const isNotificationExist =
    notification?.notificationDepartureCity.length > 0 &&
    notification?.notificationDestinationCity.length > 0;
  const [checked, setChecked] = useState(notification.isActive);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsActive = () => {
    setChecked(!checked);
    setData((prev) => ({
      ...prev,
      isActive: !checked,
    }));
  };
  return (
    <>
      {isOpen && <NotificationModalModify shareDatas={shareData} modalVisibility={(value) => setIsOpen(value)} loadedData={notification} />}
      <div className="border w-[90%] md:w-[40%] lg:w-[45%] xl:w-[30%]  hover:text-black text-black dark:text-slate-200 dark:bg-slate-700  bg-slate-100 dark:border-slate-600 border-gray-300 p-6 mb-4 rounded-md">
        <div className="flex justify-between items-center mb-3">
          <p
            className={`text-[12px] ${
              isExpired ? "text-red-500" : "text-green-500"
            }`}
          >
            {isExpired ? "Notification expirée" : "Notification valide"}
          </p>
          <div className="flex gap-2 flex-col items-center">
            <p
              className={`text-[12px] ${
                !checked ? "text-red-500" : "text-green-500"
              }`}
            >
              {checked ? "Active" : "Inactive"}
            </p>
            <Switch
              className="bg-gray-100"
              onChange={() => {
                handleIsActive();
              }}
              defaultChecked={notification.isActive}
              checked={checked}
            />
          </div>
        </div>

        <p className="mb-2 text-[14px]  flex justify-between">
          Ville de départ :{" "}
          <span className="font-semibold ">
            {isNotificationExist ? (
              <>
                {notification?.notificationDepartureCity} (
                {getCountryFullname(
                  notification?.notificationDepartureCountry
                )}
                )
              </>
            ) : (
              "Toutes les villes"
            )}
          </span>{" "}
        </p>
        <p className="mb-2 text-[14px] flex justify-between">
          Ville d'arrivée :{" "}
          <span className="font-semibold">
            {isNotificationExist ? (
              <>
                {notification?.notificationDestinationCity} (
                {getCountryFullname(
                  notification?.notifictionDestinationCountry
                )}
                )
              </>
            ) : (
              "Toutes les villes"
            )}
          </span>{" "}
        </p>
        <p className="mb-2 text-[14px] flex justify-between">
          Date de départ :{" "}
          <span className="font-semibold">
            {notification?.notificationDepartureDate &&
            notification?.notificationDepartureDate?.length > 0
              ? getCurrentDateInFrench(notification?.notificationDepartureDate)
              : "Toutes les dates"}
          </span>
        </p>
        <div className="flex justify-between mt-8">
          <button
            style={{ padding: "5px 8px" }}
            onClick={() => console.log("Supprimer")}
            className={destructiveButton}
          >
            Supprimer
          </button>
          <button
            onClick={() => setIsOpen(true)}
            style={{ padding: "5px 8px", fontWeight: "normal" }}
            className={noDestructiveButton}
          >
            Modifier
          </button>{" "}
        </div>
      </div>
    </>
  );
};
