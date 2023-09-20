import { redirect } from "next/navigation";
import { getTaskById, updateTaskById, deleteTaskById } from "@/api";
import PageTitle from "@/app/components/PageTitle";
import TextBox from "@/app/components/TextBox";
import Button from "@/app/components/Button";

function validateParams(params: { id: string }): boolean {
  if (params.id.match(/^[0-9]+$/)) return true;
  return false;
}

async function handleFormSubmit(data: FormData) {
  "use server";

  const title = data.get("title");
  if (typeof title !== "string" || title.length === 0)
    throw new Error("Invalid title");

  const id = data.get("id");
  if (id === null || id === undefined) throw new Error("Invalid id");

  const taskListId = data.get("taskListId");
  if (taskListId === null || taskListId === undefined)
    throw new Error("Invalid taskListId");

  const task = { title };
  await updateTaskById(+id, task);
  redirect(`/tasklist/${taskListId}`);
}

async function handleDeleteButton(data: FormData) {
  "use server";

  const id = data.get("id");
  if (id === null || id === undefined) throw new Error("Invalid id");

  const taskListId = data.get("taskListId");
  if (taskListId === null || taskListId === undefined)
    throw new Error("Invalid taskListId");

  await deleteTaskById(+id);
  redirect(`/tasklist/${taskListId}`);
}

export default async function page({ params }: { params: { id: string } }) {
  if (validateParams(params) === false) {
    return <>Invalid taskId</>;
  }

  const task = await getTaskById(+params.id);
  if (!task) return <>Task not found</>;

  return (
    <>
      <PageTitle title="Update Task" />
      <form action={handleFormSubmit} className="flex flex-col gap-2">
        <TextBox name="title" defaultValue={task.title} />
        <input type="hidden" name="id" value={task.id} />
        <input type="hidden" name="taskListId" value={task.taskListId} />
        <div className="flex justify-end gap-1">
          <Button
            href="/"
            className="base-button border-transparent bg-transparent text-stone-700 underline-offset-4 hover:border-transparent hover:bg-transparent hover:underline focus:border-transparent focus:bg-transparent focus:underline"
          >
            Cancel
          </Button>
          <Button
            className="base-button border-red-500 bg-red-500 text-red-800 hover:border-red-400 hover:bg-red-400 focus:border-red-400 focus:bg-red-400"
            formAction={handleDeleteButton}
          >
            Delete
          </Button>
          <Button type="submit">Update</Button>
        </div>
      </form>
    </>
  );
}
