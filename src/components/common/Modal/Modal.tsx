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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="bg-white p-12.5 rounded-lg shadow-lg w-full max-w-180 h-160 relative overflow-y-scroll hidden-scroll-bar"
      >
        <div className="flex gap-1.5 justify-between items-start ">
          <div>
            <Title title={title} className="pb-2" />
            <p className="font-proximaNova text-sm/5 text-dark-silver">
              <span>{description}</span>
            </p>
          </div>
          <button onClick={onClose}>
            <Cross />
          </button>
        </div>
        <div className="pt-12 space-y-4">
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
          <Button className="px-6 mt-12" variant="primary">
            {ctaButton.label}
          </Button>
        </div>
        <p className="mt-12 text-sm/3.5 font-inter text-dark-silver">
          <span className="inline-block pr-2 border-r border-dark-silver">
            {dinnerServices.monToSaturday}
          </span>
          <span className="inline-block pl-2">{dinnerServices.sunday}</span>
        </p>
      </div>
    </div>
  );
};
