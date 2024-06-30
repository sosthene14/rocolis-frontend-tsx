import { postDatas } from "@/api/Routes";
import { LogosGoogleIcon } from "@/assets/icons/Icon";
import { ImmeubleBgLogin } from "@/assets/images/Images";
import { linkClassNames, registerInput } from "@/common/ClassNames";
import { GetUserMailEntry } from "@/components/common/getUserMailEntry/GetUserMailEntry";
import { GoogleComponent } from "@/components/common/googleLogin/GoogleComponent";
import { HandleRedirection } from "@/components/common/handleRedirection/HandleRedirection";
import { ModeToggle } from "@/components/customs/ModeToggle";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";

interface IdataLogin {
  email: string;
  password: string;
}
interface IInputs {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setHaveSubmitedGoogle?: React.Dispatch<React.SetStateAction<boolean>>;
}
const initializedLoginData: IdataLogin = {
  email: "",
  password: "",
};
const Login = () => {
  const [data, setData] = useState<IdataLogin>(initializedLoginData);
  const [serverResponse, setServerResponse] = useState<{
    [key: string]: string;
  }>();
  const [haveSubmitedGoogle, setHaveSubmitedGoogle] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchDatas();
  };
  useEffect(() => {
    setTimeout(() => {
      if (haveSubmitedGoogle) {
        setHaveSubmitedGoogle(false);
      }
    }, 10);
  }, [haveSubmitedGoogle]);
  const fetchDatas = async () => {
    if (data)
      setServerResponse(await postDatas("/api/v1/login", data, null, true));
  };
  return (
    <div>
      <div className="absolute right-10 -mt-10">
        <ModeToggle />
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-16 overflow-x-hidden ml:0 lg:ml-[100px] mb-10 lg:mb-0 overflow-y-hidden flex justify-center items-center"
      >
        <div className="flex justify-center items-center gap-0">
          <GoogleComponent
            _haveSumited={haveSubmitedGoogle}
            login_info={undefined}
            isChecked={true}
            setServerResponse={setServerResponse}
            uri="/api/v1/login/google"
          />
          <HandleRedirection serverResponse={serverResponse} />
          <ImageSection />
          <FormSection
            handleChange={handleChange}
            setHaveSubmitedGoogle={setHaveSubmitedGoogle}
          />
        </div>
      </form>
    </div>
  );
};

const ImageSection = () => (
  <div className="z-0 overflow-y-hidden">
    <div className="h-[805px] mt-5 gap-5 w-[416px] hidden lg:inline-flex">
      <img
        className="h-[565px] rounded-[30px]"
        src={ImmeubleBgLogin}
        alt="luggage caroussel"
      />
    </div>
  </div>
);

const FormSection = ({ handleChange, setHaveSubmitedGoogle }: IInputs) => (
  <div className="w-[350px] md:w-[580px] flex flex-col sticky lg:relative right-[100px] z-20 mt-0 lg:-mt-[225px] shadow-sm rounded-xl py-8 bg-slate-100 dark:bg-slate-700">
    <FormHeader />
    <FormFields handleChange={handleChange} />
    <ForgotPassword />
    <SubmitButton text="Se Connecter" />
    <SignUpLink />
    <OrDivider />
    <GoogleLogin handleHaveSubmitedGoogle={setHaveSubmitedGoogle} />
  </div>
);

const FormHeader = () => (
  <>
    <div className="mb-[20px]">
      <p className="text-black dark:text-white text-center text-[30px] font-bold font-['Poppins']">
        Se connecter
      </p>
    </div>
    <div className="mb-[20px]">
      <p className="opacity-75 mx-5 dark:opacity-100 dark:text-white text-center text-[#112211] text-base font-normal font-['Montserrat']">
        Connectez-vous pour accéder à votre compte ROCOLIS
      </p>
    </div>
  </>
);

const FormFields = ({ handleChange }: IInputs) => (
  <div className="flex flex-col justify-center items-center">
    <Field label="E-mail">
      <Input
        style={{ width: "300px" }}
        placeholder="E-mail"
        type="email"
        className={registerInput}
        onChange={handleChange}
        required
        name="email"
      />
      <ToastContainer />
    </Field>
    <Field label="Mot de passe">
      <PasswordInput
        required
        name="password"
        onChange={handleChange}
        style={{ width: "300px" }}
        placeholder="Mot de passe"
        className={`${registerInput} w-[400px] py-[1.2rem] z-10`}
      />
    </Field>
  </div>
);

interface IProps {
  label: string;
  children: React.ReactNode;
}
const Field = ({ label, children }: IProps) => (
  <div className="mb-[18px] flex flex-col">
    <label
      htmlFor="floating_outlined"
      className="text-[#7C838A] dark:text-white rounded-md text-sm font-['Poppins']"
    >
      {label}
    </label>
    {children}
  </div>
);

const ForgotPassword = () => {
  const [haveForgotPassword, setHaveForgotPassword] = useState(false);
  return (
    <div>
      <div
        onClick={() => setHaveForgotPassword(!haveForgotPassword)}
        className="mb-[20px] w-full flex justify-center gap-0 md:gap-[210px]"
      >
        <p className={linkClassNames}>Mot de passe oublié ?</p>
      </div>
      {haveForgotPassword && <div className="absolute top-1/2 -translate-y-1/2"><GetUserMailEntry handleClose={setHaveForgotPassword} /></div> }
    </div>
  );
};

export const SubmitButton = ({ text }: { text: string }) => (
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

export const GoogleLogin = ({
  handleHaveSubmitedGoogle,
}: {
  handleHaveSubmitedGoogle?: (value: boolean) => void;
}) => (
  <div
    onClick={() => handleHaveSubmitedGoogle && handleHaveSubmitedGoogle(true)}
    className="flex mx-auto gradient-btn justify-center items-center gap-3 w-[280px] pl-5 transition-all duration-100 border-2 rounded-xl border-[#7C838A] dark:border-white"
  >
    <div className="flex-col cursor-pointer justify-center items-center inline-flex">
      <LogosGoogleIcon className="w-[30px]" />
    </div>
    <div className=" font-semibold text-white   dark:text-white text-center  text-sm h-14 px-2 py-4 flex-col cursor-pointer justify-center items-center inline-flex">
      Connectez-vous avec Google
    </div>
  </div>
);

export { Login };
