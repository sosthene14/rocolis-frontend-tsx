import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import countries from "i18n-iso-countries";
import frLocale from 'i18n-iso-countries/langs/fr.json'
countries.registerLocale(frLocale)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export const getCurrentDateSlashFormat = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate() + 1).padStart(2, "0");
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

export const isDateValidSlashed = (dateString: string) => {
  return dayjs(dateString, "DD/MM/YYYY", true).isValid();
};

export const isDateValidUnslashed = (dateString: string) => {
  return dayjs(dateString, "YYYY-MM-DD", true).isValid();
};

export const slashedFormatedDate = (dateString: string) => {
  try {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  } catch (error) {
    return null;
  }
};

export const unslashedFormatedDate = (dateString: string) => {
  try {
    if (dateString !== null || dateString !== undefined) {
      const [day, month, year] = dateString.split("/");
      return `${year}-${month}-${day}`;
    }
  } catch (error) {
    console.error("Erreur lors de la conversion de la date :", error);
    return null;
  }
};

export const formatedDayJsDate = (date: string) => {
  const dateFormat = "DD/MM/YYYY";
  return dayjs(slashedFormatedDate(date), dateFormat);
};

export const checkDateFormat = (
  dateString: string
): { isLongDate: boolean } => {
  const longDateFormat = /^[A-Za-z]{3} [A-Za-z]{3} \d{2} \d{4}$/;
  let isLongDate = longDateFormat.test(dateString);

  if (dateString === "undefined-undefined-") {
    isLongDate = true;
  }

  return { isLongDate };
};

export const addOneDay = (dateString: string) => {
  try {
    const [day, month, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }
    date.setDate(date.getDate() + 1);
    const newDay = date.getDate().toString().padStart(2, "0");
    const newMonth = (date.getMonth() + 1).toString().padStart(2, "0");
    const newYear = date.getFullYear();
    return `${newDay}/${newMonth}/${newYear}`;
  } catch (error) {
    return undefined;
  }
};

export const removeOneDay = (dateString: string) => {
  try {
    const [day, month, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    const newDay = date.getDate().toString().padStart(2, "0");
    const newMonth = (date.getMonth() + 1).toString().padStart(2, "0");
    const newYear = date.getFullYear();
    return `${newDay}/${newMonth}/${newYear}`;
  } catch (error) {
    return undefined;
  }
};

export const compareDates = (
  dateString1: string,
  dateString2: string
): number => {
  const convertDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day).toISOString().split("T")[0];
  };

  const date1 = convertDate(dateString1);
  const date2 = convertDate(dateString2);
  if (date1 < date2) 1;
  if (date1 === date2) -1;
  if (date1 > date2) -1;
  return 0;
};

export const convertToDate = (dateString: string) => {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
};


export const getCountryFullname = (countryCode:string) => {
  try {
    const countryObj = countries.getName(countryCode, "fr")
    return countryObj
  } catch (error) {
    console.error("Error getting country name:", error);
  }
};

export const getSystemTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
};
