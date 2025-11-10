import { CtaButtonType, ImageTypes } from "@/types";

interface OpeningHours {
  day: string;
  id: number;
  timing: string;
}

interface OpeningHour {
  openingHours: OpeningHours[];
  title: string;
}

export interface AnyPlanProps {
  button: CtaButtonType;
  image: ImageTypes;
  openingHour: OpeningHour;
  title: string;
}
