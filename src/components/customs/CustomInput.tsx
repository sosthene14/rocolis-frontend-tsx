import { publishAddInputStyle, publishAddLabel } from "@/common/ClassNames";
import { IInputField } from "../interfaces/interfaces";


export const InputField = ({ label, ...props }: IInputField) => (
    <div className="flex flex-col">
      <label className={publishAddLabel}>
        {label}
      </label>
      <input
        className={publishAddInputStyle}
        {...props}
      />
    </div>
  );
  