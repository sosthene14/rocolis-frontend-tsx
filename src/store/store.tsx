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

export const useDepartureStore = create<IDeparture>()(
  devtools(
    persist(
      (set) => ({
        errorDeparture: false,
        setErrorDeparture: (errorDeparture: boolean) => set({ errorDeparture }),
        departure: null,
        _setDeparture: (departure: string | null) => set({ departure }),
      }),
      {
        name: "departure",
      }
    )
  )
);

interface IDestination {
  destination: string | null;
  _setDestination: (destination: string | null) => void;
  errorDestination: boolean;
  setErrorDestination: (error: boolean) => void;
}

export const useDestinationStore = create<IDestination>()(
  devtools(
    persist(
      (set) => ({
        errorDestination: false,
        setErrorDestination: (errorDestination: boolean) => set({ errorDestination }),
        destination: null,
        _setDestination: (destination: string | null) => set({ destination }),
      }),
      {
        name: "destination",
      }
    )
  )
);
