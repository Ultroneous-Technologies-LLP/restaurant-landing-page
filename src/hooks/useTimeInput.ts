"use client";

import { useState, useMemo, useEffect, useCallback } from "react";

import { CustomInputTextEnum } from "@/components/common";

const MINUTES_IN_HOUR = 60;
const HOURS_IN_HALF_DAY = 12;
const SLOT_INTERVAL_MINUTES = 30;
const MONTH_OFFSET = 1;

const CHRISTMAS_MONTH = 11;
const CHRISTMAS_DATE = 25;

const DEFAULT_START_TIME = { h: 10, m: 0 };
const DEFAULT_END_TIME = { h: 23, m: 30 };
const SUNDAY_END_TIME = { h: 22, m: 0 };
const CHRISTMAS_START_TIME = { h: 5, m: 30 };
const CHRISTMAS_END_TIME = { h: 21, m: 0 };

const SUNDAY_INDEX = 0;
const TWO_DIGITS = 2;

interface TimeSlot {
  hour: string;
  isDisabled: boolean;
  key: string;
  period: CustomInputTextEnum;
}

const generateTimeSlots = (selectedDate: string): TimeSlot[] => {
  const date = new Date(selectedDate);
  const today = new Date();

  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const isChristmas = date.getMonth() === CHRISTMAS_MONTH && date.getDate() === CHRISTMAS_DATE;

  const isSunday = date.getDay() === SUNDAY_INDEX;

  let start = DEFAULT_START_TIME;
  let end = DEFAULT_END_TIME;

  if (isChristmas) {
    start = CHRISTMAS_START_TIME;
    end = CHRISTMAS_END_TIME;
  } else if (isSunday) {
    end = SUNDAY_END_TIME;
  }

  const nowMinutes = today.getHours() * MINUTES_IN_HOUR + today.getMinutes();
  const startMinutes = start.h * MINUTES_IN_HOUR + start.m;
  const endMinutes = end.h * MINUTES_IN_HOUR + end.m;

  const slots: TimeSlot[] = [];

  for (let t = startMinutes; t <= endMinutes; t += SLOT_INTERVAL_MINUTES) {
    const hour24 = Math.floor(t / MINUTES_IN_HOUR);
    const minute = t % MINUTES_IN_HOUR;

    const isDisabled = (isToday && t <= nowMinutes && !isChristmas) || t < startMinutes;

    const hour12 = ((hour24 + MONTH_OFFSET) % HOURS_IN_HALF_DAY) + MONTH_OFFSET;

    const formattedHour = hour12.toString().padStart(TWO_DIGITS, "0");
    const formattedMinute = minute.toString().padStart(TWO_DIGITS, "0");

    const period = hour24 >= HOURS_IN_HALF_DAY ? CustomInputTextEnum.PM : CustomInputTextEnum.AM;

    slots.push({
      key: `${formattedHour}:${formattedMinute}-${period}`,
      hour: `${formattedHour}:${formattedMinute}`,
      period,
      isDisabled,
    });
  }

  return slots;
};

export const useTimeInput = (
  selectedDate?: string
): {
  availablePeriods: Set<CustomInputTextEnum>;
  handlePeriodSelect: (period: CustomInputTextEnum) => void;
  handleTimeSelect: (hour: string, period: CustomInputTextEnum) => void;
  isChristmas: boolean;
  selectedHour: string;
  selectedPeriod: CustomInputTextEnum | "";
  timeOptions: TimeSlot[];
} => {
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = useState<CustomInputTextEnum | "">("");

  const dateObj = selectedDate ? new Date(selectedDate) : null;
  const isChristmas = Boolean(
    dateObj && dateObj.getMonth() === CHRISTMAS_MONTH && dateObj.getDate() === CHRISTMAS_DATE
  );

  useEffect((): void => {
    setSelectedHour("");
    setSelectedPeriod("");
  }, [selectedDate]);

  const timeOptions = useMemo<TimeSlot[]>(
    () => (selectedDate ? generateTimeSlots(selectedDate) : []),
    [selectedDate]
  );

  const availablePeriods = useMemo<Set<CustomInputTextEnum>>(() => {
    const set = new Set<CustomInputTextEnum>();

    for (const time of timeOptions) {
      if (!time.isDisabled) {
        set.add(time.period);
      }
    }

    return set;
  }, [timeOptions]);

  const handleTimeSelect = useCallback((hour: string, period: CustomInputTextEnum): void => {
    setSelectedHour(hour);
    setSelectedPeriod(period);
  }, []);

  const handlePeriodSelect = useCallback(
    (period: CustomInputTextEnum): void => {
      if (!selectedHour) {
        return;
      }

      if (isChristmas) {
        setSelectedPeriod(period);
        return;
      }

      const validOption =
        timeOptions.find((t) => t.hour === selectedHour && t.period === period && !t.isDisabled) ||
        timeOptions.find((t) => t.period === period && !t.isDisabled);

      if (!validOption) {
        return;
      }

      setSelectedHour(validOption.hour);
      setSelectedPeriod(validOption.period);
    },
    [selectedHour, isChristmas, timeOptions]
  );

  return {
    selectedHour,
    selectedPeriod,
    timeOptions,
    availablePeriods,
    handleTimeSelect,
    handlePeriodSelect,
    isChristmas,
  };
};
