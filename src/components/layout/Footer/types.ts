import { ImageTypes, SocialIconNameType } from "@/types";

interface NavLinks {
  href: string;
  id: number;
  label: string;
}
interface SocialLink extends NavLinks {
  icon: SocialIconNameType;
}

export interface FooterProps {
  icon: ImageTypes;
  navLinks: NavLinks[];
  socialLinks: SocialLink[];
}
