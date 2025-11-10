import { CtaButtonType } from "@/types";

interface InputsTypes {
  label: string;
  placeholder: string;
}

interface CustomInputs {
  date: InputsTypes;
  party: InputsTypes;
  time: InputsTypes;
}

interface DinnerServices {
  monToSaturday: string;
  sunday: string;
}

export interface ModalProps {
  ctaButton: CtaButtonType;
  customInputs: CustomInputs;
  description: string;
  dinnerServices: DinnerServices;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}
