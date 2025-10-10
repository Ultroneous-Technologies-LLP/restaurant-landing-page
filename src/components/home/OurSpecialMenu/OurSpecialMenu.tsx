import { FC } from 'react';

import { Container } from '@/components/common';

import { Tab } from './Tab';
import { OurSpecialMenuProps } from './types';

export const OurSpecialMenu: FC<OurSpecialMenuProps> = ({ tabs, title }) => (
  <Container className="pt-48 md:pt-105 xl:pt-130 -scroll-m-20 md:-scroll-m-80" id="menu">
    <h2 className="font-eugusto text-center text-[32px]/12 xl:text-[50px]/12">
      <span>{title}</span>
    </h2>
    <Tab tabs={tabs} />
  </Container>
);
