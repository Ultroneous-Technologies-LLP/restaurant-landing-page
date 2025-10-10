"use client";
import { FC, useRef } from "react";

import { useOutsideClick } from "@/hooks";
import { Cross } from "@/components/icons";

import { Button } from "../Button";
import { PopupProps } from "./types";
import { CustomInput } from "../CustomInput";

export const Popup: FC<PopupProps> = ({
  isOpen,
  onClose,
  ctaButton,
  customInputs,
  description,
  dinnerServices,
  title,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useOutsideClick(popupRef, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="bg-white p-12.5 rounded-lg shadow-lg w-full max-w-180 h-160 relative overflow-y-scroll hidden-scroll-bar"
      >
        <div className="flex gap-1.5 justify-between items-start ">
          <div>
            <h2 className="font-eugusto text-3xl/12 pb-2">
              <span>{title}</span>
            </h2>
            <p className="font-proximaNova text-sm/5 text-dark-silver">
              <span>{description}</span>
            </p>
          </div>
          <button onClick={onClose}>
            <Cross />
          </button>
        </div>
        <div className="pt-12 space-y-4">
          <CustomInput
            type="party"
            label={customInputs.party.label}
            placeholder={customInputs.party.placeholder}
            options={["100", "200", "300", "Other"]}
          />
          <CustomInput
            type="date"
            label={customInputs.date.label}
            placeholder={customInputs.date.placeholder}
          />
          <CustomInput
            type="time"
            label={customInputs.time.label}
            placeholder={customInputs.time.placeholder}
          />
        </div>
        <div>
          <Button className="px-6 mt-12" variant="primary" isPopup={false}>
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
