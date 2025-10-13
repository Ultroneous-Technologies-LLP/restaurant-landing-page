"use client";

import { FC, useMemo, useRef, useState } from "react";

import { useOutsideClick } from "@/hooks";

import { Clock } from "../../icons";
import { TimeInputProps } from "./types";
import { TIME_FORMATE } from "./constant";
import { CustomInputTextEnum } from "./enum";

export const TimeInput: FC<TimeInputProps> = ({ label, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState<
    CustomInputTextEnum | ""
  >("");
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

  const handleTimeSelect = (hour: string, period: CustomInputTextEnum) => {
    setSelectedHour(hour);
    setSelectedPeriod(period);
    setValue(`${hour} ${period}`);
    setOpen(false);
  };

  const handleHourClick = (hour: string) => {
    if (!selectedPeriod) {
      setSelectedHour(hour);
      return;
    }
    handleTimeSelect(hour, selectedPeriod);
  };

  const handlePeriodClick = (period: CustomInputTextEnum) => {
    if (!selectedHour) {
      setSelectedPeriod(period);
      return;
    }
    handleTimeSelect(selectedHour, period);
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
        <div className="size-8 bg-[#FFF2F0] rounded-lg flex justify-center items-center">
          <Clock onClick={() => setOpen((prev) => !prev)} />
        </div>
        <input
          id={label}
          className="font-inter text-base/4 text-[#A9A6A6] placeholder:text-[#A9A6A6] focus:outline-none w-full"
          placeholder={placeholder}
          value={value}
          readOnly
          onClick={() => setOpen(true)}
        />
        {open && (
          <div className="absolute top-12.5 left-4 mt-2 max-w-50 w-full bg-white shadow-[0_3px_10px_0_#00000014] z-50 rounded-lg overflow-hidden">
            <div className="overflow-y-auto max-h-45 grid grid-cols-2 items-start">
              <div className="p-2 space-y-1">
                {timeOptions.map((hour) => (
                  <div
                    key={hour}
                    className={`p-2 cursor-pointer rounded font-inter text-sm text-center transition-all duration-300 ${
                      selectedHour === hour
                        ? "bg-[#FDF0EE] text-primary-red font-semibold"
                        : "hover:bg-[#FFF2F0]"
                    }`}
                    onClick={() => handleHourClick(hour)}
                  >
                    {hour}
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center items-center p-2 space-y-2 sticky top-1">
                {TIME_FORMATE.map((period: CustomInputTextEnum) => (
                  <div
                    key={period}
                    className={`w-full text-center py-2 cursor-pointer rounded font-inter text-sm transition-all duration-300 text-black ${
                      selectedPeriod === period
                        ? "bg-[#FDF0EE] text-primary-red font-semibold"
                        : "hover:bg-[#FFF2F0]"
                    }`}
                    onClick={() =>
                      handlePeriodClick(period as CustomInputTextEnum)
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
