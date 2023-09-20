"use client";

import Link from "next/link";
import CheckBox from "@/app/components/CheckBox";
import CalendarIcon from "@/app/components/icons/CalendarIcon";
import BellIcon from "@/app/components/icons/BellIcon";
import FlagIcon from "@/app/components/icons/FlagIcon";
import TagIcon from "@/app/components/icons/TagIcon";
import ExpandIcon from "@/app/components/icons/ExpandIcon";
import TrashIcon from "@/app/components/icons/TrashIcon";

type TaskListTaskProps = {
  id: number;
  title: string;
  complete: boolean;
  toggleTaskComplete: (id: number, complete: boolean) => void;
};

export default function TaskListTask({
  id,
  title,
  complete,
  toggleTaskComplete,
}: TaskListTaskProps) {
  return (
    <li className="group/li flex items-center border-b border-stone-300 last:border-0 hover:bg-stone-100">
      <div className="flex w-full items-center px-3 transition-transform group-hover/li:translate-x-1">
        <CheckBox
          id={id.toString()}
          className="peer"
          defaultChecked={complete}
          onChange={(e) => toggleTaskComplete(id, e.target.checked)}
        />
        <label className="group/label ml-3 flex-1 cursor-pointer select-none items-center peer-checked:text-slate-500 peer-checked:line-through">
          <Link href={`/task/${id.toString()}`} className="flex py-3">
            <div className="flex-1">{title}</div>
            <ExpandIcon className="h-5 transition-colors group-hover/label:text-amber-500" />
          </Link>
        </label>
      </div>
      <div className="mr-4 hidden group-hover/li:flex">
        <Link href="#" className="px-2">
          <CalendarIcon className="h-5 transition-colors hover:text-amber-500" />
        </Link>
        <Link href="#" className="px-2">
          <BellIcon className="h-5 transition-colors hover:text-amber-500" />
        </Link>
        <Link href="#" className="px-2">
          <FlagIcon className="h-5 transition-colors hover:text-amber-500" />
        </Link>
        <Link href="#" className="px-2">
          <TagIcon className="h-5 transition-colors hover:text-amber-500" />
        </Link>
        <Link href={`/task/${id}/delete`} className="px-2">
          <TrashIcon className="h-5 transition-colors hover:text-amber-500" />
        </Link>
      </div>
    </li>
  );
}
