import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import countryList from "react-select-country-list";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCountryFullname = (countryCode: string) => {
  try {
    return countryList().getLabel(countryCode);
  } catch (error) {
    console.error("Error getting country name:", error);
  }
};

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
}

export const slashedFormatedDate = (dateString: string) => {
  try {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  } catch (error) {
    return null
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
  const dateFormat = 'DD/MM/YYYY';
  return dayjs(slashedFormatedDate(date),dateFormat)
}

export const checkDateFormat = (dateString: string): { isLongDate: boolean } => {
  const longDateFormat = /^[A-Za-z]{3} [A-Za-z]{3} \d{2} \d{4}$/;
  let isLongDate = longDateFormat.test(dateString);

  if (dateString === "undefined-undefined-"){
      isLongDate = true
  }

  return {isLongDate};
};