"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import MainContainer from "@/components/MainContainer";

function DashboardPage() {
  const { data: session } = useSession();

  return (
    <MainContainer>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <section className="border rounded-md grid place-items-center h-[20vh] font-bold">
        You have not seen any material yet
      </section>
    </MainContainer>
  );
}
export default DashboardPage;
