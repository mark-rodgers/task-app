type PopoverContentProps = {
  children: React.ReactNode;
  onClick: () => void;
  isPopoverOpen: boolean;
};

export default function PopoverContent({
  children,
  isPopoverOpen,
}: PopoverContentProps) {
  return <div data-isPopoverOpen={isPopoverOpen}>{children}</div>;
}
