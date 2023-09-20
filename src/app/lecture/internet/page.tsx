"use client";
import LectureContainer from "@/components/LectureContainer";
// import React, { useEffect, useRef, useState } from "react";

// import { pdfjs, Document, Page } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { useEffect, useRef } from "react";

const IntranetPage = () => {
  const handlerAPI = async ({
    title,
    link,
  }: {
    title: string;
    link: string;
  }) => {
    await fetch(`${process.env.NEXT_PUBLIC_API}/api/material`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        link: link,
      }),
    });
  };
  handlerAPI({
    title: "Internet",
    link: `${process.env.NEXT_PUBLIC_API}/lectures/internet`,
  });

  return (
    <>
      <LectureContainer>
        <section className="flex flex-col gap-8 mb-24">
          <div>
            <h1>Internet</h1>
            <p className="text-gray-400">2023.09.21 by Group</p>
          </div>
          {/* Intranet */}
          {/* <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(
              "https://files.smallpdf.com/files/3e91655dd922d4113bfba898e0fd64ba.pdf?name=Internet.pdf"
            )}&embedded=true`}
            className="w-full h-[60vh]"
          ></iframe> */}
          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(
              "https://d17lvj5xn8sco6.cloudfront.net/A4/6A/EC/7E/BF/CC/40/B4/4E/89/83/B6/88/C5/F7/CA/0031D252/common/downloads/publication.pdf?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kMTdsdmo1eG44c2NvNi5jbG91ZGZyb250Lm5ldC9BNC82QS9FQy83RS9CRi9DQy80MC9CNC80RS84OS84My9CNi84OC9DNS9GNy9DQS8wMDMxRDI1Mi8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjk1MjQ1MjI5fX19XX0_&Signature=dtvKOmLOt35BWZtzEAK4ZOiOhrZftw-RzW3XF3RjUqqpXexErXK3xy4DJuLMPX~kei4CI~X5W285wGU6RQ9ckIit6tOl9tqmY4iB8mHfeRNjUm3ctdzSXry2PfD3YDy11KRsxkiNPXd~D5Td5HOltxCK9edImvP~kX-TCl-oIpA_&Key-Pair-Id=APKAJHHI2UARJWNSOBCQ&uni=4.6.114-fix2-R10296"
            )}&embedded=true`}
            className="w-full h-[60vh]"
          ></iframe>
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">APA ITU INTERNET?</h1>
              <p className="text-lg">
                Internet adalah jaringan global yang terdiri dari berbagai
                jaringan komputer yang terhubung di seluruh dunia melalui
                protokol komunikasi khusus. Ini memungkinkan komputer, ponsel,
                tablet, server, dan perangkat lain untuk berkomunikasi dan
                bertukar informasi di seluruh dunia. Internet merupakan salah
                satu pencapaian teknologi terpenting dalam sejarah modern,
                dengan berbagai komponen dan konsep penting:
              </p>
              <ul className="flex flex-col gap-4">
                <li className=" list-inside">
                  <strong> Protokol Internet</strong>: Protokol adalah aturan
                  dan standar yang mengatur cara perangkat berkomunikasi melalui
                  Internet. Protokol yang paling terkenal adalah TCP/IP
                  (Transmission Control Protocol/Internet Protocol), yang
                  digunakan untuk mengirim dan menerima data melalui Internet.
                </li>
                <li className=" list-inside">
                  <strong> World Wide Web(WWW)</strong>: bagian yang lumayan
                  krusial dalam internet dimana yang memungkinkan pengguna untuk
                  mengakses berbagai informasi dalam bentuk halaman web, yang
                  melibatkan perangkat lunak penjelajah web (Web Browser)
                  seperti Chrome, Firefox, Safari dan sebagainya.
                </li>
              </ul>
            </div>
          </section>
        </section>
      </LectureContainer>
    </>
  );
};

export default IntranetPage;

// {/* Perbeddaan Internet Ekstranet dan Intranet */}
// <iframe
// src={`https://docs.google.com/gview?url=${encodeURIComponent(
//   "https://files.smallpdf.com/files/009f3e5f66d72f1948d6c68c62c56409.pdf?name=ilovepdf_merged.pdf"
// )}&embedded=true`}
// className="w-full h-[60vh]"
// ></iframe>
// {/* Internet */}
// <iframe
// src={`https://docs.google.com/gview?url=${encodeURIComponent(
//   "https://files.smallpdf.com/files/3e91655dd922d4113bfba898e0fd64ba.pdf?name=Internet.pdf"
// )}&embedded=true`}
// className="w-full h-[60vh]"
// ></iframe>
