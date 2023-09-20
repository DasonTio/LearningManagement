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
    title: "Ekstranet",
    link: `${process.env.NEXT_PUBLIC_API}/lectures/ekstranet`,
  });
  return (
    <>
      <LectureContainer>
        <section className="flex flex-col gap-8 mb-24">
          <div>
            <h1>Ekstranet</h1>
            <p className="text-gray-400">2023.09.21 by Group</p>
          </div>
          {/* Intranet */}
          {/* <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(
              "https://files.smallpdf.com/files/009f3e5f66d72f1948d6c68c62c56409.pdf?name=ilovepdf_merged.pdf"
            )}&embedded=true`}
            className="w-full h-[60vh]"
          ></iframe> */}
          {/* <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(
              "https://d17lvj5xn8sco6.cloudfront.net/95/F9/75/0D/DB/A6/AA/92/45/71/B1/43/17/17/07/06/0031D245/common/downloads/publication.pdf?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kMTdsdmo1eG44c2NvNi5jbG91ZGZyb250Lm5ldC85NS9GOS83NS8wRC9EQi9BNi9BQS85Mi80NS83MS9CMS80My8xNy8xNy8wNy8wNi8wMDMxRDI0NS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjk1MjQ0OTY3fX19XX0_&Signature=fc9ApTjn3dVkzoqY0wvzuILwi~xlTSgysADjWGTg1nvAsPb-gV-xOBd~t5GsQu~QIY7S0iNsiOvBxyGcgYA9qpOqIAfRU-pml6oXXRiGvOqVN6FdpKMFRC5dUb~Jh5I0gyPAAFSjKqPNpLzSmuqjVZvlHi5Tx6h-ykztwquveKI_&Key-Pair-Id=APKAJHHI2UARJWNSOBCQ&uni=4.6.114-fix2-R10296"
            )}&embedded=true`}
            className="w-full h-[60vh]"
          ></iframe> */}

          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">APA ITU EKSTRANET?</h1>
              <p className="text-lg">
                Ekstranet merupakan jaringan yang menghubungkan banyak
                organisasi maupun perusahaan dengan cara yang hampir sama
                seperti intranet, namun dengan adanya perbedaan dimana ekstranet
                memungkinkan akses terbatas terhadap pihak luar seperti mitra
                bisnis, pemasok dan lain sebagainya. Ekstranet sendiri dapat
                disimpulkan bahwa dia merupakan penggabungan antara internet dan
                intranet serta entitas bisnis.
              </p>
              <div className="flex flex-col gap-5">
                <h1 className="text-3xl font-bold">CIRI KHAS EKSTRANET</h1>
                <p className="text-lg">
                  Karena kita sudah mengetahui pengertian serta bagaimana asal
                  dari ekstranet, maka sekarang kita akan melihat ke dalam ciri
                  khas dan fungsi utama dari ekstranet.
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="list-decimal list-inside">
                    <strong>Akses Terbatas</strong> : Diperlukannya otentikasi
                    saat ingin masuk ke dalam jaringan ekstranet yang otentikasi
                    atau izinnya itu sendiri dapat diberikan secara individual
                    atau kelompok tertentu.
                  </li>
                  <li className="list-decimal list-inside">
                    <strong>Kolaborasi Bisnis</strong> : Seringnya penggunaan
                    dalam pertukaran informasi atnara organisasi dan pihak luar
                    negri seperti mitra bisnis, pemasok atau pelanggan yang
                    biasanya mencangkup berbagai data pesanan, informasi
                    pelanggan dan lain sebaginya.
                  </li>
                </ul>
              </div>
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
