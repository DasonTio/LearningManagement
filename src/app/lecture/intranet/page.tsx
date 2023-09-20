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
    title: "Intranet",
    link: `${process.env.NEXT_PUBLIC_API}/lectures/intranet`,
  });
  return (
    <>
      <LectureContainer>
        <section className="flex flex-col gap-8 mb-24">
          <div>
            <h1>Intranet</h1>
            <p className="text-gray-400">2023.09.21 by Group</p>
          </div>
          {/* Intranet */}
          {/* <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(
              "https://files.smallpdf.com/files/11fda69c63345979d90016436019ca02.pdf?name=Intranet.pdf"
            )}&embedded=true`}
            className="w-full h-[60vh]"
          ></iframe> */}
          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(
              "https://d17lvj5xn8sco6.cloudfront.net/F6/49/27/34/41/2B/78/86/43/4F/92/77/BA/EF/C0/9F/0031D25A/common/downloads/publication.pdf?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kMTdsdmo1eG44c2NvNi5jbG91ZGZyb250Lm5ldC9GNi80OS8yNy8zNC80MS8yQi83OC84Ni80My80Ri85Mi83Ny9CQS9FRi9DMC85Ri8wMDMxRDI1QS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjk1MjQ1NDMwfX19XX0_&Signature=BDR-iZ5~xZrj1IkIGz3H0ZnUnVGePfWHsLRHuQM6Zplz3vfTNjk~v9EHHhtg5GWOhvbWKvzo7dhz5yehVFnNeF2eD92gOSfpPcYOGie47aGODp730kuwPxMGYrbqn4PF-3RKSk4u0K6Ma2RaoV7oyP2qDznz0UcL39DNuiu9Xow_&Key-Pair-Id=APKAJHHI2UARJWNSOBCQ&uni=4.6.114-fix2-R10296"
            )}&embedded=true`}
            className="w-full h-[60vh]"
          ></iframe>
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">APA ITU INTRANET?</h1>
              <p className="text-lg">
                Intranet adalah jaringan komputer internal yang digunakan oleh
                suatu organisasi atau perusahaan untuk menghubungkan dan
                berkomunikasi antar komputer, perangkat, dan sumber daya dalam
                organisasi. Intranet berbeda dengan Internet yang merupakan
                jaringan global yang dapat diakses oleh semua orang di seluruh
                dunia.
              </p>
              <p className="text-lg">
                Intranet ini digunakan dalam lingkup tertentu dengan tujuan
                tertentu pula. Misalnya pada sebuah organisasi atau perusahaan
                yang sangat menjaga keamanan informasinya. Hal ini karena semua
                data/informasi yang ada pada jaringan intranet hanya dapat
                diakses para pengguna yang terhubung dengan jaringan intranet
                yang sama sehingga minim akan kebocoran data.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">CARA KERJA INTRANET</h1>
              <p className="text-lg">
                Pengoperasian intranet melibatkan banyak komponen dan proses
                yang memungkinkan suatu organisasi atau perusahaan mengelola
                informasi, komunikasi, dan kolaborasi secara internal. Berikut
                langkah-langkah utama cara kerja intranet:
              </p>
              <ul className="flex flex-col gap-3">
                <li className="list-decimal list-inside">
                  <strong>Infrastruktur Jaringan</strong> : Intranet memerlukan
                  infrastruktur jaringan yang solid. Ini termasuk server yang
                  menghosting situs web intranet, perangkat keras jaringan
                  seperti router dan switch, dan koneksi Internet jika intranet
                  akan terhubung ke Internet (biasanya melalui firewall).
                </li>
                <li className="list-decimal list-inside">
                  <strong>Server Intranet</strong> : Organisasi sering kali
                  memiliki server web khusus yang menjalankan perangkat lunak
                  intranet. Server ini berfungsi sebagai host untuk situs web
                  intranet serta berbagai aplikasi dan data yang diakses oleh
                  anggota organisasi.
                </li>
                <li className="list-decimal list-inside">
                  <strong>Akses terbatas</strong>: Intranet sering kali memiliki
                  sistem autentikasi yang hanya memperbolehkan anggota
                  organisasi yang berwenang untuk mengaksesnya. Pengguna harus
                  memberikan kredensial (seperti nama pengguna dan kata sandi)
                  untuk masuk ke intranet.
                </li>
                <li className="list-decimal list-inside">
                  <strong>Penyimpanan Data</strong>: Data dan informasi yang
                  dibutuhkan oleh anggota organisasi disimpan di server
                  intranet. Data ini dapat disimpan dalam berbagai format,
                  termasuk database, file teks, dokumen, dll.
                </li>
                <li className="list-decimal list-inside">
                  <strong>Antarmuka pengguna</strong>: Anggota organisasi
                  mengakses intranet melalui komputer, ponsel, dan perangkat
                  lainnya. Mereka menggunakan perangkat lunak browser web untuk
                  mengakses situs intranet dan berinteraksi dengan konten dan
                  aplikasi yang ada.
                </li>
              </ul>
            </div>
            <section className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Reference Video:</h1>
              <div className="grid grid-cols-3 grid-rows-1">
                <iframe
                  className="w-full h-[20vh]"
                  src="https://www.youtube.com/embed/FDb40QoafUM?si=NNM7QKGkOaWITNil"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </section>
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
