import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { MessageCircle } from "lucide-react";

const PostMeta = ({ created_at, author, tag }) => {
  return (
    <>
      <div className="flex items-center w-full gap-2 py-4 text-xs font-light cursor-auto text-wrap">
        <p className="px-2 py-1 text-white capitalize rounded bg-zinc-800">
          {tag}
        </p>
        <p className="text-zinc-400">
          {format(parseISO(created_at), "MMMM dd, yyyy")} by
          <span className="mx-2 text-white capitalize">{author}</span>
        </p>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <p>3</p>
        </div>
      </div>
    </>
  );
};

export default PostMeta;
