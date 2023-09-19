import { prisma } from "@/db";
import PageTitle from "./components/PageTitle";
import Button from "./components/Button";
import { TodoItem } from "./components/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: number, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <PageTitle title="Tasks">
        <Button href="/new">New Task</Button>
      </PageTitle>
      <main>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </main>
    </>
  );
}
