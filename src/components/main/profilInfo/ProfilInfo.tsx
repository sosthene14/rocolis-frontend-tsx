import {
  profilLinkClassNameActive,
  profilLinkClassNameNormal,
} from "@/common/ClassNames";
import { profilComponentLink, userProfilData } from "@/constants/variables";
import { UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { ProfilEdtion } from "./ProfilEdtion";
import ProfilPasswordEdition from "./ProfilPasswordEdition";
import { ProfilPhoneNumber } from "./ProfilPhoneNumber";
import { ProfilTotalAds } from "./ProfilTotalAds";

export const ProfilInfo = () => {
  const [activeScreen, setActiveScreen] = useState("");
  return (
    <form className="w-full overflow-x-hidden grid grid-cols-1 ml-5 md:ml-0 md:grid-cols-2  md:place-items-center">
      <div >
        <ProfilHeader />
        <p className="text-['Montserrat'] font-bold mt-10">General</p>
        <ProfilLinkList handleActiveScreen={setActiveScreen} />
        <OtherProfilLink />
      </div>
      <div >
        <div className={`${activeScreen === "first" ? "block" : "hidden"}`}>
          <ProfilEdtion datas={userProfilData} />
        </div>
        <div className={`${activeScreen === "second" ? "block" : "hidden"}`}>
          <ProfilPasswordEdition />
        </div>
        <div className={`${activeScreen === "third" ? "block" : "hidden"}`}>
          <ProfilPhoneNumber datas={userProfilData} />
        </div>
        <div className={ `mr-0 md:mr-20 ${activeScreen === "fourth" ? "block" : "hidden"}`}>
          <ProfilTotalAds />
        </div>
      </div>
    </form>
  );
};

const ProfilHeader = () => {
  return (
    <div className="flex overflow-x-hidden  items-center gap-5 mt-10 ">
      <div className="bg-slate-700 p-2 rounded-full">
        <UserIcon />
      </div>
      <div className="flex justify-start flex-col items-start">
        <p className="text-['Montserrat'] font-bold ">sosthene / General</p>
        <span className="text-slate-400 text-[14px]">
          Mettez à jour vos informations et consultez vos données
        </span>
      </div>
    </div>
  );
};

const ProfilLinkList = ({
  handleActiveScreen,
}: {
  handleActiveScreen: (value: string) => void;
}) => {
  const [activeScreen, setActiveScreen] = useState(
    profilComponentLink[0].screenTitle
  );
  useEffect(() => {
    handleActiveScreen(activeScreen);
  }, [activeScreen, handleActiveScreen]);
  return (
    <div className="overflow-x-hidden">
      {profilComponentLink.map((link, key) => {
        return (
          <p
            key={key}
            className={
              activeScreen === link.screenTitle
                ? profilLinkClassNameNormal
                : profilLinkClassNameActive
            }
            onClick={() => setActiveScreen(link.screenTitle)}
          >
            {link.title}
          </p>
        );
      })}
    </div>
  );
};

const OtherProfilLink = () => {
  return (
    <div className="mt-10 mb-10 overflow-x-hidden">
      <p className="text-[#6E6D7A] cursor-pointer  hover:bg-gradient-to-r hover:from-[#10837F] hover:to-[#162F66] hover:bg-clip-text hover:text-transparent">
        Télécharger vos données
      </p>
      <div className="w-60 h-[2px] bg-gray-200 mt-5 mb-5"></div>
      <p className="text-rose-500 cursor-pointer  ">Supprimer le compte</p>
    </div>
  );
};
