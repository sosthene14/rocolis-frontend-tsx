import React, { useState, useEffect } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";

interface IProps {
  className: string;
  disabled: boolean;
  onChange: (value: string) => void;
  isValidedPhone: React.Dispatch<React.SetStateAction<boolean>>;
  defaultValue?: string;
}

export const CustomPhoneInput = ({
  defaultValue,
  className,
  disabled,
  onChange,
  isValidedPhone,
}: IProps) => {
  const [value, setValue] = useState(defaultValue || "");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (value !== "") {
      setIsValid(isValidPhoneNumber(value));
    } else {
      setIsValid(true);
    }
  }, [value]);

  useEffect(() => {
    isValidedPhone(isValid);
  }, [isValid, isValidedPhone]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      disabled={disabled}
      className={className}
      placeholder="+123456789"
      type="tel"
      value={value}
      onChange={handleChange}
      required
    />
  );
};
