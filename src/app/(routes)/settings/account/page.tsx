"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Loading from "@/app/_components/Loading";
import TextBox from "@/app/_components/TextBox";
import Button from "@/app/_components/Button";
import UploadIcon from "@/app/_components/icons/UploadIcon";

export default function AccountSettings() {
  const { data: session, status } = useSession();

  if (status === "loading") return <Loading />;

  return (
    <div className="flex flex-col gap-2">
      <div>
        <button
          onClick={() => alert("TODO: allow user to update profile image")}
          className="group relative mx-auto block h-fit w-fit cursor-pointer"
        >
          <Image
            src={
              session?.user?.image ||
              `https://via.placeholder.com/80x80/fbbf24/b45309?text=${
                session?.user?.name?.charAt(0) || ""
              }`
            }
            width={150}
            height={150}
            alt={session?.user?.name || "Default user image"}
            className="rounded-full"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <UploadIcon className="h-10 w-10" />
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <div>Display Name</div>
        <div className="group relative">
          <TextBox
            id="name"
            name="name"
            defaultValue={session?.user?.name || ""}
            readOnly
            className="w-full"
          />
          <span className="absolute bottom-10 left-1/2 z-10 m-4 mx-auto -translate-x-1/2 rounded-md bg-gray-800 px-4 py-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100">
            Display Name cannot be changed when signed in with Google,
            Microsoft, or GitHub.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Email</div>
        <div className="group relative">
          <TextBox
            id="email"
            name="email"
            defaultValue={session?.user?.email || ""}
            readOnly
            className="w-full"
          />
          <span className="absolute bottom-10 left-1/2 z-10 m-4 mx-auto -translate-x-1/2 rounded-md bg-gray-800 px-4 py-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100">
            Email cannot be changed when signed in with Google, Microsoft, or
            GitHub.
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <Button>Save</Button>
      </div>
    </div>
  );
}
