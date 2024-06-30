
import { useAuthStore } from "@/store/store";
import { postDatas } from "@/api/Routes";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { ValidationCode } from "../validation/ValidationCode";
import { toast, ToastContainer } from "react-toastify";
import { message } from "antd";
export const AccountValidation = ({ children,containerClassName }: { children: ReactNode,containerClassName?:string }) => {
  const { accessToken, sub } = useAuthStore();
  const [seeValidationCodePage, setSeeValidationCodePage] = useState(false);
  const [haveResent, setHaveResent] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const info = useCallback(() => {
    messageApi.success("Code envoyé");
  }, [messageApi]);

  const handleValidation = useCallback(async () => {
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
  }, [accessToken, info, sub]);

  useEffect(() => {
    if (haveResent) {
      handleValidation();
    }
    setTimeout(() => {
      setHaveResent;
    }, 100);
  }, [handleValidation, haveResent]);
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
        className={containerClassName}
      >
        {children}
      </div>
    </>
  );
};

