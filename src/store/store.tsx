import { INotificationsData } from "@/components/interfaces/interfaces";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IDatePicker {
  date: string | null | undefined;
  _setDate: (date: string | null | undefined) => void;
  disabled?: boolean;

  setDisabled: (disabled: boolean) => void;
}

export const useDatePickerStore = create<IDatePicker>()(
  devtools(
    persist(
      (set) => ({
        date: new Date().toDateString(),
        _setDate: (date: string | null | undefined) => set({ date }),
        disabled: false,
        setDisabled: (disabled: boolean) => set({ disabled }),
      }),
      {
        name: "date-picker",
      }
    )
  )
);

interface IDeparture {
  departure: string | null;
  errorDeparture: boolean;
  setErrorDeparture: (errorDeparture: boolean) => void;
  _setDeparture: (departure: string | null) => void;
}

export const useDepartureStore = create<IDeparture>()((set) => ({
  errorDeparture: false,
  setErrorDeparture: (errorDeparture: boolean) => set({ errorDeparture }),
  departure: null,
  _setDeparture: (departure: string | null) => set({ departure }),
}));

interface IDestination {
  destination: string | null;
  _setDestination: (destination: string | null) => void;
  errorDestination: boolean;
  setErrorDestination: (error: boolean) => void;
}

export const useDestinationStore = create<IDestination>()((set) => ({
  errorDestination: false,
  setErrorDestination: (errorDestination: boolean) => set({ errorDestination }),
  destination: null,
  _setDestination: (destination: string | null) => set({ destination }),
}));
interface IUserNotifications {
  notificationsDatas: INotificationsData[];
  _setNotificationsDatas: (notificationsDatas: INotificationsData[]) => void;
}

export const useNotificationsDatasStore = create<IUserNotifications>()(
  devtools(
    persist(
      (set) => ({
        notificationsDatas: [],
        _setNotificationsDatas: (notificationsDatas: INotificationsData[]) =>
          set({ notificationsDatas }),
      }),
      {
        name: "notifications",
      }
    )
  )
);

interface IUseAuth {
  sub: string | null;
  _setSub: (sub: string | null) => void;
  accessToken: string | null;
  refreshToken: string | null;
  _setRefreshToken: (token: string | null) => void;
  _setAccessToken: (token: string | null) => void;
  isAuth: boolean;
  _setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<IUseAuth>()((set) => ({
  sub: null,
  accessToken: null,
  refreshToken: null,
  _setRefreshToken: (refreshToken: string | null) => set({ refreshToken }),
  _setAccessToken: (accessToken: string | null) => set({ accessToken }),
  _setSub: (sub: string | null) => set({ sub }),
  isAuth: true,
  _setIsAuth: (isAuth: boolean) => set({ isAuth }),
}));

interface user {
  name: string;
  firstName: string;
  email: string;
  role: string;
  isGoogle: boolean;
  isbanned: boolean;
  total_ads_expeditor: number;
  total_ads_traveler: number;
  isVerified: boolean;
}

export interface IUserDatas {
  userData: user;
  _setUserDatas: (userData: user) => void;
}

export const useUserDatasStore = create<IUserDatas>()((set) => ({
  userData: {
    name: "",
    firstName: "",
    email: "",
    role: "",
    isGoogle: false,
    isbanned: false,
    total_ads_expeditor: 0,
    total_ads_traveler: 0,
    isVerified: true,
  },
  _setUserDatas: (userData: IUserDatas["userData"]) => set({ userData }),
}));
