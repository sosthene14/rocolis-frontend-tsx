import { useState } from "react";
import {
  MageDashboard4Fill,
  LineMdBellLoop,
  ArcticonsAdFree,
} from "../../../assets/icons/Icon";
import {
  SolarUserBold,
  StreamlineLogout1Solid,
} from "../../../assets/icons/Icon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";

export const UserComponent = () => {
  const [isLogged] = useState(true);
  const [open, setOpen] = useState(false)

  return (
    <div className=" outline-none mt-2 flex text-md font-semibold cursor-pointer">
      {isLogged ? (
        <div>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="outline-none">
              <SolarUserBold className="h-[2.5rem] w-[2.5rem] p-2 bg-slate-200 rounded-full" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:bg-slate-700  bg-white  border-none">
              <DropdownMenuItem className="flex gap-2 " onClick={() => setOpen(false)}>
                <ArcticonsAdFree className="h-[1.2rem] text-md fill-current " />
                <NavLink className="text-md" to="/your-ads"> Mes annonces</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2">
                <LineMdBellLoop />
                Gérer les notifications
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2">
                <MageDashboard4Fill />
                Vue d'ensemble
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-2">
                <StreamlineLogout1Solid />
                Deconnexion
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div>
          {
            <div className="flex gap-5 absolute right-5 top-[80px] md:hidden">
              <a
                href="/signin"
                className=" font-medium hover:bg-slate-300 p-1 rounded-md"
              >
                <button style={{ fontSize: "14px", color: "steelblue" }}>
                  Se connecter
                </button>
              </a>
              <a
                href="/signup"
                className=" font-medium hover:bg-slate-300 p-1 rounded-md"
              >
                <button style={{ fontSize: "14px", color: "steelblue" }}>
                  {"S'inscrire"}
                </button>
              </a>
            </div>
          }
        </div>
      )}
    </div>
  );
};
