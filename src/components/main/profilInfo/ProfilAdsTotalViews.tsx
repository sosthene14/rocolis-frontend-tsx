import { useState } from "react";
import { InputField } from "@/components/customs/CustomInput";
import { userProfil } from "@/components/interfaces/interfaces";
import { initializedDataProfil } from "@/constants/variables";

export const ProfilAdsTotalViews = () => {
  return (
    <div >
      <CardComponent  />
    </div>
  );
};

const CardComponent = () => {
  const [data, setData] = useState<userProfil>(initializedDataProfil);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    label: string
  ) => {
    const { value } = e.target;
    setData((prev) => ({
      ...prev,
      [label]: value,
    }));
  };
  return (
    <div className=" rounded-md justify-between flex-wrap items-center">
      <div className="flex flex-col justify-center items-center ">
        <InputField
          placeholder="nom"
          onChange={(value) => handleChange(value, "name")}
          value={data.name}
          label="Nom"
          pattern="[A-Za-zÀ-ÿ\s]{2,30}"
        />
      </div>
    </div>
  );
};
