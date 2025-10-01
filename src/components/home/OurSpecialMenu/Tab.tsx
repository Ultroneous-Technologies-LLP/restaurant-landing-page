"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useState } from "react";

import { TabProps } from "../types";

export const Tab: FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id ?? 1);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  if (!tabs.length) {
    return <p className="text-center py-10 text-gray-500">No menu available</p>;
  }

  return (
    <div className="pt-8 xl:pt-18.5">
      <div className="flex gap-2 justify-start md:justify-center pl-4 md:px-6 xl:px-18 overflow-x-auto hidden-scroll-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              "py-4.5 md:py-5 px-6 xl:px-12 xl:py-6 font-proximaNova text-base/4 md:text-sm/3.5 xl:text-2xl/6 transition-colors duration-500 rounded-full",
              {
                "bg-primary-red text-white font-bold": activeTab === tab.id,
                "bg-[#F6F6F6] text-black": activeTab !== tab.id,
              }
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="px-4 xl:px-18">
        <div className="mt-8 xl:mt-18 bg-[#EDDBC3] rounded-3xl xl:rounded-4xl p-6 xl:py-14 xl:px-12.5">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center">
            <div className="md:max-w-81.5 xl:max-w-173.5 w-full">
              {activeContent?.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between pb-6 xl:pb-10 last:pb-0"
                >
                  <div>
                    <h3 className="text-base/6 xl:text-2xl/7.5 text-black font-eugusto pb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm/5 xl:text-lg/7.5 text-[#717171]">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-base/6 xl:text-2xl/7.5 text-black font-eugusto">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
            {activeContent?.image?.src && (
              <div>
                <Image
                  src={activeContent.image.src}
                  width={439}
                  height={410}
                  alt={activeContent.image.alt}
                  className="rounded-xl object-cover md:max-w-74.5 xl:max-w-110"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
