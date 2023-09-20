import { AppShell, Navbar, Header } from "@mantine/core";
import { HouseSimple, NewspaperClipping, SignOut } from "@phosphor-icons/react";
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const { data: session } = useSession();
  return (
    <main className={"grid grid-cols-[300px_auto_440px]"}>
      <Navbar className="h-screen" width={{ base: 300 }}>
        <Navbar.Section className="p-8">
          <div className="border-b-2 pb-4 flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={80}
              className="md:w-[200px] "
            ></Image>
          </div>
        </Navbar.Section>
        <Navbar.Section grow className="flex flex-col gap-2 px-4">
          <Link
            href={"/"}
            className="rounded-md hover:bg-gray-100 grid grid-cols-[30%_auto] gap-4 p-2 items-center cursor-pointer"
          >
            <div className="flex justify-end items-center">
              <HouseSimple size={"1.5rem"}></HouseSimple>
            </div>
            <p className="flex items-center">Dashboard</p>
          </Link>
          <Link
            href={"/lecture"}
            className="rounded-md hover:bg-gray-100 grid grid-cols-[30%_auto] gap-4 p-2 items-center cursor-pointer"
          >
            <div className="flex justify-end items-center">
              <NewspaperClipping size={"1.5rem"}></NewspaperClipping>
            </div>
            <p className="flex items-center">Lecture</p>
          </Link>
        </Navbar.Section>
        <Navbar.Section className="flex flex-col justify-center gap-8">
          <div className="flex justify-center">
            <button
              className="p-4 rounded-md bg-orange-400 text-white hover:bg-orange-500 hover:shadow-xl transition-all ease-in-out duration-100"
              onClick={() => signOut()}
            >
              <SignOut size={"1.5rem"}></SignOut>
            </button>
          </div>
          <section className="border-t-2 p-4 ">
            <div className="flex gap-4 items-center">
              <div className="w-16 aspect-square rounded-full grid place-items-center bg-orange-500 font-bold text-2xl text-orange-200">
                {session?.user?.name![0].toUpperCase()}
              </div>

              <div className="overflow-hidden">
                <p className="max-w-sm overflow-hidden text-ellipsis whitespace-nowrap font-bold text-xl">
                  {session?.user?.name}
                </p>
                <p className="max-w-sm overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                  {session?.user?.email}
                </p>
              </div>
            </div>
          </section>
        </Navbar.Section>
      </Navbar>
      <section className="p-8 flex flex-col gap-8">{children}</section>
      <Navbar className="h-screen border-l-2 flex-col" width={{ base: 440 }}>
        <Navbar.Section grow mt="md" className="flex flex-col gap-8 p-4 px-8">
          <h1 className="text-3xl font-bold">Status</h1>
          <section className="border rounded-md grid place-items-center h-[20vh] font-bold">
            No available status yet
          </section>
        </Navbar.Section>
      </Navbar>
    </main>
  );
};

export default MainContainer;
