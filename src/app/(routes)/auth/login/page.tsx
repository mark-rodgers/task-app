"use client";

import { useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Transition } from "@headlessui/react";
import TextBox from "@/app/_components/TextBox";
import Button from "@/app/_components/Button";
import ChevronRightIcon from "@/app/_components/icons/ChevronRightIcon";

function handleLoginFormSubmit(e: React.MouseEvent<HTMLElement>) {
  e.preventDefault();
  alert(
    "Email logins are not implemented yet. Please sign in with your Google or GitHub account.",
  );
}

function handleRegisterFormSubmit(e: React.MouseEvent<HTMLElement>) {
  e.preventDefault();
  alert(
    "Email logins are not implemented yet. Please sign in with your Google or GitHub account.",
  );
}

function handleMicrosoftLogin(e: React.MouseEvent<HTMLElement>) {
  e.preventDefault();
  alert("Microsoft logins are not implemented yet.");
}

export default function Login() {
  function toggleCurrentForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    currentForm === "login"
      ? setCurrentForm("register")
      : setCurrentForm("login");
  }

  const { data: session, status } = useSession();
  if (status === "authenticated") redirect("/");

  const [currentForm, setCurrentForm] = useState("login");

  return (
    <div className="w-full">
      <div className="backgroundImage h-full bg-[url('/bg-login-page.webp')] bg-cover bg-center">
        <div className="backgroundOverlay flex h-full w-full justify-normal overflow-scroll bg-amber-400/50 backdrop-brightness-50 md:justify-center">
          <div className="leftSide m-16 hidden w-fit grow lg:block">
            <div className="flex flex-col pt-16 font-bold lg:text-[5vw] xl:text-[8vw] ">
              <div className="animate-fade-in-right leading-none text-amber-200">
                Welcome
              </div>
              <div className="animate-[fadeInUpDelay_2s_ease-in-out] leading-none text-amber-200">
                Back
                <span className="animate-[fadeInDelay_4s_ease-in-out]">.</span>
              </div>
            </div>
          </div>
          <div className="rightSide m-0 h-fit w-full sm:m-16 md:w-fit md:min-w-[600px] lg:ml-0">
            <div className="relative">
              <div className="absolute w-full">
                <Transition
                  appear={true}
                  show={currentForm === "login"}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="flex h-screen flex-col overflow-scroll bg-white px-8 py-16 sm:h-fit sm:animate-fade-in-left sm:rounded-3xl sm:p-16">
                    <div className="mb-8 text-4xl font-bold">Sign In</div>
                    <form className="flex flex-col gap-3">
                      <label htmlFor="email" className="font-bold">
                        Email
                      </label>
                      <TextBox
                        id="email"
                        name="email"
                        placeholder="jonsnow@thewall.com"
                        className="border p-4 font-normal"
                      />
                      <label htmlFor="password" className="font-bold">
                        Password
                      </label>
                      <TextBox
                        type="password"
                        id="password"
                        name="password"
                        className="border p-4 font-normal"
                      />
                      <Button
                        onClick={handleLoginFormSubmit}
                        className="my-5 p-4"
                      >
                        Sign In
                      </Button>
                      <div className="text-center">
                        Don&apos;t have an account?{" "}
                        <button
                          onClick={toggleCurrentForm}
                          className="bold text-amber-700 hover:underline focus:underline focus:outline-none"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                    <div className="relative my-5 flex items-center">
                      <div className="flex-grow border border-t border-stone-200"></div>
                      <span className="mx-4 flex-shrink text-stone-400">
                        or
                      </span>
                      <div className="flex-grow border border-t border-stone-200"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 p-4">
                      <button
                        className="w-full rounded-full border border-stone-200 px-8 py-3 font-bold text-stone-700 outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100"
                        onClick={() => signIn("google")}
                      >
                        <Image
                          src="/logo-google.svg"
                          alt="Google"
                          width={24}
                          height={24}
                          className="mr-4 inline-block"
                        />
                        Sign In with Google
                      </button>
                      <button
                        className="w-full rounded-full border border-stone-200 px-8 py-3 font-bold text-stone-700 outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100"
                        onClick={(e) => handleMicrosoftLogin(e)}
                      >
                        <Image
                          src="/logo-microsoft.svg"
                          alt="Microsoft"
                          width={24}
                          height={24}
                          className="mr-4 inline-block"
                        />
                        Sign In with Microsoft
                      </button>
                      <button
                        className="w-full rounded-full border border-stone-200 px-8 py-3 font-bold text-stone-700 outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100"
                        onClick={() => signIn("github")}
                      >
                        <Image
                          src="/logo-github.svg"
                          alt="GitHub"
                          width={24}
                          height={24}
                          className="mr-4 inline-block"
                        />
                        Sign In with GitHub
                      </button>
                    </div>
                  </div>
                </Transition>
              </div>
              <div className="absolute w-full">
                <Transition
                  appear={true}
                  show={currentForm === "register"}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="flex h-screen flex-col overflow-scroll bg-stone-900  p-8 pt-20 text-white sm:h-fit sm:animate-fade-in-left sm:rounded-3xl sm:p-16">
                    <div className="absolute left-6 top-6 sm:left-5 sm:top-4">
                      <button
                        onClick={toggleCurrentForm}
                        className="transition-colors hover:text-amber-300 focus:text-amber-300"
                      >
                        <ChevronRightIcon className="h-10 rotate-180" />
                      </button>
                    </div>
                    <div className="mb-8 text-4xl font-bold">Sign Up</div>
                    <form className="flex flex-col gap-3">
                      <label htmlFor="email" className="font-bold">
                        Email
                      </label>
                      <TextBox
                        id="email"
                        name="email"
                        placeholder="jonsnow@thewall.com"
                        className="border border-stone-700 p-4 font-normal"
                      />
                      <label htmlFor="password" className="font-bold">
                        Password
                      </label>
                      <TextBox
                        type="password"
                        id="password"
                        name="password"
                        className="border border-stone-700 p-4 font-normal"
                      />
                      <Button
                        onClick={handleRegisterFormSubmit}
                        className="my-5 bg-transparent p-4 text-amber-400 hover:text-amber-700 focus:text-amber-700"
                      >
                        Sign Up
                      </Button>
                    </form>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
