"use client";

import { FC, useRef, useState } from "react";

import { useOutsideClick, useTimeInput } from "@/hooks";

import { Clock } from "../../icons";
import { TimeInputProps } from "./types";
import { TIME_FORMATE } from "./constant";

export const TimeInput: FC<TimeInputProps> = ({ label, placeholder, selectedDate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  const {
    timeOptions,
    availablePeriods,
    selectedHour,
    selectedPeriod,
    handleTimeSelect,
    handlePeriodSelect,
    isChristmas,
  } = useTimeInput(selectedDate);

  const handleDropdownToggle = () => {
    if (!selectedDate) return;
    setIsDropdownOpen((prev) => !prev);
  };

  // ✅ Derived value (no need for useEffect)
  const selectedTimeValue =
    selectedHour && selectedPeriod ? `${selectedHour} ${selectedPeriod}` : "";

  return (
    <div className="mb-4">
      <label htmlFor={label} className="font-inter inline-block pb-2 text-base/4 font-medium">
        {label}
      </label>
      <div
        ref={dropdownRef}
        className="border-chinese-silver relative flex cursor-pointer items-center gap-4 rounded-full border p-4"
      >
        <div className="bg-seashell flex size-8 items-center justify-center rounded-lg">
          <Clock onClick={handleDropdownToggle} />
        </div>
        <input
          id={label}
          className="font-inter text-quick-silver placeholder:text-quick-silver w-full cursor-pointer bg-transparent text-base/4 focus:outline-none"
          placeholder={placeholder}
          value={selectedTimeValue}
          readOnly
          onClick={handleDropdownToggle}
        />
        {isDropdownOpen && timeOptions.length > 0 && (
          <div className="shadow-custom absolute top-12.5 left-4 z-50 mt-2 w-full max-w-50 overflow-hidden rounded-lg bg-white">
            <div className="grid max-h-45 grid-cols-2 items-start overflow-y-auto">
              <div className="space-y-1 p-2">
                {timeOptions.map(({ key, hour, period, disabled }) => (
                  <div
                    key={key}
                    className={`font-inter rounded p-2 text-center text-sm transition-all duration-300 ${
                      disabled && !isChristmas
                        ? "cursor-not-allowed text-gray-400"
                        : selectedHour === hour && selectedPeriod === period
                          ? "text-primary-red bg-[#FDF0EE] font-semibold"
                          : "hover:bg-seashell cursor-pointer"
                    }`}
                    onClick={() => (!disabled || isChristmas) && handleTimeSelect(hour, period)}
                  >
                    {hour}
                  </div>
                ))}
              </div>
              <div className="sticky top-1 flex flex-col items-center justify-center space-y-2 p-2">
                {TIME_FORMATE.map((period) => {
                  const isAvailable = availablePeriods.has(period) || isChristmas;

                  return (
                    <div
                      key={period}
                      className={`font-inter w-full rounded py-2 text-center text-sm transition-all duration-300 ${
                        isAvailable
                          ? `hover:bg-seashell cursor-pointer ${
                              selectedPeriod === period
                                ? "text-primary-red bg-[#FDF0EE] font-semibold"
                                : ""
                            }`
                          : "cursor-not-allowed text-gray-400"
                      }`}
                      onClick={() => isAvailable && handlePeriodSelect(period)}
                    >
                      {period}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
