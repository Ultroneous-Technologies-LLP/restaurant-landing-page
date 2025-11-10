"use client";

import { FC, useRef } from "react";
import { DateInputProps } from "./types";
import { Calendar } from "../../icons";

export const DateInput: FC<DateInputProps> = ({ label, placeholder, onChange, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const today = new Date().toISOString().split("T")[0];

  const openCalendar = () => {
    if (!inputRef.current) return;

    inputRef.current.showPicker?.();
    inputRef.current.focus();
  };

  return (
    <div className="mb-4">
      <label htmlFor={label} className="font-inter inline-block pb-2 text-base/4 font-medium">
        {label}
      </label>
      <div
        className="border-chinese-silver relative flex cursor-pointer items-center gap-4 rounded-full border p-4"
        onClick={openCalendar}
      >
        <div className="bg-seashell flex size-8 items-center justify-center rounded-lg">
          <Calendar className="cursor-pointer" />
        </div>
        <input
          ref={inputRef}
          id={label}
          type="date"
          className="font-inter text-quick-silver w-full cursor-pointer bg-transparent text-base/4 focus:outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={today}
        />
      </div>
    </div>
  );
};
