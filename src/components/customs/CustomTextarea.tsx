import {  publishAddLabel, publishAddTextarea } from "@/common/ClassNames";
import { IInputField } from "../interfaces/interfaces";

export const TextAreaField = ({ label, ...props }: IInputField) => (
    <div className="w-full">
      <label className={publishAddLabel}>
        {label}
      </label>
      <textarea
        className={`${publishAddTextarea} w-full`}
        {...props}
      />
    </div>
  );