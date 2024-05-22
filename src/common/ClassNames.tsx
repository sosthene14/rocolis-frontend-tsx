import { heroImg } from "@/assets/images/Images";
import { CSSProperties } from "react";
import {
  ControlProps,
  CSSObjectWithLabel,
  GroupBase,
  StylesConfig,
} from "react-select";


interface IStateSelect {
  isFocused: boolean;
  isSelected: boolean;
}

export const underlinedDegrade =
  "capitalize text-gray-700 dark:text-gray-200 inline-block text-md relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0  before:h-1.5 hover:before:mt-10  before:transition-all before:duration-500 before:bg-gradient-to-r  before:from-[#10837F]  before:via-[#153969]  before:to-[#162F66] before:w-full before:opacity-100";
export const inactifUnderlineDegade =
  "capitalize text-gray-700 dark:text-gray-200 inline-block text-md relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 hover:before:mt-10 before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r  before:from-[#10837F]  before:via-[#153969]  before:to-[#162F66] hover:before:w-full hover:before:opacity-100";
export const gradientText =
  "bg-gradient-to-r from-[#10837F] to-[#162F66] bg-clip-text text-transparent";
export const gradientBtn =
  "text-white transition-all duration-500 bg-gradient-to-r from-[#10837f] via-[#10937f] to-[#162f66] hover:bg-gradient-to-br focus:ring-0 focus:ring-0 dark:focus:ring-0 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2";

export const selectStyles: StylesConfig<unknown, false, GroupBase<unknown>> = {
  indicatorSeparator: () => ({ display: "none" }),

  control: (
    baseStyles: CSSObjectWithLabel,
    state: ControlProps<unknown, false, GroupBase<unknown>>
  ) => ({
    ...baseStyles,
    padding: "0.1rem 0.0rem ",
    color: "white",
    outline: "none",
    border: "1px solid #10837f",
    fontSize: "15px",
    borderRadius: "0.375rem",
    display: "flex",
    gap: "1.25rem",
    boxShadow: state.isFocused ? "0 0 0 1px #10837f" : "none",
    borderColor: "gray",
  }),

  option: (baseStyles: CSSObjectWithLabel, state: IStateSelect) => ({
    ...baseStyles,
    backgroundColor: state.isSelected ? "#10837f" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "rgba(16, 131, 127, .7)",
      color: "white",
    },
  }),
};

export const selectStylesSorting = {
  indicatorSeparator: () => ({ display: "none" }),

  control: (baseStyles: CSSProperties, state: IStateSelect) => ({
    ...baseStyles,
    padding: "0.5rem 2rem",
    color: "white",
    outline: "none",
    border: "0px solid #10837f",
    fontSize: "15px",
    borderRadius: "0.375rem",
    display: "flex",
    gap: "1.25rem",
    backgroundColor: "rgba(22, 47, 102, .1)",

    boxShadow: state.isFocused ? "0 0 0 1px #10837f" : "none",
    borderColor: "gray",
  }),

  option: (baseStyles: CSSProperties, state: IStateSelect) => ({
    ...baseStyles,
    backgroundColor: state.isSelected ? "#10837f" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "rgba(16, 131, 127, .7)",
      color: "white",
    },
  }),
};

export const HeroBackgroundStyle = {
  backgroundImage: `url(${heroImg})`,
  backgroundSize: "cover",
  width: "auto",
  height: "500px",
  backgroundPosition: "center center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const titleClassNames = "text-3xl text-center mb-10 font-bold dark:text-white text-slate-600"
export const subTitlesClassNames = "text-xl mx-5 text-center mb-10 font-bold dark:text-white text-slate-600"