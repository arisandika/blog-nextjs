"use client";
import Head from 'next/head'; // Import Head from next/head
import Loading from "@/components/ui/loading";
import PostMetaDetail from "./PostMetaDetail";
import PostImageDetail from "./PostImageDetail";
import PostContent from "./PostContent";
import PostBackLink from "./PostBackLink";
import { useFetchPostDetail } from "@/hooks/useFetchPostDetail";

const PostDetail = () => {
  const { post, loading, error } = useFetchPostDetail();

  if (loading) return <Loading height="h-screen" margintop={"-mt-28"} />;
  if (error) return <div>Error fetching post: {error.message}</div>;
  if (!post) return <div>No post data available.</div>;

  // Metadata SEO
  const metaTitle = post.title;

  // Gabungkan array konten menjadi satu string dan ambil deskripsi
  const metaDescription = Array.isArray(post.content)
    ? post.content.join(' ').substring(0, 150) // Menggabungkan array dan memotong string
    : 'Default description for SEO purposes'; // Fallback jika post.content bukan array

  const metaImage = post.content_image_url
    ? post.content_image_url
    : "https://arisandika.my.id/storage/images/ari-figure.png";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
      </Head>
      <div className="md:w-[56rem] mx-auto">
        <section>
          <PostMetaDetail
            category={post.category.name}
            created_at={post.created_at}
            author={post.user.name}
            tag={post.tag.name}
            title={post.title}
          />
        </section>
        <section className="mt-6 mb-8 md:mb-10">
          <PostImageDetail
            contentImageUrl={metaImage}
            title={post.title}
          />
        </section>
        <section>
          <PostContent content={post.content} />
          <PostBackLink />
        </section>
      </div>
    </>
  );
};

export default PostDetail;
