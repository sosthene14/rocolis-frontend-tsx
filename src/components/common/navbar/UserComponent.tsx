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

export const UserComponent = () => {
  const [isLogged] = useState(true);

  return (
    <div className=" outline-none mt-2 flex text-md font-semibold cursor-pointer">
      {isLogged ? (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <SolarUserBold className="h-[2.5rem] w-[2.5rem] p-2 bg-slate-200 rounded-full" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:bg-slate-700 bg-white  border-none">
              <DropdownMenuItem className="flex gap-2">
                <ArcticonsAdFree className="h-[1.2rem] fill-current " />
                Mes annonces
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2">
                <LineMdBellLoop />
                Gérer les notifications
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2">
                <MageDashboard4Fill  />
                Vue d'ensemble
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-2">
                <StreamlineLogout1Solid  />
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
