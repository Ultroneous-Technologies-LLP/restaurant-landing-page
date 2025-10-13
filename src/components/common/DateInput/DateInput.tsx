"use client";

import { FC, useRef } from "react";
import { DateInputProps } from "./types";
import { Calendar } from "../../icons";

export const DateInput: FC<DateInputProps> = ({
  label,
  placeholder,
  onChange,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const today = new Date().toISOString().split("T")[0];

  const openCalendar = () => {
    if (!inputRef.current) return;

    inputRef.current.showPicker?.();
    inputRef.current.focus();
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="pb-2 font-inter font-medium text-base/4 inline-block"
      >
        {label}
      </label>
      <div
        className="p-4 border border-chinese-silver rounded-full flex gap-4 items-center relative cursor-pointer"
        onClick={openCalendar}
      >
        <div className="size-8 bg-seashell rounded-lg flex justify-center items-center">
          <Calendar className="cursor-pointer" />
        </div>
        <input
          ref={inputRef}
          id={label}
          type="date"
          className="font-inter text-base/4 text-quick-silver focus:outline-none w-full cursor-pointer bg-transparent"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={today}
        />
      </div>
    </div>
  );
};
