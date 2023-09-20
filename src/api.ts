import { prisma } from "@/db";
import type { Task, TaskList } from "@prisma/client";

export type TaskListWithTasks = TaskList & { tasks: Task[] };

// TasksLists API
export function createTaskList(taskList: { title: string }): Promise<TaskList> {
  return prisma.taskList.create({ data: taskList });
}

export function getTaskLists() {
  return prisma.taskList.findMany();
}

// TODO: fix return so works with `Promise<TaskListWithTasks | null>` instead of `Promise<any | null>`
export function getTaskListById(
  taskListId: number,
  includeTasks: boolean | Object = false,
): Promise<any | null> {
  return prisma.taskList.findUnique({
    where: { id: taskListId },
    include: {
      tasks: includeTasks,
    },
  });
}

// Tasks API
export async function createTask(task: {
  title: string;
  taskListId: number;
}): Promise<Task> {
  "use server";
  return await prisma.task.create({ data: task });
}

export function getTaskById(
  taskId: number,
  includeTaskList: boolean | Object = false,
): Promise<any | null> {
  return prisma.task.findUnique({
    where: { id: taskId },
    include: {
      taskList: includeTaskList,
    },
  });
}

export async function updateTask(
  id: number,
  task: {
    title: string;
  },
): Promise<Task> {
  "use server";
  return await prisma.task.update({
    where: {
      id: id,
    },
    data: task,
  });
}

export async function toggleTaskComplete(
  id: number,
  complete: boolean,
): Promise<Task> {
  "use server";
  return await prisma.task.update({ where: { id }, data: { complete } });
}
