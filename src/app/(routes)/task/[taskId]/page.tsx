import { redirect } from "next/navigation";
import { getTaskById, updateTaskById, getTaskLists } from "@/api";
import PageTitle from "@/app/_components/PageTitle";
import TextBox from "@/app/_components/TextBox";
import ListBox from "@/app/_components/ListBox";
import ListBoxButton from "@/app/_components/ListBoxButton";
import ListBoxOptions from "@/app/_components/ListBoxOptions";
import ListBoxOption from "@/app/_components/ListBoxOption";
import CheckBox from "@/app/_components/CheckBox";
import Button from "@/app/_components/Button";

function validateParams(params: { taskId: string }): boolean {
  if (params.taskId.match(/^[0-9]+$/)) return true;
  return false;
}

async function handleFormSubmit(data: FormData) {
  "use server";

  const title = data.get("title");
  if (typeof title !== "string" || title.length === 0)
    throw new Error("Invalid title");

  const complete = data.get("complete");

  const id = data.get("id");
  if (id === null || id === undefined) throw new Error("Invalid id");

  const taskListId = data.get("taskListId");
  if (taskListId === null || taskListId === undefined)
    throw new Error("Invalid taskListId");

  const task = {
    title: title,
    complete: complete === "on" ? true : false,
    taskListId: +taskListId,
  };
  console.log(task);
  await updateTaskById(+id, task);
  redirect(`/tasklist/${taskListId}`);
}

export default async function page({ params }: { params: { taskId: string } }) {
  if (validateParams(params) === false) {
    return <>Invalid taskId</>;
  }

  const task = await getTaskById(+params.taskId, true);
  if (!task) return <>Task not found</>;

  const taskLists = await getTaskLists();

  return (
    <>
      <PageTitle title="Update Task" />
      <form action={handleFormSubmit} className="flex flex-col gap-2">
        <TextBox name="title" defaultValue={task.title} />
        <ListBox
          name="taskListId"
          defaultId={task.taskListId}
          defaultValue={task.taskList.title}
        >
          <ListBoxButton />
          <ListBoxOptions>
            {taskLists &&
              taskLists.map((taskList) => (
                <ListBoxOption
                  key={taskList.id}
                  id={taskList.id}
                  value={taskList.title}
                >
                  {taskList.title}
                </ListBoxOption>
              ))}
          </ListBoxOptions>
        </ListBox>
        <div className="my-3 flex items-center">
          <CheckBox
            id="complete"
            name="complete"
            defaultChecked={task.complete}
          />
          <label htmlFor="complete" className="cursor-pointer pl-4">
            Completed
          </label>
        </div>
        <input type="hidden" name="id" value={task.id} />
        <div className="flex justify-end gap-1">
          <Button
            href="/"
            className="border-transparent bg-transparent text-black underline-offset-4 hover:border-transparent hover:bg-transparent hover:underline focus:border-transparent focus:bg-transparent focus:underline"
          >
            Cancel
          </Button>
          <Button
            href={`/task/${task.id}/delete`}
            className="border-red-500 bg-red-500 text-red-800 hover:border-red-400 hover:bg-red-400 focus:border-red-400 focus:bg-red-400"
          >
            Delete
          </Button>
          <Button type="submit">Update</Button>
        </div>
      </form>
    </>
  );
}
