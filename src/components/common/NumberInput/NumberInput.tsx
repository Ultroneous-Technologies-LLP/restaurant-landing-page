"use client";

import { FC, useMemo, useRef, useState } from "react";

import { useOutsideClick } from "@/hooks";
import { Dropdown } from "@/components/icons";

import { NumberInputProps } from "./types";
import { NumberInputTextEnum } from "./enum";

export const NumberInput: FC<NumberInputProps> = ({
  label,
  options,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setOpen(false));

  const filteredOptions = useMemo(() => {
    const opts = options ?? [];

    if (value.trim() === "") return opts;

    return opts.filter((opt) =>
      opt.toString().toLowerCase().includes(value.toLowerCase())
    );
  }, [options, value]);

  const handleDropdownSelect = (val: string | number) => {
    setValue(val.toString());
    setOpen(false);
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
        ref={dropdownRef}
        className="p-4 border border-[#CECCCA] rounded-full flex gap-4 items-center relative cursor-pointer"
      >
        <div
          className="size-8 bg-[#FFF2F0] rounded-lg flex justify-center items-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Dropdown />
        </div>
        <input
          id={label}
          type="text"
          className="font-inter text-base/4 text-[#A9A6A6] placeholder:text-[#A9A6A6] focus:outline-none w-full"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={() => setOpen(true)}
        />
        {open && (
          <div className="absolute top-12.5 left-4 mt-2 max-w-50 w-full bg-white shadow-[0_3px_10px_0_#00000014] z-50 rounded-lg overflow-hidden">
            <div className="overflow-y-auto max-h-45 p-2">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => (
                  <div
                    key={opt}
                    className="p-3 cursor-pointer rounded font-inter text-sm transition-all hover:font-semibold hover:text-primary-red"
                    onClick={() => handleDropdownSelect(opt)}
                  >
                    {opt}
                  </div>
                ))
              ) : (
                <div className="p-3 text-[#A9A6A6] text-sm font-inter">
                  {NumberInputTextEnum.NO_OPTION_FOUND}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
