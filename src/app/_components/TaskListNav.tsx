import { getTaskLists } from "@/api";
import TaskListNavLink from "@/app/_components/TaskListNavLink";
import Button from "@/app/_components/Button";

export default async function TaskListNav() {
  const taskLists = await getTaskLists();
  return (
    <nav className="p-4">
      <div className="text-stone-500">
        <div className="font-bold">Task Lists</div>
        {taskLists.length === 0 ? (
          <>No task lists exist yet.</>
        ) : (
          <>
            {taskLists.map((taskList) => (
              <TaskListNavLink
                key={taskList.id}
                id={taskList.id}
                title={taskList.title}
              />
            ))}
          </>
        )}
        <div className="mt-4 flex items-center justify-center">
          <Button href="/tasklist/add">New Task List</Button>
        </div>
      </div>
    </nav>
  );
}
