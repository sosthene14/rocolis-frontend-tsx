import { INotificationsData } from "@/components/interfaces/interfaces";
import { NotificationsList } from "./NotificationsList";
import { NotificationsModal } from "./NotificationsModal";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { mockedNotifications } from "@/constants/variables";
import { useNotificationsDatasStore } from "@/store/store";

export const ManageNotifications = () => {
    const {_setNotificationsDatas,notificationsDatas} = useNotificationsDatasStore()
    const [datas,setDatas] = useState<INotificationsData[]>(mockedNotifications|| notificationsDatas)
    useEffect(() => {
        _setNotificationsDatas(datas)
    }, [datas,_setNotificationsDatas,notificationsDatas])
  return (
    <div className="flex flex-col items-center gap-10 justify-center mt-10">
      <NotificationsModal shareData={(data)=>setDatas([...datas,data])} />
      <Separator className="w-[90%] mb-10 h-[2px] mx-auto bg-opacity-10 bg-slate-200" />
      <NotificationsList shareData={(data)=>setDatas(data)} notificationList={datas}  />
    </div>
  );
};
