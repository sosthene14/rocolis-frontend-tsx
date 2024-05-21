import { HouseIcon, PlaneIcon, ContactIcon } from "@/assets/icons/Icon";
export interface IMenuList {
    icon: JSX.Element;
    text: string;
    link: string;
}
export const menuNavBar:IMenuList[] = [
  {
    icon: <HouseIcon className="dark:text-slate-500 text-slate-800 fill-current" />,
    text: "Accueil",
    link: "/",
  },
  {
    icon: <PlaneIcon className="dark:text-slate-500 text-slate-800 fill-current" />,
    text: "Destination",
    link: "/destinations",
  },
  {
    icon: <ContactIcon className="dark:text-slate-500 text-slate-800 fill-current" />,
    text: "Nous contacter",
    link: "/contact-us",
  },
];
