"use client";
import PostCard from "@/components/card/post/PostCard";
import Headline from "@/components/headline/Headline";
import Separator from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="w-full">
      <Headline />
      <Separator title="Recent Posts" desc="View all posts" href={"/blog"} />
      <PostCard />
    </div>
  );
};

export default Home;
