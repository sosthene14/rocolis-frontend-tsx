import { gradientBtn } from "@/common/ClassNames";
import { menuNavBar } from "@/constants/links";
import { ModeToggle } from "@/components/customs/ModeToggle";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";
import { Dropdown } from "./DropdownMenu";
import { UserComponent } from "./UserComponent";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/hooks/useTheme";
import { getSystemTheme } from "@/lib/utils";
import { useAuthStore, useUserDatasStore } from "@/store/store";
import { logoList } from "@/assets/images/Images";
import { AccountValidation } from "../accountValidation/AccountValidation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaQuestionCircle } from "react-icons/fa";
const LinksNotLogged = () => {
  return (
    <div className="flex gap-3 mr-5">
      <NavLink to="/login">
        <button className="dark:bg-slate-700 bg-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/50 duration-100 transition-all p-2 rounded-md">
          Connexion
        </button>
      </NavLink>
      <NavLink to="/register">
        <button className="dark:bg-slate-700 bg-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/50 duration-100 transition-all p-2 rounded-md">
          Inscription
        </button>
      </NavLink>
    </div>
  );
};

const OtherNavBarComponent = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <>
      <div className="-mr-8 sm:-mr-4">
        <NavLink to="/publish-ad">
          {isAuth && <button className={`${gradientBtn}`}>Publier</button>}
        </NavLink>
        <div className="mr-5">{!isAuth && <LinksNotLogged />}</div>
      </div>
      <div className="hidden items-center lg:flex">
        {isAuth && <UserComponent />}
      </div>
      <div className="overflow-visible flex items-center">
        <div
          className={`ml-1 ${
            !isAuth ? "block mr-2 py-3" : "hidden"
          }  lg:flex -mr-4 sm:mr-0 sm:ml-2`}
        >
          <ModeToggle />
        </div>
        <div className="rounded-2xl p-1 -mr-4 sm:p-3 lg:hidden flex">
          {isAuth && <Dropdown />}
        </div>
      </div>
    </>
  );
};

const ValidationChildren = () => (
  <>
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
              sécurité sur notre plateforme. Les autres utilisateurs pourront
              voir que vous êtes un compte vérifié.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </label>
  </>
);

const NavBar = () => {
  const theme = useTheme().theme;
  const systemTheme = getSystemTheme();
  const logoLink =
    theme === "dark"
      ? logoList[0]
      : theme === "light"
      ? logoList[1]
      : systemTheme === "dark"
      ? logoList[0]
      : systemTheme === "light"
      ? logoList[1]
      : "";

  const { isAuth } = useAuthStore();
  const { userData } = useUserDatasStore();
  return (
    <nav className="shadow-lg fade-in-top overflow-x-hidden dark:bg-slate-800 ">
      <div className="fade-in-top">
        {isAuth && userData.isVerified === false && <AccountValidation children={<ValidationChildren />} containerClassName="w-full items-center gap-2 cursor-pointer flex justify-center py-2 hover:bg-slate-200/50 transition-all duration-100 bg-slate-200 dark:bg-slate-700" />}
      </div>
      <div className="flex justify-between items-center px-1 lg:px-10 ">
        <MenuList menuNavBar={menuNavBar} />
        <div>
          <NavLink to={"/"}>
            <img
              loading="lazy"
              className="w-[200px] fade-in-top ml-1"
              src={logoLink}
            />
          </NavLink>
        </div>
        <div className="flex gap-2 sm:gap-5 items-center">
          <div className="ml-2 mr-0">
            {isAuth && (
              <Select>
                <SelectTrigger
                  className={`py-[22px] border-none flex gap-2 items-center bg-slate-100 dark:bg-slate-700`}
                >
                  <SelectValue placeholder="Role " />
                </SelectTrigger>
                <SelectContent className="dark:bg-slate-700 border-none">
                  <SelectItem value="expeditor">Expéditeur</SelectItem>
                  <SelectItem value="traveler">Voyageur</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
          <OtherNavBarComponent isAuth={isAuth} />
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
