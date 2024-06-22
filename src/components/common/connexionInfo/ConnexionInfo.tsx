/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { deviceDetect } from "react-device-detect";

interface IPropos {
  handleDataLogin: (data:IdataLogin) => void;
}
export interface IdataLogin {
  browserName: string | undefined,
  engineVersion: string | undefined,
  osName: string | undefined,
  osVersion: string | undefined,
  city: string | undefined,
  country: string | undefined,
  ip: string | undefined,
  org: string | undefined
}

export const ConnexionInfo = ({ handleDataLogin }: IPropos) => {
  const [ipAdress, setIpAdress] = useState("");
  const [dataLoggin, setDataLoggin] = useState({});

  const fetchIPInfo = async () => {
    try {
      const response = await fetch(`https://ipapi.co/${ipAdress}/json/`);
      if (!response.ok) {
        throw new Error("Failed to fetch IP information");
      }
      const data = await response.json();
      setDataLoggin((prevDataLoggin) => ({
        ...prevDataLoggin,
        city: data.city,
        country: data.country_name,
        ip: data.ip,
        org: data.org,
      }));
      return data;
    } catch (error) {
      console.log("Error fetching IP info:", error);
      return null;
    }
  };

  const getUserIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      if (!response.ok) {
        throw new Error("Failed to fetch IP address");
      }
      const data = await response.json();
      setIpAdress(data.ip);
    } catch (error) {
      console.log("Error fetching IP address:", error);
      // Fallback to browser location if IP fetching fails
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setDataLoggin((prevDataLoggin) => ({
              ...prevDataLoggin,
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            }));
          },
          (geoError) => {
            console.log("Error getting browser location:", geoError);
          }
        );
      }
    }
  };

  useEffect(() => {
    getUserIp();
  }, []);

  useEffect(() => {
    if (ipAdress.length > 0) {
      fetchIPInfo();
    }
  }, [ipAdress]);

  useEffect(() => {
    try {
      const deviceInfo = deviceDetect(undefined);
      setDataLoggin((prevDataLoggin) => ({
        ...prevDataLoggin,
        browserName: deviceInfo.browserName,
        engineVersion: deviceInfo.engineVersion,
        osName: deviceInfo.osName,
        osVersion: deviceInfo.osVersion,
      }));
    } catch (error) {
      console.log("Error detecting device information:", error);
    }
  }, []);

  useEffect(() => {
    handleDataLogin(dataLoggin as IdataLogin);
  }, [dataLoggin]);

  return <></>;
};

export default ConnexionInfo;
