"use client";

import { FC, useState } from "react";

import data from "@/content/home-page-layout.json";
import { useWindowWidth } from "@/hooks";

import { Button } from "../Button";
import { Modal } from "../Modal";

import { ModalButtonProps } from "./types";

const BREAKPOINT_XL = 1280;

export const ModalButton: FC<ModalButtonProps> = ({ isPopup = true, children, ...buttonProps }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isResize = useWindowWidth();

  return (
    <>
      <Button
        {...buttonProps}
        onClick={() => {
          setIsPopupOpen(true);
        }}
      >
        {children}
      </Button>

      {isPopup && isResize > BREAKPOINT_XL && (
        <Modal
          isOpen={isPopupOpen}
          onClose={() => {
            setIsPopupOpen(false);
          }}
          {...data.popUpSection}
        />
      )}
    </>
  );
};
