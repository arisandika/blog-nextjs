"use client";
import PostImage from "./PostImage";
import PostContent from "./PostContent";
import PostMeta from "./PostMeta";
import Loading from "@/components/ui/loading";
import { cx } from "@/utils/all";
import { useFetchAllPosts } from "@/hooks/useFetchAllPosts";
import { Skeleton } from "@/components/ui/skeleton";
import CardSkeleton from "@/components/ui/card-skeleton";

const PostCard = ({ minimal, preloadImage, fontSize, fontWeight }) => {
  const posts = useFetchAllPosts();

  if (!posts) return <CardSkeleton />;

  return (
    <div className="grid gap-6 md:gap-10 md:grid-cols-2">
      {posts &&
        posts.data.map((post) => (
          <div
            key={post.id}
            className={cx("group", minimal && "grid gap-10 md:grid-cols-2")}
          >
            <PostImage
              alias={post.alias}
              thumbnail_url={
                post.thumbnail_url !== '' && post.thumbnail_url !== null
                  ? post.thumbnail_url
                  : "https://maag.codesupply.co/lifestyle/wp-content/uploads/sites/2/2024/08/demo-image-0061-1536x864.webp"
              }
              preloadImage={preloadImage}
            />
            <div className={cx(minimal && "flex items-center")}>
              <div>
                <PostContent
                  alias={post.alias}
                  category={post.category}
                  title={post.title}
                  fontSize={fontSize}
                  fontWeight={fontWeight}
                  minimal={minimal}
                />
                <PostMeta
                  tag={post.tag.name}
                  created_at={post.created_at}
                  author={post.user.name}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostCard;
