"use client";
import { usePathname } from "next/navigation";
import PostDetail from "./PostDetail";
import { useEffect } from "react";

const PostPage = () => {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return <PostDetail />;
};

export default PostPage;
