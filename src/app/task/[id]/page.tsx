import { redirect } from "next/navigation";
import { getTaskById, updateTask } from "@/api";
import PageTitle from "@/app/components/PageTitle";
import TextBox from "@/app/components/TextBox";
import Button from "@/app/components/Button";

function validateParams(params: { id: string }): boolean {
  if (params.id.match(/^[0-9]+$/)) return true;
  return false;
}

async function handleFormSubmit(data: FormData) {
  "use server";
  console.log("TODO: UPDATE TASK");

  const title = data.get("title");
  if (typeof title !== "string" || title.length === 0)
    throw new Error("Invalid title");

  const id = data.get("id");
  if (id === null || id === undefined) throw new Error("Invalid id");

  const taskListId = data.get("taskListId");
  if (taskListId === null || taskListId === undefined)
    throw new Error("Invalid taskListId");

  console.log(`id: ${id}`);
  console.log(`title: ${title}`);

  const task = { title };

  await updateTask(+id, task);
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
