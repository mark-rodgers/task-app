import { twMerge } from "tailwind-merge";

type CheckBoxProps = {
  id: string;
  name?: string;
  defaultChecked?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckBox({
  id,
  name,
  defaultChecked,
  className,
  onChange,
}: CheckBoxProps) {
  return (
    <div className="flex w-5 pl-1">
      <input
        type="checkbox"
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        className={twMerge(
          "h-3 w-3 cursor-pointer appearance-none rounded-full bg-white ring-1 ring-stone-400 ring-offset-4 checked:bg-amber-500 checked:ring-amber-500 hover:ring-amber-500",
          className,
        )}
        onChange={onChange}
      />
    </div>
  );
}
