import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Select from "react-select";
import { gradientBtn, gradientText, selectStyles } from "@/common/ClassNames";
import { userRoles } from "@/constants/variables";
import Hamburger from "hamburger-react";
import { menuNavBar } from "@/constants/links";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ModeToggle } from "@/components/customs/ModeToggle";
import { UserComponent } from "./UserComponent";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const elementToClose = useRef<HTMLDivElement>(null);
  const hamburgerElement = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const userRole = "expeditor";
  const toggle = () => setIsOpen(!isOpen);
  useClickOutside(elementToClose, () => setIsOpen(false), hamburgerElement);

  return (
    <nav className="shadow-lg dark:bg-slate-800 p-1">
      <div className="flex justify-between items-center px-1 lg:px-10 pt-3 md:pt-5 pb-3">
        <MenuList menuNavBar={menuNavBar} />
        <div>
          <p
            className={`${gradientText} text-[14px] font-[Moul] lg:text-[25px] font-semibold cursor-pointer `}
            onClick={() => (window.location.href = "/")}
          >
            ROCOLIS
          </p>
        </div>
        <div className="flex gap-2 sm:gap-5 items-center">
          <div className="ml-2">
            <Select
              isSearchable={false}
              className="border-none border-transparent focus:border-transparent focus:ring-0 !outline-none"
              styles={selectStyles}
              options={userRoles}
              value={userRoles.filter((option) => option.value === userRole)}
              //onChange={(option) => handleUserRole(option.value)}
            />
          </div>

          <div className="-mr-8 sm:-mr-0">
            <NavLink to="/publish-ad">
              <button className={`${gradientBtn}`}>Publier</button>
            </NavLink>
          </div>

          <div></div>
          <div className="overflow-visible flex items-center">
            <div className="hidden sm:flex">
              <UserComponent />
            </div>
            <div className="ml-1 -mr-4 sm:mr-0 sm:ml-2">
              <ModeToggle />
            </div>
            <div
              ref={hamburgerElement}
              onClick={toggle}
              className=" rounded-2xl p-1 -mr-4 sm:p-3 lg:hidden flex "
              id="humbergerId"
            >
              <div>
                <Hamburger toggled={isOpen} toggle={setIsOpen} />
              </div>
            </div>

            <div>
              {isOpen ? (
                <motion.div
                  animate={{ x: 0 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  style={{ position: "relative" }}
                >
                  <div>
                    <div
                      ref={elementToClose}
                      className="flex gap-4 mt-8  flex-col  lg:hidden absolute  shadow-sm z-99 bg-white  py-7 px-8 rounded-lg right-0 top-[10px] w-[200px]  transform-none transition-none"
                    >
                      <div  className="flex  justify-center sm:hidden -mt-8">
                        <UserComponent  />
                      </div>
                      {menuNavBar.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="flex gap-2 items-center "
                        >
                          {item.icon}
                          <p className="text-neutral-900 text-sm font-semibold cursor-pointer">
                            <NavLink
                              to={item.link}
                              className="text-neutral-900 text-sm font-semibold cursor-pointer hover:text-violet-500 transition-all duration-150"
                            >
                              {item.text}
                            </NavLink>
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
