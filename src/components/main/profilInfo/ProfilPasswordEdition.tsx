import { registerInput } from "@/common/ClassNames";
import { PasswordInput } from "@/components/ui/password-input";

const ProfilPasswordEdition = () => {
  return (
    <div className="flex flex-col overflow-x-hidden  gap-3">
      <div className="relative flex flex-col">
        <label
          className="text-[#7C838A] mb-1 dark:text-white rounded-md text-sm font-['Poppins']"
        >
          Mot de passe actuel <span className="text-red-500">*</span>
        </label>
        <PasswordInput
          className={`${registerInput} py-[20px]`}
        />
      </div>
      <div className="relative flex flex-col">
        <label
          className="text-[#7C838A] mb-1 dark:text-white rounded-md text-sm font-['Poppins']"
        >
          Nouveau mot de passe <span className="text-red-500">*</span>
        </label>
        <PasswordInput
          className={`${registerInput} py-[20px]`}
        />
      </div>
      <div className="relative flex flex-col">
        <label
          className="text-[#7C838A] mb-1 dark:text-white rounded-md text-sm font-['Poppins']"
        >
          Confirmer le nouveau mot de passe <span className="text-red-500">*</span>
        </label>
        <PasswordInput
          className={`${registerInput} py-[20px]`}
        />
      </div>
    </div>
  );
};

export default ProfilPasswordEdition;
