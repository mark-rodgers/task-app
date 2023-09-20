import Link from "next/link";

type TaskListNavLinkProps = {
  id: number;
  title: string;
};

export default function TaskListNavLink({ id, title }: TaskListNavLinkProps) {
  return (
    <div className="ml-3">
      <Link href={`/tasklist/${id}`}>{title}</Link>
    </div>
  );
}
