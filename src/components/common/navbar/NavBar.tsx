import { gradientBtn, gradientText } from "@/common/ClassNames";
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

const OtherNavBarComponent = () => {
  return (
    <>
      <div className="-mr-8 sm:-mr-4">
        <NavLink to="/publish-ad">
          <button className={`${gradientBtn}`}>Publier</button>
        </NavLink>
      </div>
      <div className="hidden sm:flex">
        <UserComponent />
      </div>
      <div className="overflow-visible flex items-center">
        <div className="ml-1 hidden lg:flex -mr-4 sm:mr-0 sm:ml-2">
          <ModeToggle />
        </div>
        <div className="rounded-2xl p-1 -mr-4 sm:p-3 lg:hidden flex">
          <Dropdown />
        </div>
      </div>
    </>
  );
};

 const NavBar = () => {
  return (
    <nav className="shadow-lg overflow-x-hidden dark:bg-slate-800 p-1">
      <div className="flex justify-between items-center px-1 lg:px-10 pt-3 md:pt-5 pb-3">
        <MenuList menuNavBar={menuNavBar} />
        <div>
          <p
            className={`${gradientText} text-[14px] font-[Moul] lg:text-[25px] font-semibold cursor-pointer`}
            onClick={() => (window.location.href = "/")}
          >
            ROCOLIS
          </p>
        </div>
        <div className="flex gap-2 sm:gap-5 items-center">
          <div className="ml-2 mr-0">
            <Select >
              <SelectTrigger
                className={`py-[22px] border-none flex gap-2 items-center bg-slate-100 dark:bg-slate-700`}
              >
                <SelectValue  placeholder="Role " />
              </SelectTrigger> 
              <SelectContent className="dark:bg-slate-700 border-none">
                <SelectItem value="expeditor">Expéditeur</SelectItem>
                <SelectItem value="traveler">Voyageur</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <OtherNavBarComponent />
        </div>
      </div>
    </nav>
  );
};

export {NavBar}