"use client";

import { useState, useMemo, useEffect, useCallback } from "react";

import { CustomInputTextEnum } from "@/components/common";

const SECONDS = 60;
const HALFDAY = 12;
const CHRISTMAS_MONTH = 11;
const CHRISTMAS_DATE = 25;

const DEFAULT_START_TIME = { h: 10, m: 0 };
const DEFAULT_END_TIME = { h: 23, m: 30 };
const SUNDAY_END_TIME = { h: 22, m: 0 };
const CHRISTMAS_START_TIME = { h: 5, m: 30 };
const CHRISTMAS_END_TIME = { h: 21, m: 0 };

const generateTimeSlots = (selectedDate: string) => {
  const date = new Date(selectedDate);
  const today = new Date();

  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const isChristmas = date.getMonth() === CHRISTMAS_MONTH && date.getDate() === CHRISTMAS_DATE;
  const isSunday = date.getDay() === 0;

  const start = isChristmas ? CHRISTMAS_START_TIME : DEFAULT_START_TIME;
  const end = isChristmas ? CHRISTMAS_END_TIME : isSunday ? SUNDAY_END_TIME : DEFAULT_END_TIME;

  const nowMinutes = today.getHours() * SECONDS + today.getMinutes();
  const startMinutes = start.h * SECONDS + start.m;
  const endMinutes = end.h * SECONDS + end.m;

  const slots = [];

  for (let t = startMinutes; t <= endMinutes; t += 30) {
    const hour24 = Math.floor(t / SECONDS);
    const minute = t % SECONDS;

    const disabled = (isToday && t <= nowMinutes && !isChristmas) || t < startMinutes;

    const hour12 = ((hour24 + CHRISTMAS_MONTH) % HALFDAY) + 1;
    const formattedHour = hour12.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");

    const period = hour24 >= HALFDAY ? CustomInputTextEnum.PM : CustomInputTextEnum.AM;

    slots.push({
      key: `${formattedHour}:${formattedMinute}-${period}`,
      hour: `${formattedHour}:${formattedMinute}`,
      period,
      disabled,
    });
  }

  return slots;
};

export const useTimeInput = (selectedDate?: string) => {
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState<CustomInputTextEnum | "">("");

  const dateObj = selectedDate ? new Date(selectedDate) : null;
  const isChristmas =
    dateObj?.getMonth() === CHRISTMAS_MONTH && dateObj?.getDate() === CHRISTMAS_DATE;

  useEffect(() => {
    setSelectedHour("");
    setSelectedPeriod("");
  }, [selectedDate]);

  const timeOptions = useMemo(
    () => (selectedDate ? generateTimeSlots(selectedDate) : []),
    [selectedDate]
  );

  const availablePeriods = useMemo(() => {
    const set = new Set<CustomInputTextEnum>();

    for (const t of timeOptions) {
      if (!t.disabled) set.add(t.period);
    }

    return set;
  }, [timeOptions]);

  const handleTimeSelect = useCallback((hour: string, period: CustomInputTextEnum) => {
    setSelectedHour(hour);
    setSelectedPeriod(period);
  }, []);

  const handlePeriodSelect = useCallback(
    (period: CustomInputTextEnum) => {
      if (!selectedHour) return;
      if (isChristmas) {
        setSelectedPeriod(period);
        return;
      }

      const validOption =
        timeOptions.find((t) => t.hour === selectedHour && t.period === period && !t.disabled) ||
        timeOptions.find((t) => t.period === period && !t.disabled);

      if (!validOption) return;

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
