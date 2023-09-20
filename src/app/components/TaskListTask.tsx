"use client";

import Link from "next/link";
import CalendarIcon from "./icons/CalendarIcon";
import BellIcon from "./icons/BellIcon";
import FlagIcon from "./icons/FlagIcon";
import TagIcon from "./icons/TagIcon";
import ExpandIcon from "./icons/ExpandIcon";

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
        <input
          id={id.toString()}
          type="checkbox"
          className="peer h-3 w-3 cursor-pointer appearance-none rounded-full ring-1 ring-stone-400 ring-offset-4 checked:bg-amber-500 checked:ring-amber-500"
          defaultChecked={complete}
          onChange={(e) => toggleTaskComplete(id, e.target.checked)}
        />
        <label className="group/label flex-1 cursor-pointer select-none items-center pl-4 peer-checked:text-slate-500 peer-checked:line-through">
          <Link href={`/task/${id.toString()}`} className="flex px-1 py-3">
            <div className="flex-1">{title}</div>
            <ExpandIcon className="h-5 transition-colors group-hover/label:text-amber-500" />
          </Link>
        </label>
      </div>
      <div className="hidden group-hover/li:flex">
        <Link href="#" className="px-1">
          <CalendarIcon className="h-5 transition-colors hover:text-amber-500" />
        </Link>
        <Link href="#" className="px-1">
          <BellIcon className="h-5 transition-colors hover:text-amber-500" />
        </Link>
        <Link href="#" className="px-1">
          <FlagIcon className="h-5 transition-colors hover:text-amber-500" />
        </Link>
        <Link href="#" className="px-1">
          <TagIcon className="h-5 transition-colors hover:text-amber-500" />
        </Link>
      </div>
    </li>
  );
}
