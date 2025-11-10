"use client";

import { FC, useEffect, useRef, useState } from "react";

import { useOutsideClick } from "@/hooks";

import { Cross } from "../../icons";
import { Button } from "../Button";
import { DateInput } from "../DateInput";
import { NumberInput } from "../NumberInput";
import { TimeInput } from "../TimeInput";
import { Title } from "../Title";

import { OPTIONS } from "./constant";
import { ModalProps } from "./types";

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

    return (): void => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="hidden-scroll-bar relative h-160 w-full max-w-180 overflow-y-scroll rounded-lg bg-white p-12.5 shadow-lg"
        ref={popupRef}
      >
        <div className="flex items-start justify-between gap-1.5 ">
          <div>
            <Title className="pb-2" title={title} />
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
            options={OPTIONS}
            placeholder={customInputs.party.placeholder}
          />
          <DateInput
            label={customInputs.date.label}
            onChange={(date) => {
              setSelectedDate(date);
            }}
            placeholder={customInputs.date.placeholder}
            value={selectedDate}
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
