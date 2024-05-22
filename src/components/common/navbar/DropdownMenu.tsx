import {User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Hamburger from "hamburger-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/customs/ModeToggle";
import {
  StreamlineLogout1Solid,
} from "@/assets/icons/Icon";
import { NavLink } from "react-router-dom";
import { ReactNode, useState } from "react";
import { menuAccount, menuNavBar } from "../../../constants/links";

export function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)

    const onDropdownChange = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <DropdownMenu onOpenChange={onDropdownChange}>
      <DropdownMenuTrigger asChild className="focus-visible:ring-transparent">
        <Button
          variant="ghost"
          className="ring-0 w-20 focus-visible:ring-transparent focus:ring-0 border-0 border-none"
          style={{ outline: "none", width: "70px", border: "none" }}
        >
          <Hamburger toggled={isOpen} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dark:bg-slate-800">
        <DropdownMenuLabel>
          <ModeToggle />
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-200" />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <User className="mr-2 h-10 w-10 bg-slate-200 dark:bg-slate-700 rounded-full p-2" />
              <span>Votre compte</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="dark:bg-slate-800 -mr-10">
                {menuAccount.map((item, index) => (
                  <DropdownMenuItem key={index} className="flex gap-2">
                    {item.icon as ReactNode}
                    <p className="text-neutral-900 text-sm font-semibold cursor-pointer">
                      <NavLink
                        to={item.link}
                        className="text-neutral-900 dark:text-white text-sm font-semibold cursor-pointer hover:text-violet-500 transition-all duration-150"
                      >
                        {item.label}
                      </NavLink>
                    </p>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="bg-slate-200" />

        {menuNavBar.map((item, index) => (
          <DropdownMenuItem key={index} className="flex gap-2">
            {item.icon as ReactNode}
            <p className="text-neutral-900 text-sm font-semibold cursor-pointer">
              <NavLink
                to={item.link}
                className="text-neutral-900 dark:text-white text-sm font-semibold cursor-pointer hover:text-violet-500 transition-all duration-150"
              >
                {item.label}
              </NavLink>
            </p>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator className="bg-slate-200" />
        <DropdownMenuItem className="flex gap-2">
          <StreamlineLogout1Solid className="w-4 h-4 fill-current" />
          <span className="font-semibold">Se déconnecter</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
