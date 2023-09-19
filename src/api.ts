import { prisma } from "@/db";
import { redirect } from "next/navigation";

export function getTaskList(taskListId: number, includeTasks: boolean = false) {
  return prisma.taskList.findUnique({
    where: { id: taskListId },
    include: { tasks: includeTasks },
  });
}

export async function toggleTaskComplete(id: number, complete: boolean) {
  "use server";
  await prisma.task.update({ where: { id }, data: { complete } });
}

export async function createTask(task: { title: string; taskListId: number }) {
  "use server";
  await prisma.task.create({ data: task });
}

// export function getTasksByTaskListId(taskListId: number) {
//   return prisma.task.findMany({
//     where: { taskListId: taskListId },
//   });
// }

// export function getTaskLists(taskListId: number) {
//   return prisma.taskList.findUnique({
//     where: { id: taskListId },
//     include: { tasks: true },
//   });
// }