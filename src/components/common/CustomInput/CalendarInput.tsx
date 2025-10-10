"use client";

import { FC, useRef, useState } from "react";

import { Calendar } from "@/components/icons";

import { CustomInputProps } from "./types";

export const CalendarInput: FC<CustomInputProps> = ({ label, placeholder }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="pb-2 font-inter font-medium text-base/4 inline-block"
      >
        {label}
      </label>
      <div className="p-4 border border-chinese-silver rounded-full flex gap-4 items-center relative">
        <div className="size-8 bg-seashell rounded-lg flex justify-center items-center">
          <Calendar onClick={() => inputRef.current?.showPicker?.()} />
        </div>
        <input
          ref={inputRef}
          id={label}
          type="date"
          className="font-inter text-base/4 text-quick-silver focus:outline-none w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
