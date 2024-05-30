import {
    longParagraphsStyles,
    publishAddLabel,
    registerInput,
  } from "@/common/ClassNames";
  import { ModeToggle } from "@/components/customs/ModeToggle";
  import { FaChevronLeft } from "react-icons/fa";
  import { ToastContainer } from "react-toastify";
  
  const ModeToggleContainer = () => {
    return (
      <div className="absolute right-10 -mt-20">
        <ModeToggle />
      </div>
    );
  };
  
  const BackButton = () => {
    return (
      <div className="flex items-center gap-3 mb-[70px] cursor-pointer">
        <FaChevronLeft className="text-black dark:text-white" />
        <p style={{ fontWeight: "bold" }} className={longParagraphsStyles}>
          Retour connexion
        </p>
      </div>
    );
  };
  
  const Header = () => {
    return (
      <>
        <div className="mb-[20px]">
          <p className={`text-black ${longParagraphsStyles}`}>
            Mot de passe oubliés ?
          </p>
        </div>
        <div className="mb-[20px]">
          <p className={longParagraphsStyles}>
            Ne vous inquiétez pas, cela nous arrive à tous. Entrez votre email
            ci-dessous, afin de modifier votre mot de passe
          </p>
        </div>
      </>
    );
  };
  
  const EmailInput = () => {
    return (
      <div className="relative flex flex-col gap-1 mb-[18px]">
        <label htmlFor="floating_outlined" className={publishAddLabel}>
          E-mail
        </label>
        <input
          style={{ width: "100%" }}
          className={`${registerInput} w-20`}
          type="email"
          required
          placeholder="email"
          onChange={(e) =>
            sessionStorage.setItem("email", e.target.value)
          }
        />
        <ToastContainer />
      </div>
    );
  };
  
  const SubmitButton = () => {
    return (
      <div className="mb-[15px]">
        <button type="submit" className="gradient-btn p-3 rounded-md">
          Réinitialiser mon mot de passe
        </button>
      </div>
    );
  };
  
  export const GetUserMailEntry = () => {
    return (
      <div>
        <ModeToggleContainer />
        <form className="flex justify-center mt-[100px]">
          <div className="z-0"></div>
          <div className="w-[350px] md:w-[580px] px-5 shadow-sm rounded-xl py-8 bg-slate-100 dark:bg-slate-700">
            <BackButton />
            <Header />
            <EmailInput />
            <SubmitButton />
          </div>
        </form>
      </div>
    );
  };
  