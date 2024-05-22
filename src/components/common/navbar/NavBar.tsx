import Select from "react-select";
import { gradientBtn, gradientText, selectStyles } from "@/common/ClassNames";
import { userRoles } from "@/constants/variables";
import { menuNavBar } from "@/constants/links";
import { ModeToggle } from "@/components/customs/ModeToggle";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";
import { Dropdown } from "./DropdownMenu";
import { UserComponent } from "./UserComponent";

export default function NavBar() {
  const userRole = "expeditor";

  return (
    <nav className="shadow-lg dark:bg-slate-800 p-1">
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
            <Select
              isSearchable={false}
              className="border-none border-transparent focus:border-transparent focus:ring-0 !outline-none"
              styles={selectStyles}
              options={userRoles}
              value={userRoles.filter((option) => option.value === userRole)}
              //onChange={(option) => handleUserRole(option.value)}
            />
          </div>

          <div className="-mr-8 sm:-mr-4">
            <NavLink to="/publish-ad">
              <button className={`${gradientBtn}`}>Publier</button>
            </NavLink>
          </div>
          <div className="hidden sm:flex">
            <UserComponent />
          </div>
          <div className="overflow-visible flex items-center">
            <div className="ml-1 hidden sm:flex -mr-4 sm:mr-0 sm:ml-2">
              <ModeToggle />
            </div>
            <div className="rounded-2xl p-1 -mr-4 sm:p-3 lg:hidden flex">
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
