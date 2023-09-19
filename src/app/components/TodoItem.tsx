"use client";

type TodoItemProps = {
  id: number;
  title: string;
  complete: boolean;
  toggleTodo: (id: number, complete: boolean) => void;
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className="border-b border-stone-300 last:border-0">
      <div className="flex items-center px-3 hover:bg-stone-100">
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
    </li>
  );
}
