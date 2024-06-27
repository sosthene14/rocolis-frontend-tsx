import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

interface IError {
  response: {
    data: {
      message: string;
    };
  };
}

export const postDatas = async (
  url: string,
  data: unknown,
  token: string | null = null,
  shouldNotify: boolean = true
) => {
  try {
    const response = await axios.post(`http://127.0.0.1:5000${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    shouldNotify && toast.success(response.data.message);
    return response.data;
  } catch (error) {
    shouldNotify && toast.error((error as IError)?.response?.data?.message);
    return null;
  }
};

export const fRefreshToken = async (url: string, token: string) => {
  try {
    const response = await axios.get(`http://127.0.0.1:5000${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data?.message || "An error occurred");
    } else {
      toast.error("An unexpected error occurred");
    }
    return null;
  }
};

export const getRefreshToken = async (sub: string, refreshToken: string) => {
  try {
    const res = await fRefreshToken(
      `/api/v1/refresh-token/${sub}`,
      refreshToken || ""
    );
    if (res) {
      return { success: true, data: res };
    } else {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      return { success: false, data: null };
    }
  } catch (error) {
    toast.error("Une erreur s'est produite lors du rafraîchissement du token.");
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    return { success: false, data: null };
  }
};
