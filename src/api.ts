import { prisma } from "@/db";
import type { Task, TaskList } from "@prisma/client";

export type TaskListWithTasks = TaskList & { tasks: Task[] };

// TasksLists API
export function getTaskLists() {
  return prisma.taskList.findMany();
}

export function getTaskListById(
  taskListId: number,
  includeTasks: boolean = false,
): Promise<TaskList | TaskListWithTasks | null> {
  return prisma.taskList.findUnique({
    where: { id: taskListId },
    include: { tasks: includeTasks },
  });
}

export function createTaskList(taskList: { title: string }): Promise<TaskList> {
  return prisma.taskList.create({ data: taskList });
}

// Tasks API
export async function createTask(task: {
  title: string;
  taskListId: number;
}): Promise<Task> {
  "use server";
  return await prisma.task.create({ data: task });
}

export async function toggleTaskComplete(
  id: number,
  complete: boolean,
): Promise<Task> {
  "use server";
  return await prisma.task.update({ where: { id }, data: { complete } });
}
