import { format, parseISO } from "date-fns";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function CarouselMeta({ post }) {
  return (
    <div className="absolute bottom-0 w-full text-white transition-all duration-300 transform -translate-x-1/2 left-1/2 group-hover:scale-100">
      <div className="flex items-center justify-center w-full gap-2 py-4 text-xs font-light text-center border-t border-zinc-600 text-wrap">
        <p className="px-2 py-1 capitalize bg-white rounded text-zinc-800">
          {post.tag.name}
        </p>
        <p className="text-zinc-400">
          {format(parseISO(post.created_at), "MMMM dd, yyyy")} by
          <span className="mx-2 text-white capitalize">{post.user.name}</span>
        </p>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <p>3</p>
        </div>
      </div>
    </div>
  );
}
