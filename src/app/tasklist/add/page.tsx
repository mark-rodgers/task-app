import { redirect } from "next/navigation";
// import { prisma } from "@/db";
import PageTitle from "@/app/components/PageTitle";
import TextBox from "@/app/components/TextBox";
import Button from "@/app/components/Button";

async function createTaskList(data: FormData) {
  "use server";

  // const title = data.get("title")?.valueOf();
  // if (typeof title !== "string" || title.length === 0)
  //   throw new Error("Invalid Title");

  // await prisma.tasklist.create({ data: { title } });
  redirect("/");
}

export default function page() {
  return (
    <>
      <PageTitle title="New Task List" />
      <form action={createTaskList} className="flex flex-col gap-2">
        <TextBox name="title" placeholder="New Task List" />
        <div className="flex justify-end gap-1">
          <Button
            href="/"
            className="rounded-full px-12 py-2 font-bold text-stone-700 underline-offset-4 outline-none hover:underline focus:underline"
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}
