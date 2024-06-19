import { HouseIcon, PlaneIcon, ContactIcon, ArcticonsAdFree, LineMdBellLoop, MageDashboard4Fill } from "@/assets/icons/Icon";
export interface IMenuList {
    icon: JSX.Element;
    label: string;
    link: string;
}
export const menuNavBar:IMenuList[] = [
  {
    icon: <HouseIcon className="fill-current" />,
    label: "Accueil",
    link: "/",
  },
  {
    icon: <PlaneIcon className="fill-current" />,
    label: "Destination",
    link: "/destinations",
  },
  {
    icon: <ContactIcon className="fill-current" />,
    label: "Nous contacter",
    link: "/contact-us",
  },
];

export const menuAccount = [
  {
    icon: <ArcticonsAdFree className="fill-current w-5 h-5" />,
    label: "Mes annonces",
    link:"/your-ads"
  },
  {
    icon: <LineMdBellLoop className="fill-current w-5 h-5" />,
    label: "Gérer les notifications",
    link:"/manage-notifications"
  },
  {
    icon: <MageDashboard4Fill className="fill-current w-5 h-5" />,
    label: "Vue d'ensemble",
    link:"/profil-info"
  }
];

export const bigSections = [
  {
    title: 'Départ',
    description: 'Rechercher des personnes et des lieux de départ vers nos destinations les plus populaires',
    backgroundImage: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Départ',
    description: 'Rechercher des personnes et des lieux de départ vers nos destinations les plus populaires',
    backgroundImage: 'https://images.pexels.com/photos/91217/pexels-photo-91217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];