import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0)
    throw new Error("Invalid Title");

  await prisma.todo.create({ data: { title } });
  redirect("/");
}

export default function page() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl">New Todo</h1>
      </div>
      <form action={createTodo} className="flex flex-col gap-2">
        <TextBox name="title" placeholder="New Task" />
        <div className="flex justify-end gap-1">
          <Button
            href="/"
            className={`border-transparent bg-transparent text-stone-700 underline-offset-4 ${[
              "hover",
              "focus",
            ]
              .map((state) => {
                return `${state}:border-transparent ${state}:bg-transparent ${state}:underline`;
              })
              .join(" ")}`}
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}
