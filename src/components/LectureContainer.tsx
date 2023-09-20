import { ReactNode } from "react";
type LectureContainerProps = {
  children: ReactNode;
};

const LectureContainer: React.FC<LectureContainerProps> = ({ children }) => {
  return (
    <main className="h-screen flex flex-col items-center ">
      <nav className="w-full h-[12vh] p-8 shadow-md"></nav>
      <section className="w-[70vw] py-8">{children}</section>
    </main>
  );
};

export default LectureContainer;
