import { publishAddInputStyle, publishAddLabel } from "@/common/ClassNames";
import { CustomPhoneInput } from "@/components/customs/CustomPhoneInput";
import { userProfil } from "@/components/interfaces/interfaces";
import { initializedDataProfil } from "@/constants/variables";
import { useState } from "react";

export const ProfilPhoneNumber = ({ datas }: { datas: userProfil }) => {
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [data, setData] = useState<userProfil>(datas || initializedDataProfil);

  const handlePhoneChange = (value: string) => {
    setData((prev) => ({
      ...prev,
      travelerPhone: value,
    }));
  };
  return (
    <div className="overflow-x-hidden">
      <label className={publishAddLabel}>
        Numéro de téléphone <span className="text-red-500">*</span>
      </label>
      <CustomPhoneInput
        disabled={false}
        defaultValue={data.phoneNumber}
        isValidedPhone={setIsValidPhoneNumber}
        onChange={handlePhoneChange}
        className={`${publishAddInputStyle} py-[11px] ${
          isValidPhoneNumber ? "" : "border-red-400 focus:border-red-400"
        }`}
      />
    </div>
  );
};
