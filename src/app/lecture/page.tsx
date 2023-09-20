"use client";
import MainContainer from "@/components/MainContainer";
import clsx from "clsx";
import { LectureLink } from "@/components/LectureLink";

const LecturePage = () => {
  return (
    <MainContainer>
      <h1 className="text-3xl font-bold">Lecture</h1>
      <ul className="flex flex-col gap-6">
        <LectureLink href="/lecture/internet" title="Apa itu internet?" />
        <LectureLink href="/lecture/intranet" title="Apa itu intranet?" />
        <LectureLink href="/lecture/ekstranet" title="Apa itu ekstranet?" />
      </ul>
    </MainContainer>
  );
};
export default LecturePage;
