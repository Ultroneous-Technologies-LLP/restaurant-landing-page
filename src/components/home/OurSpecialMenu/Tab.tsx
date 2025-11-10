"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useState } from "react";

import { OurSpecialMenuText } from "./enum";
import { TabProps } from "./types";

const FIRST_TAB_INDEX = 0;
const DEFAULT_TAB_ID = 1;

export const Tab: FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(
    tabs[`${FIRST_TAB_INDEX}`]?.id ?? DEFAULT_TAB_ID
  );

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  if (!tabs.length) {
    return (
      <p className="py-10 text-center text-gray-500">{OurSpecialMenuText.NO_MENU_AVAILABLE}</p>
    );
  }

  return (
    <div className="pt-8 xl:pt-18.5">
      <div className="hidden-scroll-bar flex justify-start gap-2 overflow-x-auto pl-4 md:justify-center md:px-6 xl:px-18">
        {tabs.map(({ id, label }) => {
          const isActiveTab = activeTab === id;
          return (
            <button
              className={clsx(
                "font-proximaNova rounded-full px-6 py-4.5 text-base/4 transition-colors duration-500 md:py-5 md:text-sm/3.5 xl:px-12 xl:py-6 xl:text-2xl/6",
                isActiveTab
                  ? "bg-primary-red font-bold text-white"
                  : "hover:bg-primary-red bg-[#F6F6F6] text-black hover:text-white"
              )}
              key={id}
              onClick={() => {
                setActiveTab(id);
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="px-4 xl:px-18">
        <div className="mt-8 rounded-3xl bg-[#EDDBC3] p-6 xl:mt-18 xl:rounded-4xl xl:px-12.5 xl:py-14">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-12">
            <div className="w-full md:max-w-81.5 xl:max-w-173.5">
              {activeContent?.items.map(({ description, id, price, title }) => (
                <div className="flex justify-between pb-6 last:pb-0 xl:pb-10" key={id}>
                  <div>
                    <h3 className="font-eugusto pb-2.5 text-base/6 text-black xl:text-2xl/7.5">
                      {title}
                    </h3>
                    <p className="text-dark-silver text-sm/5 xl:text-lg/7.5">{description}</p>
                  </div>
                  <span className="font-eugusto text-base/6 text-black xl:text-2xl/7.5">
                    {price}
                  </span>
                </div>
              ))}
            </div>
            {activeContent?.image.src && (
              <div>
                <Image
                  alt={activeContent.image.alt}
                  className="rounded-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105 md:max-w-74.5 xl:max-w-110"
                  height={410}
                  src={activeContent.image.src}
                  width={439}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
