import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaQuestionCircle } from "react-icons/fa";
import { useAuthStore } from "@/store/store";
import { postDatas } from "@/api/Routes";
import { useEffect, useState } from "react";
import { ValidationCode } from "../validation/ValidationCode";
import { toast, ToastContainer } from "react-toastify";
import { message } from "antd";
export const AccountValidation = () => {
  const { accessToken, sub } = useAuthStore();
  const [seeValidationCodePage, setSeeValidationCodePage] = useState(false);
  const [haveResent, setHaveResent] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.success("Code envoyé");
  };
  useEffect(() => {
    if (haveResent) {
      handleValidation();
    }
    setTimeout(() => {
      setHaveResent;
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [haveResent]);
  const handleValidation = async () => {
    await postDatas(
      "/api/v1/verify-account",
      {
        sub: sub,
      },
      accessToken,
      false
    )
      .then((res) => {
        if (res) {
          setSeeValidationCodePage(true);
          setTimeout(() => {
            info();
          }, 1000);
        } else {
          toast.error("Trop de tentative, veuillez reessayer ultérieurement");
        }
      })

      .catch((err) => console.log(err));
  };
  return (
    <>
      <ToastContainer />
      {seeValidationCodePage && (
        <ValidationCode
          children={contextHolder}
          handleResent={setHaveResent}
          handleClose={setSeeValidationCodePage}
          isOpened={seeValidationCodePage}
          icon={false}
        />
      )}
      <div
        onClick={() => handleValidation()}
        className="w-full items-center gap-2 cursor-pointer flex justify-center py-2 hover:bg-slate-200/50 transition-all duration-100 bg-slate-200 dark:bg-slate-700"
      >
        <p className="text-[#7C838A] dark:text-white rounded-md  text-sm font-['Poppins']">
          Cliquez ici pour vérifier votre compte
        </p>
        <label className="flex items-center gap-1 text-[#7C838A] dark:text-white rounded-md  text-sm font-['Poppins']">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <FaQuestionCircle />
              </TooltipTrigger>
              <TooltipContent className="text-[#7C838A] w-96 dark:bg-slate-500 border-none dark:text-white rounded-md  text-sm font-['Poppins']">
                <p>
                  La vérification de votre compte renforce la confiance et la
                  sécurité sur notre plateforme. Les autres utilisateurs
                  pourront voir que vous êtes un compte vérifié.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </label>
      </div>
    </>
  );
};
