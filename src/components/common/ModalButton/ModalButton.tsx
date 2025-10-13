"use client";

import { FC, useState } from "react";

import { useWindowWidth } from "@/hooks";
import data from "@/content/home-page-layout.json";

import { Modal } from "../Modal";
import { Button } from "../Button";
import { ModalButtonProps } from "./types";

export const ModalButton: FC<ModalButtonProps> = ({
  isPopup = true,
  children,
  ...buttonProps
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isResize = useWindowWidth();

  return (
    <>
      <Button {...buttonProps} onClick={() => setIsPopupOpen(true)}>
        {children}
      </Button>

      {isPopup && isResize > 1280 && (
        <Modal
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          {...data.popUpSection}
        />
      )}
    </>
  );
};
