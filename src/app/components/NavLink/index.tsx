import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  rotate: string;
  title: string;
  url: string;
}

export default function NavLink({ title, url, rotate }: NavLinkProps) {
  return (
    <Link
      href={url}
      className={`flex items-center gap-3 hover:scale-125 transition-all ease-out  ${rotate}`}
    >
      <Image
        src="/arrow.svg"
        width={24}
        height={24}
        alt="Arrow Icon"
        className="translate-y-[4px]"
      />
      <span className="font-display font-bold text-4xl">{title}</span>
    </Link>
  );
}
