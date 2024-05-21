import { underlinedDegrade, inactifUnderlineDegade } from "@/common/ClassNames";
import { IMenuList } from "@/constants/links";

export const MenuList = ({menuNavBar}: {menuNavBar: IMenuList[]}) => {
  return (
    <div className=" hidden gap-8 xl:flex lg:flex md:hidden ">
      {menuNavBar.map((item, index) => (
        <div key={index} className="flex gap-3 items-center">
          {item.icon}
          <p className="text-neutral-900 text-sm font-semibold cursor-pointer">
            <a
              href={item.link}
              className={
                window.location.pathname === item.link
                  ? underlinedDegrade
                  : inactifUnderlineDegade
              }
            >
              {item.text}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};
