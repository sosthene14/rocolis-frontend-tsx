import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "antd";

import { LegacyRef } from "react";
import type { PickerRef } from "rc-picker";
const dateFormat = "DD/MM/YYYY";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
type DisabledDate<T> = (current: T) => boolean;

interface IProps {
  ref?: LegacyRef<PickerRef>;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: Date;
  placeholder?: string;
  disabledDate?: DisabledDate<Dayjs>;
  onChange?: (date: Date, dateString: string | string[]) => void;
  minDate?: string;
  className?: string;
}

export default function CustomDatePicker({
  ref,
  required,
  disabled: disabledState,
  defaultValue,
  placeholder,
  disabledDate,
  onChange,
  minDate,
  className,
}: IProps) {
  return (
    <div>
      <DatePicker
        ref={ref}
        required={required}
        disabled={disabledState}
        defaultValue={defaultValue}
        placeholder={placeholder}
        format={dateFormatList}
        disabledDate={disabledDate}
        onChange={onChange}
        minDate={dayjs(minDate, dateFormat)}
        className={className}
      />
    </div>
  );
}
