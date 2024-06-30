import { postDatas } from "@/api/Routes";
import {
  longParagraphsStyles,
  publishAddLabel,
  registerInput,
} from "@/common/ClassNames";
import { ModeToggle } from "@/components/customs/ModeToggle";
import { PasswordInput } from "@/components/ui/password-input";
import { message } from "antd";
import { useCallback, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const ModeToggleContainer = () => {
  return (
    <div className="absolute right-10 ">
      <ModeToggle />
    </div>
  );
};
interface IProps {
  password: string;
  confirmPassword: string;
}

const initialPasswordDatas = {
  password: "",
  confirmPassword: "",
};
export const ModifyPassword = ({
  handleCloseModal,
  token,
  userMail,
}: {
  handleCloseModal: (value: boolean) => void;
  token: string;
  userMail: string;
}) => {
  const [data, setData] = useState<IProps>(initialPasswordDatas);
  const [messageApi, contextHolder] = message.useMessage();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      sub: userMail,
    }));
  };
  const errorM = useCallback(() => {
    messageApi.error("Code invalide");
  }, [messageApi]);
  const succes = useCallback(() => {
    messageApi.success("Une érreur est survenue");
  }, [messageApi]);
  const handleSubmit = async () => {
    await postDatas("/api/v1/modify-password", data, token, false).then(
      (res) => {
        if (res) {
          succes();
          setTimeout(() => {
            handleCloseModal(false);
          }, 1000);
        } else {
          errorM();
        }
      }
    );
  };
  return (
    <div>
      {contextHolder}
      <ModeToggleContainer />
      <form className=" flex justify-center mt-10 items-center">
        <div className="flex gap-0  ">
          <div className="w-[350px] overflow-x-hidden md:w-[580px] flex flex-col   shadow-sm rounded-xl py-8 bg-slate-100 dark:bg-slate-700">
            <div className="mb-[20px]">
              <div className="flex items-center ml-2 gap-3 mb-[50px] cursor-pointer">
                <FaChevronLeft className="text-black dark:text-white" />
                <p
                  onClick={() => handleCloseModal(false)}
                  style={{ fontWeight: "bold" }}
                  className={longParagraphsStyles}
                >
                  Retour connexion
                </p>
              </div>
              <p
                style={{ fontSize: "20px" }}
                className={`${longParagraphsStyles} text-center`}
              >
                Modifier le mot de passe
              </p>
            </div>
            <div className="mb-[30px]">
              <p className={`${longParagraphsStyles} text-center mx-5`}>
                Votre ancien mot de passe va etre réinitialisé. Veuillez définir
                un nouveau mot de passe pour votre compte.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <ToastContainer />
              <div className="  flex flex-col relative mb-[18px] ">
                <label htmlFor="floating_outlined" className={publishAddLabel}>
                  Créer un mot de passe
                </label>
                <PasswordInput
                  required
                  onChange={handleChange}
                  name="password"
                  className={registerInput}
                />
              </div>
            </div>
            <div className="flex flex-col mt-2 items-center ">
              <div className="mb-[18px] flex flex-col relative ">
                <label htmlFor="floating_outlined" className={publishAddLabel}>
                  Confirmer le nouveau mot de passe
                </label>
                <PasswordInput
                  required
                  onChange={handleChange}
                  name="confirmPassword"
                  className={registerInput}
                />
              </div>
            </div>
            <div className=" mb-[15px] mt-3 flex justify-center">
              <button
                type="button"
                onClick={() => handleSubmit()}
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                className="gradient-btn py-3 rounded-md px-10"
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
