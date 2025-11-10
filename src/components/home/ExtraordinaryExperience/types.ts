interface ExperienceItem {
  id: number;
  title: string;
  description: string;
}

export interface VideoProps {
  src: string;
  poster: string;
  alt: string;
}

export interface ExtraordinaryExperienceProps {
  title: string;
  items: ExperienceItem[];
  video: VideoProps;
}
