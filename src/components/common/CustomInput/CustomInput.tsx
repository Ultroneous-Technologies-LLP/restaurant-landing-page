"use client";

import { FC } from "react";

import { TimeInput } from "./TimeInput";
import { customInputText } from "./enum";
import { CustomInputProps } from "./types";
import { CalendarInput } from "./CalendarInput";
import { PartySizeInput } from "./PartySizeInput";

export const CustomInput: FC<CustomInputProps> = (props) => {
  const { type } = props;

  switch (type) {
    case customInputText.TIME:
      return <TimeInput {...props} />;
    case customInputText.DATE:
      return <CalendarInput {...props} />;
    case customInputText.PARTY:
    default:
      return <PartySizeInput {...props} />;
  }
};
