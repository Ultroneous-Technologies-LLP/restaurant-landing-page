"use client";

import { FC, useEffect, useRef, useState } from "react";

import { useOutsideClick } from "@/hooks";

import { Title } from "../Title";
import { Button } from "../Button";
import { Cross } from "../../icons";
import { ModalProps } from "./types";
import { OPTIONS } from "./constant";
import { DateInput } from "../DateInput";
import { TimeInput } from "../TimeInput";
import { NumberInput } from "../NumberInput";

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  ctaButton,
  customInputs,
  description,
  dinnerServices,
  title,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);

  useOutsideClick(popupRef, onClose);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={popupRef}
        className="hidden-scroll-bar relative h-160 w-full max-w-180 overflow-y-scroll rounded-lg bg-white p-12.5 shadow-lg"
      >
        <div className="flex items-start justify-between gap-1.5 ">
          <div>
            <Title title={title} className="pb-2" />
            <p className="font-proximaNova text-dark-silver text-sm/5">
              <span>{description}</span>
            </p>
          </div>
          <button onClick={onClose}>
            <Cross />
          </button>
        </div>
        <div className="space-y-4 pt-12">
          <NumberInput
            label={customInputs.party.label}
            placeholder={customInputs.party.placeholder}
            options={OPTIONS}
          />
          <DateInput
            label={customInputs.date.label}
            placeholder={customInputs.date.placeholder}
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
          <TimeInput
            label={customInputs.time.label}
            placeholder={customInputs.time.placeholder}
            selectedDate={selectedDate}
          />
        </div>
        <div>
          <Button className="mt-12 px-6" variant="primary">
            {ctaButton.label}
          </Button>
        </div>
        <p className="font-inter text-dark-silver mt-12 text-sm/3.5">
          <span className="border-dark-silver inline-block border-r pr-2">
            {dinnerServices.monToSaturday}
          </span>
          <span className="inline-block pl-2">{dinnerServices.sunday}</span>
        </p>
      </div>
    </div>
  );
};
