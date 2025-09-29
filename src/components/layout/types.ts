export type SocialIconName = "Dribble" | "Instagram" | "BeHance" | "LinkedIn";

export interface SocialLink {
  id: number;
  href: string;
  label: string;
  icon: SocialIconName;
}

interface image {
  src: string;
  alt: string;
}

interface NavLinks {
  id: number;
  links: string;
  title: string;
}

export interface footer {
  icon: image;
  navLinks: NavLinks[];
  socialLinks: SocialLink[];
}

export interface layoutDataType {
  footer: footer;
}
