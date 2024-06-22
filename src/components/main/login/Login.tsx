import { LogosGoogleIcon } from "@/assets/icons/Icon";
import { ImmeubleBgLogin } from "@/assets/images/Images";
import { linkClassNames, registerInput } from "@/common/ClassNames";
import { ModeToggle } from "@/components/customs/ModeToggle";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Login = () => {
  return (
    <div>
      <div className="absolute right-10 -mt-10">
        <ModeToggle />
      </div>
      <form className="mt-16 overflow-x-hidden ml:0 lg:ml-[100px] mb-10 lg:mb-0 overflow-y-hidden flex justify-center items-center">
        <div className="flex justify-center items-center gap-0">
          <ImageSection />
          <FormSection />
        </div>
      </form>
    </div>
  );
};

const ImageSection = () => (
  <div className="z-0 overflow-y-hidden">
    <div className="h-[805px] mt-5 gap-5 w-[416px] hidden lg:inline-flex">
      <img className="h-[565px] rounded-[30px]" src={ImmeubleBgLogin} alt="luggage caroussel" />
    </div>
  </div>
);

const FormSection = () => (
  <div className="w-[350px] md:w-[580px] flex flex-col sticky lg:relative right-[100px] z-20 mt-0 lg:-mt-[225px] shadow-sm rounded-xl py-8 bg-slate-100 dark:bg-slate-700">
    <FormHeader />
    <FormFields />
    <ForgotPassword />
    <SubmitButton text="Se Connecter" />
    <SignUpLink />
    <OrDivider />
    <GoogleLogin />
  </div>
);

const FormHeader = () => (
  <>
    <div className="mb-[20px]">
      <p className="text-black dark:text-white text-center text-[30px] font-bold font-['Poppins']">Se connecter</p>
    </div>
    <div className="mb-[20px]">
      <p className="opacity-75 mx-5 dark:opacity-100 dark:text-white text-center text-[#112211] text-base font-normal font-['Montserrat']">
        Connectez-vous pour accéder à votre compte ROCOLIS
      </p>
    </div>
  </>
);

const FormFields = () => (
  <div className="flex flex-col justify-center items-center">
    <Field label="E-mail">
      <Input style={{width: "300px"}} placeholder="E-mail" type="email" className={registerInput} />
      <ToastContainer />
    </Field>
    <Field label="Mot de passe">
      <PasswordInput style={{width: "300px"}} placeholder="Mot de passe" className={`${registerInput} w-[400px] py-[1.2rem] z-10`} />
    </Field>
  </div>
);

interface IProps {
  label:string;
  children:React.ReactNode
}
const Field = ({ label, children }:IProps) => (
  <div className="mb-[18px] flex flex-col">
    <label htmlFor="floating_outlined" className="text-[#7C838A] dark:text-white rounded-md text-sm font-['Poppins']">
      {label}
    </label>
    {children}
  </div>
);

const ForgotPassword = () => (
  <div className="mb-[20px] w-full flex justify-center gap-0 md:gap-[210px]">
    <p className={linkClassNames}>
      Mot de passe oublié ?
    </p>
  </div>
);

export const SubmitButton = ({text}: {text:string}) => (
  <div className="mb-[15px] flex justify-center">
    <button type="submit" className={`gradient-btn rounded-md py-3 w-[200px]`}>
      {text}
    </button>
  </div>
);

const SignUpLink = () => (
  <div className="text-center mb-[10px] mx-auto">
    <span className="text-neutral-900 dark:text-white text-sm font-medium font-['Montserrat']">
      {"Je n'ai pas de compte ? "}
    </span>
    <span className={linkClassNames}>
      <NavLink to="/register">{"S'inscrire"}</NavLink>
    </span>
  </div>
);

const OrDivider = () => (
  <div className="flex mx-10  justify-center items-center gap-3 mb-5">
    <div className="grow shrink basis-5 md:w-[200px] h-[1px] opacity-25 bg-neutral-900 dark:bg-white" />
    <p className="opacity-50 dark:text-white dark:opacity-100 text-neutral-900 text-sm font-normal font-['Montserrat']">
      Ou
    </p>
    <div className="grow shrink basis-5 w-[200px] h-[1px] opacity-25 bg-neutral-900 dark:bg-white" />
  </div>
);


export const GoogleLogin = ({handleHaveSubmitedGoogle}: {handleHaveSubmitedGoogle?: (value: boolean) => void}) => (
  <div onClick={() => handleHaveSubmitedGoogle && handleHaveSubmitedGoogle(true)} className="flex mx-auto gradient-btn justify-center items-center gap-3 w-[280px] pl-5 transition-all duration-100 border-2 rounded-xl border-[#7C838A] dark:border-white">
    <div className="flex-col cursor-pointer justify-center items-center inline-flex">
      <LogosGoogleIcon className="w-[30px]" />
    </div>
    <div className=" font-semibold text-white   dark:text-white text-center  text-sm h-14 px-2 py-4 flex-col cursor-pointer justify-center items-center inline-flex">
      Connectez-vous avec Google
    </div>
  </div>
);

export { Login };
