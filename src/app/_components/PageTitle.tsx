type PageTitleProps = {
  title: string;
  children?: React.ReactNode;
};

export default function PageTitle({ title, children }: PageTitleProps) {
  return (
    <div className="mb-4 flex h-11 items-center justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </div>
  );
}
