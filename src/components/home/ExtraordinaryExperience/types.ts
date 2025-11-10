interface ExperienceItem {
  description: string;
  id: number;
  title: string;
}

export interface VideoProps {
  alt: string;
  poster: string;
  src: string;
}

export interface ExtraordinaryExperienceProps {
  items: ExperienceItem[];
  title: string;
  video: VideoProps;
}
