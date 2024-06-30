import { IPublishAdd } from "@/components/interfaces/interfaces";


export const generateLoadedDatas = (count: number): IPublishAdd[] => {
  const loadedDatas: IPublishAdd[] = [];
  const baseDate = new Date("2024-05-01");

  for (let i = 0; i < count; i++) {
    const departureDate = new Date(baseDate);
    departureDate.setDate(departureDate.getDate() + i);

    const arrivalDate = new Date(departureDate);
    arrivalDate.setDate(arrivalDate.getDate() + 15);

    const publicationDate = new Date("2024-05-25");
    const expirationDate = new Date(publicationDate);

    loadedDatas.push({
      publishedBy: "sos@gmail.com",
      travelerName: "sosthene",
      travelerPhone: "+221773101160",
      departureCity: "Dakar",
      departureCountry: "SN",
      destinationCity: "Brazzaville",
      destinationCountry: "CG",
      departureDate: departureDate.toLocaleDateString("fr-FR"),
      arrivalDate: arrivalDate.toLocaleDateString("fr-FR"),
      availableKilos: 20 + i * 10,
      kilosPrice: 10.0 + i * 10,
      currency: "XOF",
      viewNumber: 15,
      description: "aucune",
      constraintes: "aucune",
      publicationDate: publicationDate.toLocaleDateString("fr-FR"),
      expirationDate: expirationDate.toLocaleDateString("fr-FR"),
      isValided: true,
      discuss: true,
    });
  }

  return loadedDatas;
};

export const loadedDatas: IPublishAdd[] = generateLoadedDatas(20);


