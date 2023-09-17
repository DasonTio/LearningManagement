"use client";

import Image from "next/image";
import Link from "next/link";

import { Checkbox } from "@mantine/core";

export default function LoginPage() {
  return (
    <main className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="lg:w-full bg-[url('/kampus.png')] bg-cover bg-no-repeat bg-center"></div>

      <div className="h-full flex flex-col items-center justify-center overflow-x-hidden bg-[#F8F8FA]">
        <div className="mt-5 md:mt-8 lg:mt-0">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mt-5 md:w-[200px]"
          ></Image>
        </div>

        <div className="flex flex-col items-center mt-5">
          <p className="text-2xl font-bold md:text-3xl lg:text-3xl">
            Welcome Back,
          </p>
          <p className="text-base text-[#6B6B6B] mt-1 md:text-xl">
            Please enter your credentials
          </p>
        </div>

        <form action="" className="w-screen flex flex-col items-center mt-10">
          <div className="w-4/5 flex flex-col gap-2 md:w-[65%] lg:w-[30%]">
            <label htmlFor="email">Email</label>
            <input
              className="h-[35px] border border-[#CED4DA] px-3 py-5 rounded-md"
              type="text"
              id="email"
            />
          </div>

          <div className="w-4/5 flex flex-col gap-2 mt-5 md:w-[65%] lg:w-[30%]">
            <label htmlFor="password">Password</label>
            <input
              className="h-[35px] border border-[#CED4DA] px-3 py-5 rounded-md"
              type="password"
              id="password"
            />
          </div>

          <div className="w-4/5 flex justify-end items-center mt-5 md:w-[65%] lg:w-[30%]">
            <div className="">
              {/* <input type="checkbox" id="checkbox" />
              <label className="text-sm lg:text-base" htmlFor="checkbox">
                {" "}
                Remember me
              </label> */}
              <Checkbox
                label="Remember Me"
                sx={{
                  ["& .mantine-Checkbox-label"]: {
                    fontSize: "1rem",
                    color: "GrayText",
                  },
                }}
              />
            </div>

            {/* <span className="text-sm text-[#6B6B6B] lg:text-base">
              Forgot password?
            </span> */}
          </div>

          <div className="w-4/5 flex flex-col gap-6 mt-5 md:w-[65%] lg:w-[30%] lg:mt-7">
            <button
              type="submit"
              className="bg-black text-white font-bold rounded-3xl py-3 hover:bg-[#333333] "
            >
              Log in
            </button>
            <button className="flex justify-center gap-x-3 bg-[#DDD] font-bold rounded-3xl py-3 hover:bg-[#cacaca]">
              <Image
                src="/search.png"
                alt="google"
                width={24}
                height={24}
              ></Image>
              Log in with Google
            </button>
          </div>
        </form>

        <div className="mt-10">
          <p>
            Don't have an account? <Link href="../register">Sign up</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
