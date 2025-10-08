import { ImageTypes } from "@/types";

interface TabItem {
  id: number;
  title: string;
  description: string;
  price: string;
}

interface TabContent {
  image: ImageTypes;
  items: TabItem[];
}

export interface TabType {
  id: number;
  label: string;
  content: TabContent;
}

export interface TabProps {
  tabs: TabType[];
}

export interface OurSpecialMenuProps {
  title: string;
  tabs: TabType[];
}