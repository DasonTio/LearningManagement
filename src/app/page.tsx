"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import MainContainer from "@/components/MainContainer";
import { useEffect, useState } from "react";
import { LectureLink } from "./lecture/page";

function DashboardPage() {
  const { data: session } = useSession();
  const [data, setData] = useState([{ title: "", link: "" }]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/material`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <MainContainer>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {data[0].title != "" ? (
        data.map(({ title, link }) => {
          return (
            <div>
              <span className="text-sm text-slate-400">Readed</span>
              <LectureLink title={title} href={link} />
            </div>
          );
        })
      ) : (
        <section
          className={
            "border rounded-md grid place-items-center h-[20vh] font-bold"
          }
        >
          You have not seen any material yet
        </section>
      )}
    </MainContainer>
  );
}
export default DashboardPage;
