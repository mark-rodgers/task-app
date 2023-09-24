"use client";

import { useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
// import { Transition } from "@headlessui/react";
import TextBox from "@/app/_components/TextBox";
import Button from "@/app/_components/Button";

function handleLoginFormSubmit(e: React.MouseEvent<HTMLElement>) {
  e.preventDefault();
  alert(
    "Email logins are not implemented yet. Please sign in with your Google or GitHub account.",
  );
}

function handleRegisterFormSubmit(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
}

export default function Login() {
  function toggleCurrentForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // if (currentForm === "login") {
    //   setCurrentForm("register");
    // } else if (currentForm === "register") {
    //   setCurrentForm("login");
    // }
    switch (currentForm) {
      case "login":
        setCurrentForm("register");
        break;
      case "register":
        setCurrentForm("login");
        break;
    }
  }

  const { data: session, status } = useSession();
  if (status === "authenticated") redirect("/");

  const [currentForm, setCurrentForm] = useState("login");

  return (
    <div className="w-full">
      <div className="backgroundImage h-full bg-[url('/bg-login-page.webp')] bg-cover bg-center">
        <div className="backgroundOverlay flex h-full w-full justify-normal bg-amber-400/50 backdrop-brightness-50 md:justify-center">
          <div className="leftSide m-16 hidden w-fit grow lg:block">
            <div className="flex flex-col pt-16 font-bold lg:text-[5vw] xl:text-[8vw] ">
              <div className="animate-fade-in-left leading-none text-amber-200">
                Welcome
              </div>
              <div className="animate-fade-in-up leading-none text-amber-200">
                Back.
              </div>
            </div>
          </div>
          <div className="rightSide m-8 h-fit w-full sm:m-16 md:w-fit md:min-w-[600px] lg:ml-0">
            <div className="flex flex-col rounded-3xl bg-white p-8 sm:p-16">
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
                <Button onClick={handleLoginFormSubmit} className="my-5 p-4">
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
                <span className="mx-4 flex-shrink text-stone-400">or</span>
                <div className="flex-grow border border-t border-stone-200"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-3 p-4">
                <button
                  className="rounded-full border border-stone-200 px-8 py-3 font-bold text-stone-700 outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100"
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
                  className="rounded-full border border-stone-200 px-8 py-2 font-bold text-stone-700 outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100"
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
          </div>
        </div>
      </div>
    </div>
  );
}
