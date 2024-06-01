import React, { useState } from "react";
import { PublishAdsTraveler } from "../publishAds/PublishAdsTraveler";
import { IPublishAdd } from "@/components/interfaces/interfaces";
import { initializedData } from "@/constants/variables";
import { destructiveButton } from "@/common/ClassNames";
import { motion } from "framer-motion";

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

interface IAdsPreviewProps {
  setIsModifying: React.Dispatch<React.SetStateAction<boolean>>;
  loadedDatas: IPublishAdd;
}
const AdsPreviewed = ({ setIsModifying, loadedDatas }: IAdsPreviewProps) => {
  return (
    <div>
      <PublishAdsTraveler
        setIsModifying={setIsModifying}
        loadedDatas={loadedDatas ? loadedDatas : initializedData}
      />
    </div>
  );
};

const AdsPreview = ({ setIsModifying, loadedDatas }: IAdsPreviewProps) => {
  return (
    <div className="flex flex-col mt-10 mx-auto w-96 py-7 dark:bg-slate-700 bg-slate-100  rounded-2xl shadow-xl px-5">
      <p className="text-[15px] mb-5 text-rose-400">Annonce non validée</p>
      <Label
        htmlFor="name"
        labelText="Nom du voyageur"
        value={loadedDatas?.travelerName}
      />
      <Label
        htmlFor="villeDepart"
        labelText="Ville de départ"
        value={loadedDatas?.departureCity}
      />
      <Label
        htmlFor="dateDepart"
        labelText="Date de départ"
        value={loadedDatas?.departureDate as string}
      />
      <Label
        htmlFor="villeArrivee"
        labelText="Ville d'arrivée"
        value={loadedDatas?.destinationCity}
      />
      <Label
        htmlFor="dateArrivee"
        labelText="Date d'arrivée"
        value={loadedDatas?.arrivalDate as string}
      />

      <div className="flex gap-8 mt-5 justify-center">
        <button
          className="gradient-btn p-3 rounded-md"
          onClick={() => setIsModifying(true)}
        >
          Mettre à jour
        </button>
        <button className={destructiveButton}>Supprimer</button>
      </div>
    </div>
  );
};

export const UserAdsTraveler = ({
  loadedDatas,
}: {
  loadedDatas: IPublishAdd;
}) => {
  const [isModifying, setIsModifying] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isModifying ? (
        <AdsPreviewed
          setIsModifying={setIsModifying}
          loadedDatas={loadedDatas}
        />
      ) : (
        <div>
          <AdsPreview
            setIsModifying={setIsModifying}
            loadedDatas={loadedDatas}
          />
        </div>
      )}
    </motion.div>
  );
};
