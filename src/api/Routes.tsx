import axios from "axios";
import { toast } from "react-toastify";

interface IError {
  response: {
    data: {
      message: string;
    };
  };
}

export const postDatas = (url: string, data: unknown, token: string|null = null) => {
  axios
    .post(`http://127.0.0.1:5000${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      toast.success(response.data.message);
      console.log("access token : " ,response.data.access_token);
      console.log("refresh token : " ,response.data.refresh_token);
    })
    .catch((error: IError) => {
      toast.error(error?.response?.data?.message);
    });
};

