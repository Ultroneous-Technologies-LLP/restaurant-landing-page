import { ImageTypes } from "@/types";

interface Circle {
  circleText: string;
  image: ImageTypes;
}

export interface QualityComesProps {
  backgroundImage: ImageTypes;
  circle: Circle;
  description: string;
  heading: string;
}
