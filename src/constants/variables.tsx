import { destinationsList } from "@/assets/images/Images";
import { IPublishAdd } from "@/components/interfaces/interfaces";
import { getCurrentDateSlashFormat } from "@/lib/utils";

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
    departureDate: new Date(),
    arrivalDate: new Date(),
    availableKilos: 0,
    kilosPrice: 0,
    currency: "",
    currencyLabel: "",
    viewNumber: new Date(),
    description: "",
    constraintes: "",
    publicationDate: new Date(),
    expirationDate: new Date(),
    isValided: false,
    discuss: false,
  };

  export const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  export const minDate = getCurrentDateSlashFormat();
