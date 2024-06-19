import { InputField } from "@/components/customs/CustomInput";
import { userProfil } from "@/components/interfaces/interfaces";
import { initializedDataProfil } from "@/constants/variables";
import { useState } from "react";

export const ProfilEdtion = ({ datas }: { datas: userProfil }) => {
  const [data, setData] = useState<userProfil>(datas || initializedDataProfil);
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
    <div className="overflow-x-hidden">
      <InputField
        placeholder="nom"
        onChange={(value) => handleChange(value, "name")}
        value={data.name}
        label="Nom"
        pattern="[A-Za-zÀ-ÿ\s]{2,30}"
      />
      <InputField
        placeholder="prenom"
        onChange={(value) => handleChange(value, "firstName")}
        value={data.firstName}
        label="Prenom"
        pattern="[A-Za-zÀ-ÿ\s]{2,30}"
      />
      <InputField
        placeholder="email"
        onChange={(value) => handleChange(value, "email")}
        value={data.email}
        label="Email"
      />
    </div>
  );
};
