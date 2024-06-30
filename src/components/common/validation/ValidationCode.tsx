import {
  linkClassNames,
  longParagraphsStyles,
  publishAddInputStyle,
} from "@/common/ClassNames";
import { ModeToggle } from "@/components/customs/ModeToggle";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { postDatas } from "@/api/Routes";
import { useAuthStore } from "@/store/store";
import { message } from "antd";
const ModeToggleContainer = ({ icon }: { icon: boolean }) => {
  return (
    <div className="z-50 absolute right-10 mt-10">{icon && <ModeToggle />}</div>
  );
};

const ModalHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sm:flex sm:items-start -mt-2">
      {children}
      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
        <svg
          className="h-6 w-6 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <div className="mt-3 text-center sm:mt-10">
        <h3 className={`${longParagraphsStyles} text-center`}>
          Un code a été envoyé à l'adresse e-mail que vous avez fournie.
          Veuillez saisir ce code et vérifier vos spams au cas où vous ne le
          trouvez pas dans la boite de reception principale.
        </h3>
      </div>
    </div>
  );
};

const CodeInput = ({
  handeleCodeChange,
}: {
  handeleCodeChange: (value: string) => void;
}) => {
  const [code, setCode] = useState("");
  return (
    <div className="mt-5 flex justify-center">
      <input
        required
        type="text"
        autoComplete="on"
        className={publishAddInputStyle}
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
          handeleCodeChange(e.target.value);
        }}
      />
    </div>
  );
};

const ModalFooter = ({
  handleModalOpened,
  code,
  shouldModifyInformations = true,
  handleCanModifyInformations,
  email,
  uriOtp = "/api/v1/verify-otp",
  setProvisoireToken
}: {
  handleModalOpened: (value: boolean) => void;
  code: string;
  shouldModifyInformations: boolean;
  handleCanModifyInformations: (value: boolean) => void;
  email?: string;
  uriOtp?: string;
  setProvisoireToken ?: (value: string) => void;
}) => {
  const { accessToken, sub } = useAuthStore();
  const [messageApi, contextHolder] = message.useMessage();
  const errorM = useCallback(() => {
    messageApi.error("Code invalide");
  }, [messageApi]);
  const checkOtpCode = async () => {
    await postDatas(
      uriOtp,
      {
        sub: sub || email,
        otp_code: code,
      },
      accessToken,
      false
    ).then((res) => {
      if (res) {
        if (shouldModifyInformations) {
          window.location.reload();
        } else {
          setProvisoireToken && setProvisoireToken(res.token);
          handleCanModifyInformations(true);
          handleModalOpened(false);
        }
      } else {
        errorM()
      }
    });
  };
  return (
    <div className="mt-5 gap-5 sm:mt-4 sm:flex sm:flex-row-reverse flex justify-center flex-wrap">
       {contextHolder}
      <button
        onClick={() => code.trim() && checkOtpCode()}
        type="button"
        data-behavior="commit"
        className="gradient-btn w-[100px] rounded-md"
      >
        valider
      </button>
      <button
        onClick={() => handleModalOpened(false)}
        type="button"
        data-behavior="cancel"
        className="inline-flex items-center justify-center px-4 py-2 text-red-500 transition duration-300 ease-in-out bg-white border border-red-500 rounded-md shadow-md hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring focus:ring-red-200"
      >
        Annuler
      </button>
    </div>
  );
};

const ResendLink = ({
  handleResent,
}: {
  handleResent: (value: boolean) => void;
}) => {
  return (
    <p
      onClick={() => {
        handleResent(true);
      }}
      className="text-center mt-5 text-gray-500 dark:text-white text-sm"
    >
      Vous n'avez rien reçu ?<a className={linkClassNames}> renvoyer</a>
    </p>
  );
};

export const ValidationCode = ({
  icon,
  isOpened,
  handleClose,
  handleResent,
  children,
  shouldModifyInformations,
  handleCanModifyInformations,
  email,
  uriOtp,
  setProvisoireToken
}: {
  icon: boolean;
  isOpened: boolean;
  handleClose: (value: boolean) => void;
  handleResent: (value: boolean) => void;
  children?: React.ReactNode;
  shouldModifyInformations?: boolean;
  handleCanModifyInformations?: (value: boolean) => void;
  email?: string;
  uriOtp?: string;
  setProvisoireToken ?: (value: string) => void
}) => {
  return (
    <div>
      <ModalComponent
      setProvisoireToken={setProvisoireToken}
        uriOtp={uriOtp}
        email={email}
        children={children}
        handleClose={handleClose}
        icon={icon}
        isOpened={isOpened}
        handleResent={handleResent}
        shouldModifyInformations={shouldModifyInformations}
        handleCanModifyInformations={handleCanModifyInformations}
      />
    </div>
  );
};

const ModalComponent = ({
  icon,
  isOpened,
  handleClose,
  handleResent,
  children,
  shouldModifyInformations,
  handleCanModifyInformations,
  email,
  uriOtp,
  setProvisoireToken
}: {
  icon: boolean;
  isOpened: boolean;
  handleClose: (value: boolean) => void;
  handleResent: (value: boolean) => void;
  children?: React.ReactNode;
  shouldModifyInformations?: boolean;
  handleCanModifyInformations?: (value: boolean) => void;
  email?: string;
  uriOtp?: string;
  setProvisoireToken ?: (value: string) => void;
}) => {
  const [openModal, setOpenModal] = useState(true);
  const [code, setCode] = useState("");
  useEffect(() => {
    setOpenModal(isOpened);
  }, [isOpened]);
  useEffect(() => {
    handleClose(openModal);
  }, [handleClose, openModal]);

  return (
    <Modal show={openModal} size="lg" popup onClose={() => setOpenModal(false)}>
      <Modal.Header className="dark:bg-slate-700  bg-slate-100 rounded-md" />
      <Modal.Body className="dark:bg-slate-700 bg-slate-100 rounded-md">
        <ModeToggleContainer icon={icon} />
        <form>
          <ModalHeader children={children} />
          <CodeInput handeleCodeChange={setCode} />
          <ModalFooter
          setProvisoireToken={setProvisoireToken}
            uriOtp={uriOtp}
            email={email}
            shouldModifyInformations={shouldModifyInformations as boolean}
            handleCanModifyInformations={
              handleCanModifyInformations as (value: boolean) => void
            }
            code={code}
            handleModalOpened={setOpenModal}
          />
          <ResendLink handleResent={handleResent} />
        </form>
      </Modal.Body>
    </Modal>
  );
};
