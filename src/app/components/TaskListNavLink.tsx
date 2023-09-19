import Link from "next/link";
import ChevronRightIcon from "@/app/components/icons/ChevronRightIcon";

type TaskListNavLinkProps = {
  id: number;
  title: string;
};

export default function TaskListNavLink({ id, title }: TaskListNavLinkProps) {
  return (
    <div className="group flex items-center">
      <ChevronRightIcon className="transition-transform group-hover:rotate-90" />
      <Link href={`/tasklist/${id}`}>
        {id} - {title}
      </Link>
    </div>
  );
}
