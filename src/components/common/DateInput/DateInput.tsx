"use client";

import { FC, useRef } from "react";

import { Calendar } from "../../icons";

import { DateInputProps } from "./types";

const ISO_DATE_INDEX = 0;

export const DateInput: FC<DateInputProps> = ({ label, placeholder, onChange, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const today = new Date().toISOString().split("T")[`${ISO_DATE_INDEX}`];

  const openCalendar = (): void => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.showPicker();
    inputRef.current.focus();
  };

  return (
    <div className="mb-4">
      <label className="font-inter inline-block pb-2 text-base/4 font-medium" htmlFor={label}>
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
          className="font-inter text-quick-silver w-full cursor-pointer bg-transparent text-base/4 focus:outline-none"
          id={label}
          min={today}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder={placeholder}
          ref={inputRef}
          type="date"
          value={value}
        />
      </div>
    </div>
  );
};
