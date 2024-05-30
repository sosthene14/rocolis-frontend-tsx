import dayjs, { Dayjs } from "dayjs";
import { ConfigProvider, DatePicker } from "antd";
import locale from "antd/locale/fr_FR";
import { LegacyRef } from "react";
import type { PickerRef } from "rc-picker";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
type DisabledDate<T> = (current: T) => boolean;
import "dayjs/locale/fr";

dayjs.locale("fr");
interface IProps {
  ref?: LegacyRef<PickerRef>;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  placeholder?: string;
  disabledDate?: DisabledDate<Dayjs>;
  onChange?: (date: Date, dateString: string | string[]) => void;
  minDate?: string;
  maxDate?:string;
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
  maxDate,
  className,
}: IProps) => {
  return (
    <ConfigProvider locale={locale}>
      <DatePicker
      suffixIcon={null}
        placement={placement}
        ref={ref}
        required={required}
        disabled={disabledState}
        defaultValue={(defaultValue && dayjs((defaultValue), dateFormatList[0])) as unknown as Date}
        placeholder={placeholder}
        format={dateFormatList}
        disabledDate={disabledDate}
        onChange={onChange}
        minDate={dayjs(minDate, dateFormatList[0])}
        maxDate={dayjs(maxDate, dateFormatList[0])}
        className={`${className}`}
      />
    </ConfigProvider>
  );
};
