import Link from "next/link";
import Image from "next/image";
import { cx } from "@/utils/all";
import { format, parseISO } from "date-fns";
import { MessageCircle } from "lucide-react";

const PostMetaDetail = ({ category, title, created_at, author, tag }) => {
  return (
    <>
      <div className="flex justify-center">
        <span
          className={cx(
            "inline-block text-xs font-medium tracking-wider uppercase text-zinc-400"
          )}
        >
          {category.name}
        </span>
      </div>
      <h1 className="mx-auto my-5 text-3xl font-normal text-center md:max-w-2xl md:text-4xl text-brand-primary">
        {title}
      </h1>
      <div className="flex justify-center">
        <div className="flex items-center gap-2 py-4 text-xs font-light cursor-auto text-wrap">
          <p className="px-2 py-1 text-white capitalize rounded bg-zinc-800">
            {tag}
          </p>
          <p className="text-zinc-400">
            {format(parseISO(created_at), "MMMM dd, yyyy")} by
            <span className="mx-2 text-white capitalize">
              {author.length > 11 ? `${author.slice(0, 11)}...` : author}
            </span>
          </p>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <p>3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostMetaDetail;
