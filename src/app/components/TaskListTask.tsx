"use client";

import Link from "next/link";
import CalendarIcon from "./icons/CalendarIcon";
import BellIcon from "./icons/BellIcon";
import CommentIcon from "./icons/CommentIcon";

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
    <li className="group flex items-center border-b border-stone-300 last:border-0 hover:bg-stone-100">
      <div className="flex w-full items-center px-3 transition-transform group-hover:translate-x-1">
        <input
          id={`${id}`}
          type="checkbox"
          className="peer h-3 w-3 cursor-pointer appearance-none rounded-full ring-1 ring-stone-400 ring-offset-4 checked:bg-amber-500 checked:ring-amber-500"
          defaultChecked={complete}
          onChange={(e) => toggleTaskComplete(id, e.target.checked)}
        />
        <label
          htmlFor={`${id}`}
          className="flex-1 cursor-pointer select-none py-3 pl-4 peer-checked:text-slate-500 peer-checked:line-through"
        >
          {title}
        </label>
      </div>
      <div className="hidden group-hover:flex">
        <Link href="#" className="px-2">
          <CalendarIcon className="transition-colors hover:text-amber-500" />
        </Link>
        <Link href="#" className="px-2">
          <BellIcon className="transition-colors hover:text-amber-500" />
        </Link>
        <Link href="#" className="px-2">
          <CommentIcon className="transition-colors hover:text-amber-500" />
        </Link>
      </div>
    </li>
  );
}
