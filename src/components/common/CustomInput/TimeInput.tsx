"use client";

import { FC, useState, useMemo, useRef } from "react";

import { useOutsideClick } from "@/hooks";
import { Clock } from "@/components/icons";

import { CustomInputProps } from "./types";

export const TimeInput: FC<CustomInputProps> = ({ label, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM" | "">("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setOpen(false));

  const timeOptions = useMemo(() => {
    const times: string[] = [];
    for (let hour = 1; hour <= 12; hour++) {
      for (const minute of [0, 30]) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return times;
  }, []);

  const handleTimeSelect = (hour: string, period: "AM" | "PM") => {
    setSelectedHour(hour);
    setSelectedPeriod(period);
    setValue(`${hour} ${period}`);
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
        className="p-4 border border-chinese-silver rounded-full flex gap-4 items-center relative cursor-pointer"
      >
        <div
          className="size-8 bg-seashell rounded-lg flex justify-center items-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Clock />
        </div>
        <input
          id={label}
          className="font-inter text-base/4 text-quick-silver placeholder:text-quick-silver focus:outline-none w-full"
          placeholder={placeholder}
          value={value}
          readOnly
          onClick={() => setOpen(true)}
        />
        {open && (
          <div className="absolute top-12.5 left-4 mt-2 max-w-50 w-full bg-white shadow-custom z-50 rounded-lg overflow-hidden">
            <div className="overflow-y-auto max-h-45 grid grid-cols-2 items-start">
              <div className="p-2 space-y-1">
                {timeOptions.map((hour) => (
                  <div
                    key={hour}
                    className={`p-2 cursor-pointer rounded font-inter text-sm text-center transition-all duration-300 ${
                      selectedHour === hour
                        ? " bg-[#FDF0EE] text-primary-red font-semibold"
                        : "hover:bg-seashell "
                    }`}
                    onClick={() =>
                      selectedPeriod
                        ? handleTimeSelect(hour, selectedPeriod)
                        : setSelectedHour(hour)
                    }
                  >
                    {hour}
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center items-center p-2 space-y-2 sticky top-1">
                {["AM", "PM"].map((period) => (
                  <div
                    key={period}
                    className={`w-full text-center py-2 cursor-pointer rounded font-inter text-sm transition-all duration-300 text-black ${
                      selectedPeriod === period
                        ? " bg-[#FDF0EE] text-primary-red font-semibold"
                        : "hover:bg-seashell "
                    }`}
                    onClick={() =>
                      selectedHour
                        ? handleTimeSelect(selectedHour, period as "AM" | "PM")
                        : setSelectedPeriod(period as "AM" | "PM")
                    }
                  >
                    {period}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
