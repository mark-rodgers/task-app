import { twMerge } from "tailwind-merge";

type TextBoxProps = {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: string;
  className?: string;
};

export default function TextBox({
  id,
  name,
  type,
  placeholder,
  defaultValue,
  autoComplete,
  className,
}: TextBoxProps) {
  return (
    <input
      type={type ? type : "text"}
      id={id}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      autoComplete={autoComplete}
      className={twMerge(
        "rounded-full border-2 border-stone-300 bg-transparent px-4 py-2 outline-none transition-colors focus-within:border-amber-300",
        className,
      )}
    />
  );
}
