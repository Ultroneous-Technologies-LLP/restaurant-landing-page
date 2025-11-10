"use client";

import { FC, useRef, useState } from "react";

import { useOutsideClick, useTimeInput } from "@/hooks";

import { Clock } from "../../icons";

import { TIME_FORMATE } from "./constant";
import { TimeInputProps } from "./types";

export const TimeInput: FC<TimeInputProps> = ({ label, placeholder, selectedDate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, (): void => {
    setIsDropdownOpen(false);
  });

  const {
    timeOptions,
    availablePeriods,
    selectedHour,
    selectedPeriod,
    handleTimeSelect,
    handlePeriodSelect,
    isChristmas,
  } = useTimeInput(selectedDate);

  const handleDropdownToggle = (): void => {
    if (!selectedDate) {
      return;
    }
    setIsDropdownOpen((prev) => !prev);
  };

  const selectedTimeValue =
    selectedHour && selectedPeriod ? `${selectedHour} ${selectedPeriod}` : "";

  const ZERO = 0;

  return (
    <div className="mb-4">
      <label className="font-inter inline-block pb-2 text-base/4 font-medium" htmlFor={label}>
        {label}
      </label>

      <div
        className="border-chinese-silver relative flex cursor-pointer items-center gap-4 rounded-full border p-4"
        ref={dropdownRef}
      >
        <div className="bg-seashell flex size-8 items-center justify-center rounded-lg">
          <Clock onClick={handleDropdownToggle} />
        </div>

        <input
          className="font-inter text-quick-silver placeholder:text-quick-silver w-full cursor-pointer bg-transparent text-base/4 focus:outline-none"
          id={label}
          onClick={handleDropdownToggle}
          placeholder={placeholder}
          readOnly
          value={selectedTimeValue}
        />

        {isDropdownOpen && timeOptions.length > ZERO && (
          <div className="shadow-custom absolute top-12.5 left-4 z-50 mt-2 w-full max-w-50 overflow-hidden rounded-lg bg-white">
            <div className="grid max-h-45 grid-cols-2 items-start overflow-y-auto">
              <div className="space-y-1 p-2">
                {timeOptions.map(({ key, hour, period, disabled }) => {
                  const isSelected = selectedHour === hour && selectedPeriod === period;
                  const isDisabled = disabled && !isChristmas;

                  let timeClass = "";

                  if (isDisabled) {
                    timeClass = "cursor-not-allowed text-gray-400";
                  } else if (isSelected) {
                    timeClass = "text-primary-red bg-[#FDF0EE] font-semibold";
                  } else {
                    timeClass = "hover:bg-seashell cursor-pointer";
                  }
                  return (
                    <div
                      className={`font-inter rounded p-2 text-center text-sm transition-all duration-300 ${timeClass}`}
                      key={key}
                      onClick={() => {
                        if (!isDisabled) {
                          handleTimeSelect(hour, period);
                        }
                      }}
                    >
                      {hour}
                    </div>
                  );
                })}
              </div>

              <div className="sticky top-1 flex flex-col items-center justify-center space-y-2 p-2">
                {TIME_FORMATE.map((period) => {
                  const isAvailable = availablePeriods.has(period) || isChristmas;
                  const isSelected = selectedPeriod === period;

                  const periodClass = isAvailable
                    ? `hover:bg-seashell cursor-pointer ${
                        isSelected ? "text-primary-red bg-[#FDF0EE] font-semibold" : ""
                      }`
                    : "cursor-not-allowed text-gray-400";

                  return (
                    <div
                      className={`font-inter w-full rounded py-2 text-center text-sm transition-all duration-300 ${periodClass}`}
                      key={period}
                      onClick={() => {
                        if (isAvailable) {
                          handlePeriodSelect(period);
                        }
                      }}
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
