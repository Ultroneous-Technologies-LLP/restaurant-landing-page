import { CtaButtonType } from "@/types";

interface InputsTypes {
  label: string;
  placeholder: string;
}

interface CustomInputs {
  party: InputsTypes;
  date: InputsTypes;
  time: InputsTypes;
}

interface DinnerServices {
  monToSaturday: string;
  sunday: string;
}

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  customInputs: CustomInputs;
  ctaButton: CtaButtonType;
  dinnerServices: DinnerServices;
}
