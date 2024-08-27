"use client";
import Loading from "@/components/ui/loading";
import PostMetaDetail from "./PostMetaDetail";
import PostImageDetail from "./PostImageDetail";
import PostContent from "./PostContentDetail";
import PostBackLink from "./PostBackLink";
import { useFetchPostDetail } from "@/hooks/useFetchPostDetail";

const PostDetail = () => {
  const { post, loading, error } = useFetchPostDetail();

  if (loading) return <Loading height="h-screen" margintop={"-mt-28"} />;
  if (error) return <div>Error fetching post: {error.message}</div>;
  if (!post) return <div>No post data available.</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <section>
        <PostMetaDetail
          category={post.category.name}
          created_at={post.created_at}
          author={post.user.name}
          tag={post.tag.name}
          title={post.title}
        />
      </section>
      <section className="mt-6 mb-6 md:mb-10">
        <PostImageDetail
          contentImageUrl={
            post.content_image_url
              ? post.content_image_url
              : "https://maag.codesupply.co/lifestyle/wp-content/uploads/sites/2/2024/08/demo-image-0061-1536x864.webp"
          }
          title={post.title}
        />
      </section>
      <section>
        <PostContent content={post.content} />
        <PostBackLink />
      </section>
    </div>
  );
};

export default PostDetail;
