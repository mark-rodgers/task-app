import { redirect } from "next/navigation";
import { createTaskList } from "@/api";
import PageTitle from "@/app/_components/PageTitle";
import TextBox from "@/app/_components/TextBox";
import Button from "@/app/_components/Button";

async function handleFormSubmit(data: FormData) {
  "use server";

  const title = data.get("title");
  if (typeof title !== "string" || title.length === 0)
    throw new Error("Invalid title");

  const taskList = await createTaskList({ title: title });
  redirect(`/tasklist/${taskList.id}`);
}

export default function TaskListAdd() {
  return (
    <>
      <PageTitle title="New Task List" />
      <form action={handleFormSubmit} className="flex flex-col gap-2">
        <TextBox name="title" placeholder="New Task List" />
        <div className="flex justify-end gap-1">
          <Button
            href="/"
            className="border-transparent bg-transparent text-black underline-offset-4 hover:border-transparent hover:bg-transparent hover:underline focus:border-transparent focus:bg-transparent focus:underline"
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}
