import { FC } from "react";

import { Container, Title } from "@/components/common";

import { Tab } from "./Tab";
import { OurSpecialMenuProps } from "./types";

export const OurSpecialMenu: FC<OurSpecialMenuProps> = ({ tabs, title }) => (
  <Container
    className="pt-48 md:pt-105 xl:pt-130 -scroll-m-20 md:-scroll-m-80"
    id="menu"
  >
    <Title title={title} />
    <Tab tabs={tabs} />
  </Container>
);
