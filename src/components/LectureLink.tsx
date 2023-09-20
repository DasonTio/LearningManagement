import clsx from "clsx";
import Link from "next/link";

interface LectureLinkProps {
  href: string;
  title: string;
}

export const LectureLink = ({ href, title }: LectureLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx([
        "flex flex-col gap-4 pb-6 border-b-2 hover:border-orange-400 group transition-all ease-in-out duration-150",
      ])}
    >
      <div className="flex items-end gap-3 text-slate-500 ">
        <span className="group-hover:text-orange-500 transition-all ease-in-out duration-150">
          2023.09.20
        </span>
        <span className="px-6 py-1 bg-slate-200 rounded-full font-thin text-sm group-hover:bg-orange-500 group-hover:text-white transition-all ease-in-out duration-200">
          IF130203
        </span>
      </div>
      <div className="group-hover:text-orange-500">{title}</div>
    </Link>
  );
};
