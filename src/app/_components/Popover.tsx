import { Transition } from "@headlessui/react";

type PopoverProps = {
  children: React.ReactNode;
  isPopoverOpen: boolean;
  ref?: React.Ref<HTMLDivElement>;
};

export default function Popover({ children, isPopoverOpen }: PopoverProps) {
  return (
    <Transition
      show={isPopoverOpen}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}
