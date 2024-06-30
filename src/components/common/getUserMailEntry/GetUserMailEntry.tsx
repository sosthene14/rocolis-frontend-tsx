import {
  longParagraphsStyles,
  publishAddLabel,
  registerInput,
} from "@/common/ClassNames";
import { ModeToggle } from "@/components/customs/ModeToggle";
import { FaChevronLeft } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { Modal } from "flowbite-react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { postDatas } from "@/api/Routes";
import { ValidationCode } from "../validation/ValidationCode";
import { message } from "antd";
import { ModifyPassword } from "@/components/main/modifyPassword/ModifyPassword";

const ModeToggleContainer = () => {
  return (
    <div className="absolute right-10 -mt-20">
      <ModeToggle />
    </div>
  );
};

const BackButton = ({
  onClickBack,
}: {
  onClickBack: (value: boolean) => void;
}) => {
  return (
    <div
      onClick={() => onClickBack(false)}
      className="flex items-center gap-3 mb-[70px] cursor-pointer"
    >
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

const EmailInput = ({
  handleChange,
}: {
  handleChange: (value: string) => void;
}) => {
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
        onChange={(e) => handleChange(e.target.value)}
        placeholder="email"
      />
      <ToastContainer />
    </div>
  );
};

const SubmitButton = ({
  handleHaveSubmited,
}: {
  handleHaveSubmited: (value: boolean) => void;
}) => {
  return (
    <div className="mb-[15px]">
      <button
        onClick={() => handleHaveSubmited(true)}
        type="submit"
        className="gradient-btn p-3 rounded-md"
      >
        Réinitialiser mon mot de passe
      </button>
    </div>
  );
};

export const GetUserMailEntry = ({
  handleClose,
}: {
  handleClose: (value: boolean) => void;
}) => {
  const [, setOpenModal] = useState(true);
  const [userMail, setUserMail] = useState("");
  const [haveSubmited, setHaveSubmited] = useState(false);
  const [canSeeValidationPage, setCanSeeValidationPage] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [canSeeModifyPassword, setCanSeeModifyPassword] = useState(false);
  const [provisoireToken, setProvisoireToken] = useState("");

  const info = useCallback(() => {
    messageApi.success("Code envoyé");
  }, [messageApi]);

  useEffect(() => {
    setTimeout(() => {
      haveSubmited && setHaveSubmited(false);
    }, 100);
  }, [haveSubmited]);

  const checkEmail = useCallback(async () => {
    await postDatas(
      "/api/v1/forgotten-password",
      { email: userMail },
      null,
      true
    ).then((res) => {
      if (res) {
        setCanSeeValidationPage(true);
        setTimeout(() => {
          info();
        }, 1000);
      }
    });
  }, [info, userMail]);

  useEffect(() => {
    if (haveSubmited) {
      checkEmail();
    }
  }, [checkEmail, haveSubmited]);

  return (
    <>
      {canSeeValidationPage && (
        <ValidationCode
        setProvisoireToken={setProvisoireToken}
          uriOtp="/api/v1/verify-otp/not-logged"
          children={contextHolder}
          handleClose={setOpenModal}
          isOpened={canSeeValidationPage}
          handleResent={setHaveSubmited}
          icon={false}
          email={userMail}
          shouldModifyInformations={false}
          handleCanModifyInformations={setCanSeeModifyPassword}
        />
      )}
      {canSeeModifyPassword && (
        <ModalComponent handleClose={setOpenModal}>
          {" "}
          <ModifyPassword userMail={userMail} token={provisoireToken} handleCloseModal={setCanSeeModifyPassword}/>
        </ModalComponent>
      )}
      {!canSeeValidationPage && (
        <ModalComponent handleClose={handleClose}>
          <ModeToggleContainer />
          <div className="w-auto px-5 shadow-sm rounded-xl py-8 bg-slate-100 dark:bg-slate-700">
            <BackButton onClickBack={setOpenModal} />
            <Header />
            <EmailInput handleChange={setUserMail} />
            <SubmitButton handleHaveSubmited={setHaveSubmited} />
          </div>
        </ModalComponent>
      )}
    </>
  );
};

const ModalComponent = ({
  children,
  handleClose,
}: {
  children: ReactNode;
  handleClose: (value: boolean) => void;
}) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <Modal
      show={openModal}
      size="2xl"
      dismissible
      popup
      onClose={() => {
        setOpenModal(false);
        handleClose(false);
      }}
    >
      <Modal.Header className="dark:bg-slate-700 bg-slate-100 rounded-md" />
      <Modal.Body className="dark:bg-slate-700 bg-slate-100 rounded-md">
        {children}
      </Modal.Body>
    </Modal>
  );
};
