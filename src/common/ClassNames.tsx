import { heroImg } from "@/assets/images/Images";
import { getSystemTheme } from "@/lib/utils";
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

    const theme = localStorage.getItem("vite-ui-theme");
  const systemTheme = getSystemTheme();
  const selectLightMode = {bgColor:"white",opacity:".6"}
  const selectDarkMode = {bgColor:"rgb(71 85 105)",opacity:""}
  const customSelectStyles =
    theme === "dark"
      ? selectDarkMode
      : theme === "light"
      ? selectLightMode
      : systemTheme === "dark"
      ? selectDarkMode
      : systemTheme === "light"
      ? selectLightMode
      : selectLightMode;

  export const regsiterSelectStyles: StylesConfig<unknown, false, GroupBase<unknown>> = {
    indicatorSeparator: () => ({ display: "none" }),
  
    control: (
      baseStyles: CSSObjectWithLabel,
      state: ControlProps<unknown, false, GroupBase<unknown>>
    ) => ({
      ...baseStyles,
      padding: "0.1rem 0.0rem ",
      color: "white",
      width:"280px",
      outline: "none",
      paddingTop:"3px",
      paddingBottom:"3px",
      "&:hover":{
        border: "1px solid rgb(59 130 246)",
      },
      backgroundColor:customSelectStyles.bgColor,
      opacity:customSelectStyles.opacity,
      border: "1px solid rgb(209 213 219)",
      fontSize: "15px",
      borderRadius: "2px",
      display: "flex",
      gap: "1.25rem",
      boxShadow: state.isFocused ? "0 0 0 1px" : "none",
      borderColor: "gray",
    }),
  
    option: (baseStyles: CSSObjectWithLabel, state: IStateSelect) => ({
      ...baseStyles,
      zIndex:"100px",
      backgroundColor: state.isSelected ? "#10837f" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "rgba(16, 131, 127, .7)",
        color: "white",
      },
    }),
  };

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
export const subTitlesClassNames = "text-xl  mx-5 text-center mb-10 font-bold dark:text-white text-slate-600"
export const publishAddInputStyle = "hover:border-blue-500 border-[1px] ring-0 focus:ring-0 dark:bg-slate-600 text-black dark:placeholder:text-gray-300 dark:text-gray-300 placeholder:text-black focus:ring-0 flex focus:border-blue-500 justify-between hover:bg-gray-50 cursor-pointer  focus-visible:ring-transparent transition-all border-gray-300 w-[350px] md:w-[300px] lg:w-[380px] transition-duration: 75ms outline-none p-3 rounded-sm bg-red-white shadow-sm opacity-60  dark:opacity-100 text-sm font-normal font-['Poppins']"
export const publishAddTextarea = "focus:ring-0 flex dark:bg-slate-600 dark:text-white placeholder:text-gray-300 hover:border-blue-500 focus:border-blue-500 justify-between hover:bg-gray-50 cursor-pointer  focus-visible:ring-transparent transition-all border-gray-300  transition-duration: 75ms outline-none p-3  mx-auto rounded-sm bg-white opacity-60 dark:opacity-100 text-opacity-10 text-sm font-normal font-['Poppins']"
export const popoverClass = "w-[280px] md:w-[380px] bg-white"
export const publishAddLabel = "block mb-1  text-sm font-medium text-gray-500 dark:text-gray-100"


export const chatBotTheme ={
  background: "#f5f8fb",
    headerBgColor: "#10837f",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#EF6C00",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
}

export const registerInput = "w-[350px] md:w-[300px] lg:w-[380px] ring-0 focus:ring-0 hover:border-blue-500  dark:bg-slate-600 text-black dark:placeholder:text-gray-300 dark:text-gray-300 placeholder:text-black focus:ring-0 flex focus:border-blue-500 justify-between hover:bg-gray-50 cursor-pointer  focus-visible:ring-transparent transition-all border-gray-300  transition-duration: 75ms outline-none p-3 rounded-sm bg-red-white shadow-sm opacity-60  dark:opacity-100 text-sm font-normal font-['Poppins']"
export const linkClassNames = "text-[#162F66] transition-all duration-100 hover:dark:text-[#82a6f3a3] hover:text-[#162f66b5] dark:text-[#82a6f3] font-semibold text-sm text-center lg:text-center font-['Montserrat'] cursor-pointer"
export const longParagraphsStyles = " text-gray-600 dark:text-white text-base font-normal font-['Montserrat']"
export const destructiveButton = "inline-flex items-center justify-center px-4 py-2 text-red-500 transition duration-300 ease-in-out bg-white border border-red-500 rounded-md shadow-md hover:bg-red-100 hover:text-red-600 focus:outline-none"
export const noDestructiveButton = "inline-flex items-center justify-center px-4 py-2 text-green-500 transition duration-300 ease-in-out bg-white border border-green-500 rounded-md shadow-md hover:bg-green-100 hover:text-green-600 text-green-500 focus:outline-none"


export const profilLinkClassNameNormal =
"text-[#10837f] font-bold cursor-pointer";
export const profilLinkClassNameActive =
"text-[#6E6D7A] cursor-pointer transition duration-300 hover:text-[#10837f]";