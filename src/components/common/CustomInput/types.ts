type InputType = "party" | "date" | "time";

export interface CustomInputProps {
  type: InputType;
  label: string;
  placeholder?: string;
  options?: string[] | number[];
}