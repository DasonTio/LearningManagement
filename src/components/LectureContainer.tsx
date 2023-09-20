import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
type LectureContainerProps = {
  children: ReactNode;
};

const LectureContainer: React.FC<LectureContainerProps> = ({ children }) => {
  return (
    <main className="h-screen flex flex-col items-center">
      <nav className="w-full h-[12vh]  px-8 py-2 shadow-md">
        <Link href={"/lecture"}>
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={80}
            className="md:w-[200px] "
          ></Image>
        </Link>
      </nav>
      <section className="w-[70vw] py-8">{children}</section>
    </main>
  );
};

export default LectureContainer;
