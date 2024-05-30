import { Footer } from "@/components/common/footer/Footer";
import { NavBar } from "@/components/common/navbar/NavBar";

interface ILabelProps {
  htmlFor: string;
  labelText: string;
  value: string;
}
const Label = ({ htmlFor, labelText, value }: ILabelProps) => (
  <div>
    <label
      htmlFor={htmlFor}
      className="mb-2 flex justify-between text-sm font-medium text-gray-500 dark:text-white"
    >
      {labelText}: <strong>{value}</strong>
    </label>
  </div>
);

const AdsPreview = () => {
  const datas = {
    nom: "John Doe",
    villeDepartDoc: { name: "Paris" },
    dateDepart: "01/01/2024",
    villeArriveDoc: { name: "Lyon" },
    dateArrivee: "02/01/2024",
  };

  return (
    <div className="flex flex-col mx-auto w-96 py-7 dark:bg-slate-700 bg-slate-100  rounded-2xl shadow-xl px-5">
      <p className="text-[15px] mb-5 text-rose-400">Annonce non validée</p>
      <Label htmlFor="name" labelText="Nom du voyageur" value={datas?.nom} />
      <Label
        htmlFor="villeDepart"
        labelText="Ville de départ"
        value={datas?.villeDepartDoc?.name}
      />
      <Label
        htmlFor="dateDepart"
        labelText="Date de départ"
        value={datas.dateDepart}
      />
      <Label
        htmlFor="villeArrivee"
        labelText="Ville d'arrivée"
        value={datas?.villeArriveDoc?.name}
      />
      <Label
        htmlFor="dateArrivee"
        labelText="Date d'arrivée"
        value={datas.dateArrivee}
      />

      <div className="flex gap-8 mt-5 justify-center">
        <button className="gradient-btn p-3 rounded-md">Mettre à jour</button>
        <button className="inline-flex items-center justify-center px-4 py-2 text-red-500 transition duration-300 ease-in-out bg-white border border-red-500 rounded-md shadow-md hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring focus:ring-red-200">
          Supprimer
        </button>
      </div>
    </div>
  );
};

export const UserAdsTraveler = () => {
  return (
    <div>
      <NavBar />
      <div>
        <AdsPreview />
      </div>
      <Footer />
    </div>
  );
};
