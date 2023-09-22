import { redirect } from "next/navigation";
import { getTaskListById, createTask } from "@/api";
import PageTitle from "@/app/_components/PageTitle";
import TextBox from "@/app/_components/TextBox";
import Button from "@/app/_components/Button";

function validateParams(params: { taskListId: string }): boolean {
  if (params.taskListId.match(/^[0-9]+$/)) return true;
  return false;
}

async function handleFormSubmit(data: FormData) {
  "use server";

  const title = data.get("title");
  if (typeof title !== "string" || title.length === 0)
    throw new Error("Invalid title");

  const taskListId = data.get("taskListId");
  if (taskListId === null || taskListId === undefined)
    throw new Error("Invalid taskListId");

  const task = {
    title,
    taskListId: +taskListId,
  };

  createTask(task);
  redirect(`/tasklist/${taskListId}`);
}

export default async function TaskAdd({
  params,
}: {
  params: { taskListId: string };
}) {
  if (validateParams(params) === false) {
    return <>Invalid taskListId</>;
  }

  const taskList = await getTaskListById(+params.taskListId);
  if (!taskList) return <>Task list not found</>;

  return (
    <>
      <PageTitle title="New Task" />
      <form action={handleFormSubmit} className="flex flex-col gap-2">
        <TextBox id="title" name="title" placeholder="New Task" />
        <input type="hidden" name="taskListId" value={params.taskListId} />
        <div className="flex justify-end gap-1">
          <Button
            href={`/tasklist/${params.taskListId}`}
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
