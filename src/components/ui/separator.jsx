import Link from "next/link";

const Separator = ({ title, desc, href }) => {
  return (
    <div className="w-full mx-auto mb-8 mt-14 md:mb-10">
      <div className="flex justify-between w-full text-sm">
        <div className="flex items-center pb-2 pr-2 uppercase border-b-[1.5px] border-zinc-400">
          <a href="#" className="inline-block font-semibold">
            {title}
          </a>
        </div>
        <Link href={`${href}`}>{desc}</Link>
      </div>
    </div>
  );
};

export default Separator;
