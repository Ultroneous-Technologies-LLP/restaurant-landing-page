"use client";

import { FC, useState } from "react";

import { PlayButton } from "@/components/icons";
import { NextImageWithFallback } from "@/components/common";

import { VideoData } from "../types";

export const Video: FC<VideoData> = ({ alt, poster, src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="relative w-[90%] h-55 md:h-102 xl:h-174 overflow-hidden rounded-3xl xl:rounded-[50px] mx-auto max-w-323.5"
      role="group"
      aria-labelledby="our-process-title our-process-description"
    >
      {!isPlaying ? (
        <div className="relative w-full h-full rounded-2xl">
          <NextImageWithFallback
            src={poster}
            alt={alt}
            fill
            className="object-cover"
            title={alt}
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 m-auto transition items-center justify-center size-12 xl:size-24 bg-white rounded-full shadow-[0_0_0_10px_#FFFFFF66]
             xl:shadow-[0_0_0_20px_#FFFFFF66] flex cursor-pointer"
            aria-label="Play video: Demo video"
          >
            <PlayButton
              aria-hidden="true"
              {...{ focusable: "false" }}
              className="size-2 xl:w-4.5 xl:h-5"
            />
          </button>
        </div>
      ) : (
        <video
          src={src}
          controls
          autoPlay
          className="w-full h-full object-cover"
          aria-label="Video player: Demo video"
        />
      )}
    </div>
  );
};
