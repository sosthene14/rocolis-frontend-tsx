import dayjs, { Dayjs } from "dayjs";
import { ConfigProvider, DatePicker } from "antd";
import locale from "antd/locale/fr_FR";
import { LegacyRef } from "react";
import type { PickerRef } from "rc-picker";
const dateFormat = "DD/MM/YYYY";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
type DisabledDate<T> = (current: T) => boolean;
import "dayjs/locale/fr";

dayjs.locale("fr");
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
  placement?: "topRight" | "bottomLeft" | "bottomRight" | "topLeft";
}

export const CustomDatePicker = ({
  ref,
  required,
  disabled: disabledState,
  defaultValue,
  placeholder,
  disabledDate,
  onChange,
  placement="topRight",
  minDate,
  className,
}: IProps) => {
  return (
    <ConfigProvider locale={locale}>
      <DatePicker
      
        placement={placement}
        ref={ref}
        required={required}
        disabled={disabledState}
        defaultValue={defaultValue}
        placeholder={placeholder}
        format={dateFormatList}
        disabledDate={disabledDate}
        onChange={onChange}
        minDate={dayjs(minDate, dateFormat)}
        className={`${className}`}
      />
    </ConfigProvider>
  );
};
