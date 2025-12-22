import { ImageTypes } from "@/types";

interface TabItem {
  description: string;
  id: number;
  price: string;
  title: string;
}

interface TabContent {
  image: ImageTypes;
  items: TabItem[];
}

export interface TabType {
  content: TabContent;
  id: number;
  label: string;
}

export interface TabProps {
  tabs: TabType[];
}

export interface OurSpecialMenuProps {
  tabs: TabType[];
  title: string;
}
