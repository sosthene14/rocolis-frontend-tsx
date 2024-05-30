import { ImmeubleBgLogin } from "@/assets/images/Images";
import { linkClassNames, registerInput } from "@/common/ClassNames";
import { ModeToggle } from "@/components/customs/ModeToggle";
import { PasswordInput } from "@/components/ui/password-input";
import { Tooltip } from "antd";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaQuestionCircle } from "react-icons/fa";
import { GoogleLogin, SubmitButton } from "../login/Login";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute right-10 mt-5">
        <ModeToggle />
      </div>
      <form className="mt-0 lg:mb-0 flex justify-center items-center">
        <div className="block lg:flex w-[350px] sm:w-[600px] lg:w-[450px] mx-auto justify-center mt-16 sm:mt-20 items-center gap-20">
          <ImageSection />
          <FormSection />
        </div>
      </form>
    </motion.div>
  );
};

const ImageSection = () => (
  <div className="z-0 ml-20">
    <div className="h-[800px] gap-5 w-[400px] ml-10 hidden lg:inline-flex">
      <img
        className="h-[725px] rounded-[30px]"
        src={ImmeubleBgLogin}
        alt="luggage caroussel"
      />
    </div>
  </div>
);

const FormSection = () => (
  <div className="justify-center items-center px-0 md:px-8 flex flex-col top-[60px] sticky lg:relative right-[5%] md:right-[115px] py-7 z-20 mt-[0px] lg:-mt-[200px] mb-8 lg:mb-0 shadow-sm rounded-xl bg-slate-100 dark:bg-slate-700">
    <FormHeader />
    <FormFields />
    <SignUpLink />
    <OrDivider />
    <GoogleLogin />
  </div>
);

const FormHeader = () => (
  <>
    <div className="mb-[20px]">
      <p className="text-black dark:opacity-100  dark:text-white text-center text-[30px] font-bold font-['Poppins']">
        S'inscrire
      </p>
    </div>
    <div className="mb-[40px]">
      <p className="opacity-75 dark:opacity-100 text-center dark:text-white text-[#112211] text-base font-normal font-['Montserrat']">
        Préparons-nous à tout mettre en place pour que vous puissiez accéder à
        votre compte personnel.
      </p>
    </div>
  </>
);

const FormFields = () => (
  <div className="flex flex-col items-center justify-center gap-2">
    <div className="flex flex-col sm:flex-row items-center gap-3 ">
      <FormField label="Nom" type="text" name="nom" />
      <FormField label="Prenom" type="text" name="prenom" />
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <FormField label="E-mail" type="email" name="email" />
      <RoleSelect />
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <PasswordField label="Créer un mot de passe" name="password" />
      <PasswordField label="Confirmer le mot de passe" name="confirmPassword" />
    </div>

    <CheckBoxField />
    <SubmitButton text="Créer mon compte" />
  </div>
);

const FormField = ({
  label,
  type,
  name,
}: {
  label: string;
  type: string;
  name: string;
}) => (
  <div className="flex flex-col sm:flex-row items-center gap-3">
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-[#7C838A] dark:text-white rounded-md  text-sm font-['Poppins']"
      >
        {label}
      </label>
      <input type={type} name={name} className={registerInput} required />
      <ToastContainer />
    </div>
  </div>
);

const RoleSelect = () => (
  <div className="relative flex flex-col">
    <label
      htmlFor="role"
      className="flex items-center gap-1 text-[#7C838A] dark:text-white rounded-md  text-sm font-['Poppins']"
    >
      Role
      <Tooltip
        title="Expéditeurs : vous pouvez faire des demandes d'expéditions et serez contactés par des voyageurs. Voyageurs : vous serez contactés par des expéditeurs. Vous pouvez également switcher de rôle une fois connecté."
        color="#7C838A"
      >
        <FaQuestionCircle />
      </Tooltip>
    </label>
    <Select>
      <SelectTrigger className={`${registerInput} py-[22px] bg-white`}>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="dark:bg-slate-500">
        <SelectItem value="expeditor">Expéditeur</SelectItem>
        <SelectItem value="traveler">Voyageur</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

const PasswordField = ({ label, name }: { label: string; name: string }) => (
  <div className="relative flex flex-col">
    <label
      htmlFor={name}
      className="text-[#7C838A] dark:text-white rounded-md  text-sm font-['Poppins']"
    >
      {label}
    </label>
    <PasswordInput
      className={`${registerInput} py-[22px]`}
    />
  </div>
);

const CheckBoxField = () => (
  <div className="flex flex-wrap text-center mt-5 mb-5 gap-2 items-center justify-center w-full">
  
    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      J'accepte toutes les
      <NavLink
        to="/conditions"
        className={linkClassNames}
      >
        {" "}
        conditions{" "}
      </NavLink>
      et
      <NavLink
        to="/policies"
        className={linkClassNames}      >
        {" "}
        politiques de confidentialité{" "}
      </NavLink>
    </label>
    <input
      id="default-checkbox"
      type="checkbox"
      value=""
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
  </div>
);

const SignUpLink = () => (
  <div className="text-center mb-[30px] flex justify-center">
    <p className="text-neutral-900 dark:text-white text-center mt-5 text-sm font-medium font-['Montserrat']">
      Vous avez déjà un compte ?
      <NavLink
        to="/login"
        className={linkClassNames}
      >
        {" "}
        Se connecter
      </NavLink>
    </p>
  </div>
);

const OrDivider = () => (
  <div className="flex mx-32 justify-center items-center gap-3 mb-5">
    <div className="grow shrink basis-5  md:w-[200px] h-[1px] opacity-25 bg-neutral-900 dark:bg-white" />
    <p className="opacity-50 dark:text-white dark:opacity-100 text-neutral-900 text-sm font-normal font-['Montserrat']">
      Ou
    </p>
    <div className="grow shrink basis-5 w-[200px] h-[1px] opacity-25 bg-neutral-900 dark:bg-white" />
  </div>
);
