"use client";

import Link from "next/link";

type TodoItemProps = {
  id: number;
  title: string;
  complete: boolean;
  toggleTodo: (id: number, complete: boolean) => void;
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className="group flex items-center border-b border-stone-300 last:border-0 hover:bg-stone-100">
      <div className="flex w-full items-center px-3 transition-transform group-hover:translate-x-1">
        <input
          id={`${id}`}
          type="checkbox"
          className="peer h-3 w-3 cursor-pointer appearance-none rounded-full ring-1 ring-stone-400 ring-offset-4 checked:bg-amber-500 checked:ring-amber-500"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={`${id}`}
          className="flex-1 cursor-pointer select-none py-3 pl-4 peer-checked:text-slate-500 peer-checked:line-through"
        >
          {title}
        </label>
      </div>
      <div className="hidden group-hover:flex">
        {Array(3)
          .fill(0)
          .map((_, __) => (
            <Link
              key={__}
              href="/"
              className="mx-1 h-8 w-8 bg-stone-200 transition-colors hover:bg-amber-300"
            ></Link>
          ))}
      </div>
    </li>
  );
}
