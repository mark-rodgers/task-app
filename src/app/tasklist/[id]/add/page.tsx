import { redirect } from "next/navigation";
import { getTaskListById, createTask } from "@/api";
import PageTitle from "@/app/components/PageTitle";
import TextBox from "@/app/components/TextBox";
import Button from "@/app/components/Button";

function validateParams(params: { id: string }): boolean {
  if (params.id.match(/^[0-9]+$/)) return true;
  return false;
}

export async function handleFormSubmit(data: FormData) {
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

export default async function page({ params }: { params: { id: string } }) {
  if (validateParams(params) === false) {
    return <>Invalid taskListId</>;
  }

  const taskList = await getTaskListById(+params.id);
  if (!taskList) return <>Task list not found</>;

  return (
    <>
      <PageTitle title="New Task" />
      <form action={handleFormSubmit} className="flex flex-col gap-2">
        <TextBox name="title" placeholder="New Task" />
        <input type="hidden" name="taskListId" value={params.id} />
        <div className="flex justify-end gap-1">
          <Button
            href="/"
            className="rounded-full px-12 py-2 font-bold text-stone-700 underline-offset-4 outline-none hover:underline focus:underline"
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}
