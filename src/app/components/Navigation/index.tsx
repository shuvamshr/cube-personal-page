import NavLink from "../NavLink";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="h-screen w-full">
      <div className="flex justify-between items-center h-screen">
        <NavLink
          title="about"
          url="https://www.awwwards.com/inspiration/vladimir-gruev-portfolio"
          rotate="-rotate-90"
        />
        <div className="flex flex-col justify-between items-center h-screen py-8">
          <NavLink
            title="contact"
            url="https://www.linkedin.com/in/shuvamshr/"
            rotate=""
          />
          <div className="flex gap-28">
            <Link
              href={"https://github.com/shuvamshr"}
              target="_blank"
              className="font-normal font-medium text-2xl text-[#0f1b61] hover:tracking-widest hover:font-semibold transition-all ease-out"
            >
              Gh
            </Link>
            <Link
              href={"https://www.linkedin.com/in/shuvamshr/"}
              target="_blank"
              className="font-normal font-medium  text-2xl text-[#0f1b61]  hover:tracking-widest hover:font-semibold transition-all ease-out"
            >
              In
            </Link>
            <Link
              href={"https://github.com/shuvamshr/cube-personal-page"}
              target="_blank"
              className="font-normal font-medium  text-2xl text-[#0f1b61]  hover:tracking-widest hover:font-semibold transition-all ease-out"
            >
              Repo
            </Link>
            <Link
              href={"https://oliver-sinclair.vercel.app/"}
              target="_blank"
              className="font-normal font-medium  text-2xl text-[#0f1b61]  hover:tracking-widest hover:font-semibold transition-all ease-out"
            >
              Os
            </Link>
          </div>
        </div>
        <NavLink
          title="works"
          url="https://oliver-sinclair.vercel.app/"
          rotate="rotate-90"
        />
      </div>
    </div>
  );
}
