import { publishAddInputStyle, publishAddLabel } from "@/common/ClassNames";
import { IInputField } from "../interfaces/interfaces";


export const InputField = ({ label, ...props }: IInputField) => (
    <div className="flex flex-col">
      <label className={publishAddLabel}>
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        className={publishAddInputStyle}
        {...props}
      />
    </div>
  );
  