import { prisma } from "@/db";
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
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Todos</h1>
        <Button href="/new">New</Button>
      </div>
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
