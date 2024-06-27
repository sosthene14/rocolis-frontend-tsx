import {  publishAddLabel, publishAddTextarea } from "@/common/ClassNames";
import { IInputField } from "../interfaces/interfaces";

export const TextAreaField = ({ label, ...props }: IInputField) => (
    <div className="w-[300px] mt-5 mx-auto md:w-[620px] lg:w-[830px]">
      <label className={publishAddLabel}>
        {label}
      </label>
      <textarea
        className={`${publishAddTextarea} w-full `}
        {...props}
      />
    </div>
  );