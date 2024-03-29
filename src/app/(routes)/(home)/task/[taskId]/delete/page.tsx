import { redirect } from "next/navigation";
import { getTaskById, deleteTaskById } from "@/api";
import PageTitle from "@/app/_components/PageTitle";
import Button from "@/app/_components/Button";

function validateParams(params: { taskId: string }): boolean {
  if (params.taskId.match(/^[0-9]+$/)) return true;
  return false;
}

async function handleFormSubmit(data: FormData) {
  "use server";

  const id = data.get("id");
  if (id === null || id === undefined) throw new Error("Invalid id");

  const taskListId = data.get("taskListId");
  if (taskListId === null || taskListId === undefined)
    throw new Error("Invalid taskListId");

  await deleteTaskById(+id);
  redirect(`/tasklist/${taskListId}`);
}

export default async function DeleteTask({
  params,
}: {
  params: { taskId: string };
}) {
  if (validateParams(params) === false) {
    return <>Invalid taskId</>;
  }

  const task = await getTaskById(+params.taskId);
  if (!task) return <>Task not found</>;

  return (
    <>
      <PageTitle title={task.title} />
      <p className="mb-4">Are you sure you want to delete this task?</p>
      <form action={handleFormSubmit} className="flex flex-col gap-2">
        <input type="hidden" name="id" value={task.id} />
        <input type="hidden" name="taskListId" value={task.taskListId} />
        <div className="flex justify-end gap-1">
          <Button
            href={`/tasklist/${task.taskListId}`}
            className="border-transparent bg-transparent text-black underline-offset-4 hover:border-transparent hover:bg-transparent hover:underline focus:border-transparent focus:bg-transparent focus:underline"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="border-red-500 bg-red-500 text-red-800 hover:border-red-400 hover:bg-red-400 focus:border-red-400 focus:bg-red-400"
          >
            Delete
          </Button>
        </div>
      </form>
    </>
  );
}
