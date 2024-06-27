import { postDatas } from "@/api/Routes";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { IdataLogin } from "../connexionInfo/ConnexionInfo";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IGoogleLogin {
  isChecked: boolean;
  login_info: IdataLogin;
  uri: string;
  _haveSumited: boolean;
  setServerResponse: Dispatch<SetStateAction<{ [key: string]: string; } | undefined>>
}

export const GoogleComponent = ({
  isChecked,
  login_info,
  uri,
  _haveSumited,
  setServerResponse,
}: IGoogleLogin) => {
  const [haveSumited, setHaveSumited] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (!isChecked) {
        toast.warn(
          "Veuillez accepter les conditions d'utilisation et la politique de confidentialité"
        );
        return;
      }
      try {
        await setServerResponse(await postDatas(uri, login_info, tokenResponse.access_token));
      } catch (error) {
        toast.error(
          "Une erreur s'est produite lors de la connexion avec Google."
        );
      }
    },
  });

  useEffect(() => {
    if (_haveSumited) {
      setHaveSumited(true);
    }
  }, [_haveSumited]);

  useEffect(() => {
    if (haveSumited) {
      if (!isChecked) {
        toast.warn("Veuillez accepter les conditions d'utilisation");
      } else {
        googleLogin();
      }
      setHaveSumited(false);
    }
  }, [haveSumited, googleLogin, isChecked]);

  return null;
};
