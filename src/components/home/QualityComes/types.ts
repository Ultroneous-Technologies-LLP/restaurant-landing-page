import { ImageTypes } from '@/types';

interface Circle {
  image: ImageTypes;
  circleText: string;
}

export interface QualityComesProps {
  backgroundImage: ImageTypes;
  heading: string;
  description: string;
  circle: Circle;
}
