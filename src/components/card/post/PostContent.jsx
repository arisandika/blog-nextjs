import Link from "next/link";
import { cx } from "@/utils/all";

const PostContent = ({
  alias,
  category,
  title,
}) => {
  return (
    <>
      <Link href={`/category/${category.name}`}
        className={cx(
          "inline-block text-xs font-medium tracking-wider uppercase mt-5 text-zinc-400 cursor-pointer"
        )}
      >
        {category.name}
      </Link>
      <h2 className="mt-2 text-base font-medium text-white cursor-pointer line-clamp-2">
        <Link href={`/blog/${alias}`}>
          <span
            className="bg-gradient-to-r from-gray-700 to-gray-600 bg-[length:0px_10px] bg-left-bottom
        bg-no-repeat
        transition-[background-size]
        duration-500
        hover:bg-[length:100%_3px]
        group-hover:bg-[length:100%_10px]"
          >
            {title}
          </span>
        </Link>
      </h2>
    </>
  );
};

export default PostContent;
