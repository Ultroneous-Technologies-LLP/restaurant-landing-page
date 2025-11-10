"use client";

import Image from "next/image";
import { FC, useState } from "react";

import { PlayButton } from "@/components/icons";

import { VideoProps } from "./types";

export const Video: FC<VideoProps> = ({ alt, poster, src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="relative mx-auto h-55 w-[90%] max-w-323.5 overflow-hidden rounded-3xl md:h-102 xl:h-174 xl:rounded-[50px]"
      role="group"
      aria-labelledby="our-process-title our-process-description"
    >
      {!isPlaying ? (
        <div className="relative h-full w-full rounded-2xl">
          <Image
            src={poster}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            title={alt}
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 m-auto flex size-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_0_0_10px_#FFFFFF66]
             transition xl:size-24 xl:shadow-[0_0_0_20px_#FFFFFF66]"
            aria-label="Play video: Demo video"
          >
            <PlayButton
              aria-hidden="true"
              {...{ focusable: "false" }}
              className="size-2 xl:h-5 xl:w-4.5"
            />
          </button>
        </div>
      ) : (
        <video
          src={src}
          controls
          autoPlay
          className="h-full w-full object-cover"
          aria-label="Video player: Demo video"
        />
      )}
    </div>
  );
};
