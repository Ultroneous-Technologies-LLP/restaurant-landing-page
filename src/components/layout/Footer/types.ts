export type SocialIconNameType = "Dribble" | "Instagram" | "BeHance" | "LinkedIn";

interface SocialLink {
  id: number;
  href: string;
  label: string;
  icon: SocialIconNameType;
}

interface Image {
  src: string;
  alt: string;
}

interface NavLinks {
  id: number;
  links: string;
  title: string;
}

export interface FooterProps {
  icon: Image;
  navLinks: NavLinks[];
  socialLinks: SocialLink[];
}