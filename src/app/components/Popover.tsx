type PopoverProps = {
  children: React.ReactNode;
  isPopoverOpen: React.ReactNode;
};

export default function Popover({ children, isPopoverOpen }: PopoverProps) {
  return <>{isPopoverOpen && children}</>;
}
