import { ImageTypes, SocialIconNameType } from "@/types";
interface SocialLink {
  id: number;
  href: string;
  label: string;
  icon: SocialIconNameType;
}

interface NavLinks {
  id: number;
  links: string;
  title: string;
}

export interface FooterProps {
  icon: ImageTypes;
  navLinks: NavLinks[];
  socialLinks: SocialLink[];
}
