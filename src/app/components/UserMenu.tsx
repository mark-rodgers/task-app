"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Popover from "./Popover";

export default function UserMenu() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleClick = (e: MouseEvent) => {
    setIsPopoverOpen(false);
  };

  useEffect(() => {
    if (isPopoverOpen) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isPopoverOpen]);

  return (
    <div className="relative">
      <Popover isPopoverOpen={isPopoverOpen}>
        <div
          ref={popoverRef}
          className="absolute right-0 top-0 mb-2 mr-2 w-48 translate-y-[-110%] rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1">
            <Link
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              About
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
          className={`ml-auto flex h-8 w-8 cursor-pointer items-center justify-center gap-1 rounded-full transition-transform${
            isPopoverOpen ? " rotate-90" : ""
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
