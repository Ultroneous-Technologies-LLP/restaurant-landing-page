import { useState, useEffect } from "react";

const INITIAL_WIDTH = 0;

export const useWindowWidth = (): number => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : INITIAL_WIDTH
  );

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};
