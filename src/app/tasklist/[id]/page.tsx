import { getTaskList, toggleTaskComplete } from "@/api";
import PageTitle from "@/app/components/PageTitle";
import TaskListTask from "@/app/components/TaskListTask";
import Button from "@/app/components/Button";

function validateParams(params: { id: string }): boolean {
  if (params.id.match(/^[0-9]+$/)) return true;
  return false;
}

export default async function page({ params }: { params: { id: string } }) {
  if (validateParams(params) === false) {
    return <>Invalid taskListId</>;
  }

  const taskList = await getTaskList(+params.id, true);
  if (!taskList) return <>Task list not found</>;

  return (
    <>
      <PageTitle title={taskList.title}>
        <Button href={`/tasklist/${params.id}/add`}>New Task</Button>
      </PageTitle>
      {!taskList.tasks || taskList.tasks.length === 0 ? (
        <div className="flex h-full items-center justify-center text-center">
          <div className="flex flex-col gap-8">
            <div>No tasks have been added yet.</div>
            <Button href={`/tasklist/${params.id}/add`}>
              Add your first task!
            </Button>
          </div>
        </div>
      ) : (
        <ul>
          {taskList.tasks.map((task) => (
            <TaskListTask
              key={task.id}
              {...task}
              toggleTaskComplete={toggleTaskComplete}
            />
          ))}
        </ul>
      )}
    </>
  );
}
