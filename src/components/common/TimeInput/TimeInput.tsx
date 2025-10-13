"use client";

import { FC, useRef, useState } from "react";

import { useOutsideClick, useTimeInput } from "@/hooks";

import { Clock } from "../../icons";
import { TimeInputProps } from "./types";
import { TIME_FORMATE } from "./constant";

export const TimeInput: FC<TimeInputProps> = ({
  label,
  placeholder,
  selectedDate,
}) => {
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
        <div className="size-8 bg-seashell rounded-lg flex justify-center items-center">
          <Clock onClick={handleDropdownToggle} />
        </div>
        <input
          id={label}
          className="font-inter text-base/4 text-quick-silver placeholder:text-quick-silver focus:outline-none w-full cursor-pointer bg-transparent"
          placeholder={placeholder}
          value={selectedTimeValue}
          readOnly
          onClick={handleDropdownToggle}
        />
        {isDropdownOpen && timeOptions.length > 0 && (
          <div className="absolute top-12.5 left-4 mt-2 max-w-50 w-full bg-white shadow-custom z-50 rounded-lg overflow-hidden">
            <div className="overflow-y-auto max-h-45 grid grid-cols-2 items-start">
              <div className="p-2 space-y-1">
                {timeOptions.map(({ key, hour, period, disabled }) => (
                  <div
                    key={key}
                    className={`p-2 rounded font-inter text-sm text-center transition-all duration-300 ${
                      disabled && !isChristmas
                        ? "text-gray-400 cursor-not-allowed"
                        : selectedHour === hour && selectedPeriod === period
                          ? "bg-[#FDF0EE] text-primary-red font-semibold"
                          : "hover:bg-seashell cursor-pointer"
                    }`}
                    onClick={() =>
                      (!disabled || isChristmas) &&
                      handleTimeSelect(hour, period)
                    }
                  >
                    {hour}
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center items-center p-2 space-y-2 sticky top-1">
                {TIME_FORMATE.map((period) => {
                  const isAvailable =
                    availablePeriods.has(period) || isChristmas;

                  return (
                    <div
                      key={period}
                      className={`w-full text-center py-2 rounded font-inter text-sm transition-all duration-300 ${
                        isAvailable
                          ? `cursor-pointer hover:bg-seashell ${
                              selectedPeriod === period
                                ? "bg-[#FDF0EE] text-primary-red font-semibold"
                                : ""
                            }`
                          : "text-gray-400 cursor-not-allowed"
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
