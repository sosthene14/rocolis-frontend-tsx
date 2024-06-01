import { destinationsList } from "@/assets/images/Images";
import { IPublishAdd } from "@/components/interfaces/interfaces";
import { getCurrentDateSlashFormat } from "@/lib/utils";
import cities from "./cities.json";

export const userRoles = [
  { value: "expeditor", label: "Expéditeur" },
  { value: "traveler", label: "Voyageur" },
];

export const destinationsDatas = [
  {
    countryName: "Sénégal",
    cityName: "Dakar",
    nickname: "La Terranga",
    img: destinationsList[0],
  },
  {
    countryName: "Cote d'Ivoire",
    cityName: "Abidjan",
    nickname: "Babi",
    img: destinationsList[1],
  },
  {
    countryName: "Gabon",
    cityName: "Libreville",
    nickname: "Libreville",
    img: destinationsList[2],
  },
  {
    countryName: "Congo B/Z",
    cityName: "Brazzaville",
    nickname: "Brazza la verte",
    img: destinationsList[3],
  },
  {
    countryName: "Cameroun",
    cityName: "Yaoundé",
    nickname: "la ville aux sept collines",
    img: destinationsList[4],
  },
  {
    countryName: "RDC",
    cityName: "Kinshasa",
    nickname: "Kin",
    img: destinationsList[5],
  },
  {
    countryName: "Mali",
    cityName: "Bamako",
    nickname: "La coquette",
    img: destinationsList[6],
  },
  {
    countryName: "Nigeria",
    cityName: "Lagos",
    nickname: "Lagos",
    img: destinationsList[7],
  },
  {
    countryName: "Afrique du Sud",
    cityName: "Cape Town",
    nickname: "la ville mère",
    img: destinationsList[8],
  },
];

export const initializedData: IPublishAdd = {
  publishedBy: "",
  travelerName: "",
  travelerPhone: "",
  departureCity: "",
  departureCountry: "",
  destinationCity: "",
  destinationCountry: "",
  departureDate: undefined,
  arrivalDate: undefined,
  availableKilos: 0,
  kilosPrice: 0,
  currency: "",
  currencyLabel: "",
  viewNumber: 0,
  description: "",
  constraintes: "",
  publicationDate: undefined,
  expirationDate: undefined,
  isValided: false,
  discuss: false,
};

export const citiesList = cities;
export const discussList = [
  {
    value: "oui",
    label: "Oui",
  },
  {
    value: "non",
    label: "Non",
  },
];

export const currencyList = [
  { value: "XAF", label: "XAF (CFA)" },
  { value: "XOF", label: "XOF (CFA)" },
  { value: "USD", label: "USD ($)" },
  { value: "EUR", label: "EUR (€)" },
  { value: "GBP", label: "GBP (£)" },
  { value: "JPY", label: "JPY (¥)" },
  { value: "AUD", label: "AUD (A$)" },
  { value: "CAD", label: "CAD (C$)" },
  { value: "CHF", label: "CHF (CHF)" },
  { value: "CNY", label: "CNY (¥)" },
  { value: "INR", label: "INR (₹)" },
];

export const minDate = getCurrentDateSlashFormat();

export const chatBotSteps = [
  {
    id: "1",
    message:
      "Bienvenue sur notre chatbot ! Comment puis-je vous aider aujourd'hui ?",
    trigger: "2",
  },
  {
    id: "bot_options",
    options: [
      { value: "fermer", label: "Fermer le chat", trigger: "fermer" },
      { value: "relancer", label: "Relancer le chat", trigger: "relancer" },
    ],
  },
  {
    id: "2",
    options: [
      { value: "aide", label: "Besoin d'aide", trigger: "aide" },
      { value: "options", label: "options du chat", trigger: "bot_options" },
    ],
  },
  {
    id: "aide",
    message: "Sélectionnez un sujet parmi les suivants :",
    trigger: "topics",
  },
  {
    id: "topics",
    options: [
      {
        value: "annonces_publication",
        label: "comment publier une annonce ❓",
        trigger: "annonces_problemes_publication",
      },
      {
        value: "annonces_nonvisible",
        label: "Mes annonces ne sont pas visibles",
        trigger: "annonces_problemes_nonvisible",
      },
      {
        value: "contact_admin",
        label: "Contacter un administrateur",
        trigger: "admin_contact",
      },
    ],
  },

  {
    id: "annonces_problemes_publication",
    message:
      "Pour publier une annonce, vous devez cliquer sur le boutton publier qui se trouve en haut à droite",
    trigger: "2",
  },
  {
    id: "admin_contact",
    options: [
      {
        value: "whatsapp",
        label: "Whatsapp",
        trigger: "whatsapp",
      },
      {
        value: "telegram",
        label: "Telegram",
        trigger: "telegram",
      },
    ],
    trigger: "2",
  },
  {
    id: "telegram",
    component: (
      <div>
        <a
          href="https://wa.me/+221773101160"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#24A1DE"
            className="bi bi-telegram"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
          </svg>
        </a>
      </div>
    ),
    trigger: "2",
  },
  {
    id: "whatsapp",
    component: (
      <div>
        <a
          href="https://wa.me/+221773101160"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="green"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
      </div>
    ),
    trigger: "2",
  },
  {
    id: "annonces_problemes_nonvisible",
    message:
      "Dans le premier cas, votre annonce n'a pas encore été approuvée par un administrateur. Vous verrez une étiquette dans la section 'Mes Annonces' affichant le statut de votre annonce.\n\n\nDans le deuxième cas, votre annonce a été désapprouvée en raison d'une non-conformité. Vous verrez une étiquette correspondante sur cette annonce dans la section 'Mes Annonces'.\n\nDans le troisième cas, votre annonce a expiré et a été automatiquement effacée. Veuillez noter que la date d'expiration d'une annonce correspond à la date d'arrivée du voyageur.",
    trigger: "2",
  },
  {
    id: "fermer",
    message: "Le chat a été fermé.",
    end: true,
  },
  {
    id: "relancer",
    message: "Le chat a été relancé.",
    trigger: "2",
  },
];


export const  sortingOptions = [
  { value: "prix-kilo-décroissant", label: "Prix Kilo (décroissant)" },
  { value: "prix-kilo-croissant", label: "Prix Kilo (croissant)" },
  { value: "depart-imminents", label: "Départ imminent" },
  { value: "depart-non-imminents", label: "Départ non imminent" },
  { value: "nombre-kilos-croissants", label: "Nombre Kilos (croissants)" },
  {
    value: "nombre-kilos-décroissants",
    label: "Nombre Kilos (décroissants)",
  },
  { value: "date-recherchee", label: "Date recherchée" },
];