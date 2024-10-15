import Link from "next/link";

const PostBackLink = () => {
  return (
    <div className="flex justify-center my-8">
      <Link
        href="/"
        className="px-5 py-2 text-sm rounded-full text-zinc-400 bg-brand-secondary/20"
      >
        ← View all posts
      </Link>
    </div>
  );
};

export default PostBackLink;
