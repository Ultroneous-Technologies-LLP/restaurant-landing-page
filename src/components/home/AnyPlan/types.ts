import { CtaButtonType, ImageTypes } from "@/types";

interface OpeningHours {
  id: number;
  day: string;
  timing: string;
}

interface OpeningHour {
  title: string;
  openingHours: OpeningHours[];
}

export interface AnyPlanProps {
  title: string;
  image: ImageTypes;
  openingHour: OpeningHour;
  button: CtaButtonType;
}
