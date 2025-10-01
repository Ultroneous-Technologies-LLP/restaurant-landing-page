import { FC } from "react";

import { Container } from "@/components/common";

import { Tab } from "./Tab";
import { OurSpecialMenuSection } from "../types";

export const OurSpecialMenu: FC<OurSpecialMenuSection> = ({ tabs, title }) => {
  return (
    <Container className="pt-48 md:pt-105 xl:pt-130">
      <h2 className="font-eugusto text-center text-[32px]/12 xl:text-[50px]/12">
        <span>{title}</span>
      </h2>
      <Tab tabs={tabs} />
    </Container>
  );
};
