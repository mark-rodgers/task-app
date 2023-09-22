"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import TextBox from "@/app/_components/TextBox";
import Button from "@/app/_components/Button";

function handleLoginFormSubmit(e: React.MouseEvent<HTMLElement>) {
  e.preventDefault();
  alert(
    "Email logins are not implemented yet. Please sign in with your Google or GitHub account.",
  );
}

function handleRegisterFormSubmit(e: React.MouseEvent<HTMLElement>) {
  e.preventDefault();
}

export default function Login() {
  const { data: session, status } = useSession();
  if (status === "authenticated") redirect("/");

  return (
    <div className="w-full">
      <div className="backgroundImage h-full bg-[url('/bg-login-page.jpg')] bg-cover bg-center">
        <div className="backgroundOverlay absolute flex h-full w-full justify-normal bg-amber-400/50 backdrop-brightness-50 md:justify-center">
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
          <div className="rightSide m-8 h-fit w-full rounded-3xl bg-white sm:m-16 md:w-fit md:min-w-[600px] lg:ml-0">
            <div className="flex flex-col p-8 sm:p-16">
              <div className="text-amb mb-8 text-4xl font-bold">Sign In</div>
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
                  <a href="#" className="bold text-amber-700">
                    Sign up
                  </a>
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
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    signIn("google")
                  }
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
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    signIn("github")
                  }
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
