"use client";

import { FC, useMemo, useRef, useState } from "react";

import { useOutsideClick } from "@/hooks";

import { Dropdown } from "../../icons";
import { NumberInputProps } from "./types";
import { NumberInputTextEnum } from "./enum";

export const NumberInput: FC<NumberInputProps> = ({ label, options, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setOpen(false));

  const filteredOptions = useMemo(() => {
    const opts = options ?? [];

    if (value.trim() === "") return opts;

    return opts.filter((opt) => opt.toString().toLowerCase().includes(value.toLowerCase()));
  }, [options, value]);

  const handleDropdownSelect = (val: string | number) => {
    setValue(val.toString());
    setOpen(false);
  };
  return (
    <div className="mb-4">
      <label htmlFor={label} className="font-inter inline-block pb-2 text-base/4 font-medium">
        {label}
      </label>
      <div
        ref={dropdownRef}
        className="border-chinese-silver relative flex cursor-pointer items-center gap-4 rounded-full border p-4"
      >
        <div
          className="bg-seashell flex size-8 items-center justify-center rounded-lg"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Dropdown />
        </div>
        <input
          id={label}
          type="text"
          className="font-inter text-quick-silver placeholder:text-quick-silver w-full text-base/4 focus:outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={() => setOpen(true)}
        />
        {open && (
          <div className="shadow-custom absolute top-12.5 left-4 z-50 mt-2 w-full max-w-50 overflow-hidden rounded-lg bg-white">
            <div className="max-h-45 overflow-y-auto p-2">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => (
                  <div
                    key={opt}
                    className="font-inter hover:text-primary-red cursor-pointer rounded p-3 text-sm transition-all hover:font-semibold"
                    onClick={() => handleDropdownSelect(opt)}
                  >
                    {opt}
                  </div>
                ))
              ) : (
                <div className="text-quick-silver font-inter p-3 text-sm">
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
