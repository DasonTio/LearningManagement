"use client";

import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ToastNotification from "@/components/ToastNotification";

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const router = useRouter();
  const [shown, setShown] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API!}/api/auth/register`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    ).then((res) => res.json());
    console.log(response);

    if (response.status == 422) {
      setMessage(response.message);
      setShown(true);
      setTimeout(() => setShown(false), 2000);
    } else {
      router.push("/login");
    }
  };

  const onSignIn = async () => {
    const response = await signIn("google", {
      callbackUrl: process.env.NEXTAUTH_URL,
    });
    router.push("/");
  };

  return (
    <main className="w-full h-screen lg:grid lg:grid-cols-2">
      <ToastNotification
        message={message}
        title={title}
        shown={shown}
        color={color}
      />
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
          <p className="text-2xl font-bold md:text-3xl lg:text-3xl">Welcome,</p>
          <p className="text-base text-[#6B6B6B] mt-1 md:text-xl">
            Please enter your credentials
          </p>
        </div>

        <form
          action=""
          className="w-screen flex flex-col items-center mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-4/5 flex flex-col gap-2 md:w-[65%] lg:w-[30%]">
            <label htmlFor="name">Name</label>
            <input
              className="h-[35px] border border-[#CED4DA] px-3 py-5 rounded-md"
              type="text"
              id="name"
              {...register("name", {
                required: true,
              })}
            />
          </div>

          <div className="w-4/5 flex flex-col mt-5 gap-2 md:w-[65%] lg:w-[30%]">
            <label htmlFor="email">
              Email
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <span className="text-xs text-red-400 ">
                    &nbsp;&nbsp;{message}
                  </span>
                )}
              />
            </label>
            <input
              className="h-[35px] border border-[#CED4DA] px-3 py-5 rounded-md"
              type="text"
              id="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Please insert real email",
                },
              })}
            />
          </div>

          <div className="w-4/5 flex flex-col gap-2 mt-5 md:w-[65%] lg:w-[30%]">
            <label htmlFor="password">Password</label>
            <input
              className="h-[35px] border border-[#CED4DA] px-3 py-5 rounded-md"
              type="password"
              id="password"
              {...register("password", {
                required: true,
              })}
            />
          </div>

          <div className="w-4/5 flex flex-col gap-2 mt-5 md:w-[65%] lg:w-[30%]">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              className="h-[35px] border border-[#CED4DA] px-3 py-5 rounded-md"
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
              })}
            />
          </div>

          <div className="w-4/5 flex flex-col gap-6 mt-5 md:w-[65%] lg:w-[30%] lg:mt-7">
            <button
              type="submit"
              className="bg-black text-white font-bold rounded-3xl py-3 hover:bg-[#333333] "
            >
              Sign up
            </button>
            <button
              type="button"
              className="flex justify-center gap-x-3 bg-[#DDD] font-bold rounded-3xl py-3 hover:bg-[#cacaca]"
              onClick={onSignIn}
            >
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
            Already have an account? <Link href="../login">Log in</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
