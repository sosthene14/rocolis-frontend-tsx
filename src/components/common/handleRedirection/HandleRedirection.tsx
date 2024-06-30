import { getSubFromAccessToken, setCookies } from "@/lib/utils";
import { useAuthStore } from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IRedirection {
    serverResponse: {[key: string]: string}|undefined
}
export const HandleRedirection = ({ serverResponse }: IRedirection) => {
 
  const Navigate = useNavigate();
  const { _setAccessToken, _setRefreshToken, _setIsAuth, _setSub } =
    useAuthStore();
  useEffect(() => {
    if (
      serverResponse &&
      serverResponse?.access_token?.length > 0 &&
      serverResponse?.refresh_token?.length > 0
    ) {
      _setAccessToken(serverResponse?.access_token);
      _setRefreshToken(serverResponse?.refresh_token);
      _setIsAuth(true);
      setCookies("access_token", serverResponse?.access_token);
      setCookies("refresh_token", serverResponse?.refresh_token);
      _setSub(getSubFromAccessToken(serverResponse?.access_token) || null);
      Navigate("/");
    }
  }, [
    serverResponse,
    _setAccessToken,
    _setRefreshToken,
    _setIsAuth,
    _setSub,
    Navigate,
  ]);
  return null;
};
