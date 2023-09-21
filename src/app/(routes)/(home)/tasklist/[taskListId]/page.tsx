import Image from "next/image";
import { getTaskListById, toggleTaskComplete } from "@/api";
import PageTitle from "@/app/_components/PageTitle";
import TaskListTask from "@/app/_components/TaskListTask";
import Button from "@/app/_components/Button";
import type { Task } from "@prisma/client";

function validateParams(params: { taskListId: string }): boolean {
  if (params.taskListId.match(/^[0-9]+$/)) return true;
  return false;
}

export default async function TaskList({
  params,
}: {
  params: { taskListId: string };
}) {
  if (validateParams(params) === false) {
    return <>Invalid taskListId</>;
  }

  const taskList = await getTaskListById(+params.taskListId, {
    orderBy: {
      id: "asc",
    },
  });
  if (!taskList) return <>Task list not found</>;

  return (
    <>
      {!taskList.tasks || taskList.tasks.length === 0 ? (
        <>
          <PageTitle title={taskList.title} />
          <div className="flex h-full items-center justify-center text-center">
            <div className="flex flex-col items-center gap-8">
              <Image
                src="/not-found.jpg"
                alt="Empty"
                width={300}
                height={300}
              />
              <div>No tasks have been added yet.</div>
              <Button href={`/tasklist/${params.taskListId}/add`}>
                Add your first task!
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <PageTitle title={taskList.title}>
            <Button href={`/tasklist/${params.taskListId}/add`}>
              New Task
            </Button>
          </PageTitle>
          <ul>
            {taskList.tasks.map((task: Task) => (
              <TaskListTask
                key={task.id}
                {...task}
                toggleTaskComplete={toggleTaskComplete}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
}
