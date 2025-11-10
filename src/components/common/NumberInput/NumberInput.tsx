"use client";

import { FC, useMemo, useRef, useState } from "react";

import { useOutsideClick } from "@/hooks";

import { Dropdown } from "../../icons";

import { NumberInputTextEnum } from "./enum";
import { NumberInputProps } from "./types";

const ZERO = 0;

export const NumberInput: FC<NumberInputProps> = ({ label, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  const filteredOptions = useMemo(() => {
    const opts = options ?? [];

    if (value.trim() === "") {
      return opts;
    }

    return opts.filter((opt) => opt.toString().toLowerCase().includes(value.toLowerCase()));
  }, [options, value]);

  const handleDropdownSelect = (val: string | number): void => {
    setValue(val.toString());
    setIsOpen(false);
  };
  return (
    <div className="mb-4">
      <label className="font-inter inline-block pb-2 text-base/4 font-medium" htmlFor={label}>
        {label}
      </label>
      <div
        className="border-chinese-silver relative flex cursor-pointer items-center gap-4 rounded-full border p-4"
        ref={dropdownRef}
      >
        <div
          className="bg-seashell flex size-8 items-center justify-center rounded-lg"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <Dropdown />
        </div>
        <input
          className="font-inter text-quick-silver placeholder:text-quick-silver w-full text-base/4 focus:outline-none"
          id={label}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onClick={() => {
            setIsOpen(true);
          }}
          placeholder={placeholder}
          type="text"
          value={value}
        />
        {isOpen && (
          <div className="shadow-custom absolute top-12.5 left-4 z-50 mt-2 w-full max-w-50 overflow-hidden rounded-lg bg-white">
            <div className="max-h-45 overflow-y-auto p-2">
              {filteredOptions.length > ZERO ? (
                filteredOptions.map((opt) => (
                  <div
                    className="font-inter hover:text-primary-red cursor-pointer rounded p-3 text-sm transition-all hover:font-semibold"
                    key={opt}
                    onClick={() => {
                      handleDropdownSelect(opt);
                    }}
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
