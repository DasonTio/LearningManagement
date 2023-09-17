"use client";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main>
      {session?.user?.email}
      {session?.user?.image}
      {session?.user?.name}
      <h1>Home</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </main>
  );
}
