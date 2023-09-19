"use client";

import React, { useState } from "react";
import Image from "next/image";
import Popover from "./Popover";
import Link from "next/link";

export default function UserMenu() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="relative">
      <Popover isPopoverOpen={isPopoverOpen}>
        <div className="absolute right-0 top-0 mb-2 mr-2 w-48 translate-y-[-110%] rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link
              href="/account"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Manage Account
            </Link>
            <Link
              href="/logout"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </Link>
          </div>
        </div>
      </Popover>
      <div
        onClick={togglePopover}
        className="flex cursor-pointer select-none items-center bg-stone-200 p-2 hover:bg-stone-300"
      >
        <Image
          src="https://avatars.githubusercontent.com/u/2798202"
          width={40}
          height={40}
          alt="User Profile Image"
          className="mr-3 rounded-full"
        />
        <div>Mark Rodgers</div>
        <div
          className={`ml-auto flex h-8 w-8 cursor-pointer items-center justify-center gap-1 rounded-full transition-transform ${
            isPopoverOpen && "rotate-90"
          }`}
        >
          <div className="h-1 w-1 rounded-full bg-stone-400"></div>
          <div className="h-1 w-1 rounded-full bg-stone-400"></div>
          <div className="h-1 w-1 rounded-full bg-stone-400"></div>
        </div>
      </div>
    </div>
  );
}
