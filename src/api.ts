import { prisma } from "@/db";

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