"use server";

import { getServerSession } from "next-auth/next";
import { prisma } from "@/db";
import { authOptions } from "@/auth";
import type { Task, TaskList, User } from "@prisma/client";

import type { Session } from "next-auth";

export type TaskListWithTasks = TaskList & { tasks: Task[] };

// TasksList API
export async function createTaskList(taskList: {
  title: string;
}): Promise<TaskList> {
  const user = await getLoggedInUser();
  return prisma.taskList.create({ data: { ...taskList, userId: user.id } });
}

export async function getTaskLists() {
  const user = await getLoggedInUser();
  return prisma.taskList.findMany({
    where: { userId: user.id },
  });
}

// TODO: fix return so works with `Promise<TaskListWithTasks | null>` instead of `Promise<any | null>`
export async function getTaskListById(
  taskListId: number,
  includeTasks: boolean | Object = false,
): Promise<any | null> {
  const user = await getLoggedInUser();
  return prisma.taskList.findUnique({
    where: { id: taskListId, userId: user.id },
    include: {
      tasks: includeTasks,
    },
  });
}

// Task API
export async function createTask(task: {
  title: string;
  taskListId: number;
}): Promise<Task> {
  // TODO: verify user owns taskList
  return await prisma.task.create({ data: task });
}

export async function getTaskById(taskId: number): Promise<any | null> {
  const user = await getLoggedInUser();

  return prisma.task.findUnique({
    where: { id: taskId, taskList: { userId: user.id } },
    include: {
      taskList: true,
    },
  });
}

export async function updateTaskById(
  id: number,
  task: {
    title: string;
  },
): Promise<Task> {
  // TODO: verify user owns task
  return await prisma.task.update({
    where: {
      id: id,
    },
    data: task,
  });
}

export async function deleteTaskById(id: number): Promise<Task> {
  // TODO: verify user owns task
  return await prisma.task.delete({
    where: {
      id: id,
    },
  });
}

export async function toggleTaskComplete(
  id: number,
  complete: boolean,
): Promise<Task> {
  // TODO: verify user owns task
  return await prisma.task.update({ where: { id }, data: { complete } });
}

// User API
export async function getLoggedInUser(): Promise<any | null> {
  const session: Session | null = await getServerSession(authOptions);
  if (!session) throw new Error("Not authenticated");
  if (!session?.user?.email) throw new Error("No user email found in session");

  return await prisma.user.findUnique({
    where: { email: session?.user?.email },
  });
}
