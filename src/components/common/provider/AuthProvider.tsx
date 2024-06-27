// AuthContext.tsx
import React, { createContext, useEffect } from "react";
import { getRefreshToken, postDatas } from "@/api/Routes";
import { getSubFromAccessToken, setCookies } from "@/lib/utils";
import Cookies from "js-cookie";
import { useAuthStore, useUserDatasStore } from "@/store/store";

export interface AuthContextType {
  isAuth: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    isAuth,
    _setIsAuth,
    _setAccessToken,
    _setRefreshToken,
    _setSub,
    accessToken,
    refreshToken,
    sub,
  } = useAuthStore();
  const { _setUserDatas } = useUserDatasStore();
  const handleVerifyTokens = async (
    accessToken: string,
    refreshToken: string,
    sub: string | null
  ) => {
    try {
      const res = await postDatas(
        "/api/v1/verify-tokens",
        {
          access_token: accessToken,
          sub: sub,
        },
        accessToken,
        false
      );

      if (res) {
        _setIsAuth(true);
      } else {
        const refreshedToken = await getRefreshToken(
          sub || "",
          refreshToken || ""
        );
        if (refreshedToken.success) {
          handleTokenRefresh(refreshedToken.data);
        } else {
          _setIsAuth(false);
        }
      }
    } catch (error) {
      console.error(error);
      const refreshedToken = await getRefreshToken(
        sub || "",
        refreshToken || ""
      );
      if (refreshedToken.success) {
        handleTokenRefresh(refreshedToken.data);
      } else {
        _setIsAuth(false);
      }
    }
  };

  const getUser = async () => {
    await postDatas("/api/v1/get-user", { sub: sub }, accessToken, false).then(
      (res) => {
        if (res) {
          _setUserDatas(res.user);
        }
      }
    );
  };
useEffect(() => {
  accessToken && sub && getUser();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [accessToken,sub]);
  const handleTokenRefresh = (data: {
    access_token: string;
    refresh_token: string;
  }) => {
    _setAccessToken(data.access_token);
    _setRefreshToken(data.refresh_token);
    _setIsAuth(true);
    setCookies("access_token", data.access_token);
    setCookies("refresh_token", data.refresh_token);
    _setSub(getSubFromAccessToken(data.access_token) || null);
  };

  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    const refreshToken = Cookies.get("refresh_token");

    if (accessToken && refreshToken) {
      _setAccessToken(accessToken);
      _setRefreshToken(refreshToken);
      _setSub(getSubFromAccessToken(accessToken) || null);
    } else {
      _setIsAuth(false);
    }
  }, [_setAccessToken, _setRefreshToken, _setIsAuth, _setSub]);

  useEffect(() => {
    accessToken &&
      refreshToken &&
      sub &&
      handleVerifyTokens(accessToken, refreshToken, sub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, refreshToken, sub]);

  useEffect(() => {
    const refreshTokenInterval = setInterval(async () => {
      const refreshedToken = await getRefreshToken(
        sub || "",
        refreshToken || ""
      );
      if (refreshedToken.success) {
        _setAccessToken(refreshedToken.data.access_token);
        _setRefreshToken(refreshedToken.data.refresh_token);
        _setIsAuth(true);
      } else {
        _setIsAuth(false);
      }
    }, 50 * 60 * 1000); // 50 minutes in milliseconds

    return () => clearInterval(refreshTokenInterval);
  }, [refreshToken, sub, _setIsAuth, _setAccessToken, _setRefreshToken]);

  useEffect(() => {
    const refreshTokenInterval = setInterval(() => {
      handleVerifyTokens(accessToken || "", refreshToken || "", sub);
    }, 50 * 60 * 1000); // 50 minutes in milliseconds

    return () => clearInterval(refreshTokenInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, refreshToken, sub]);

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  );
};
