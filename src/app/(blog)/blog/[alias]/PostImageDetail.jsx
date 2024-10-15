import Image from "next/image";

const PostImageDetail = ({ contentImageUrl, title }) => {
  return (
    <div className="overflow-hidden">
      <Image
        src={contentImageUrl}
        alt={title}
        loading="eager"
        sizes="100vw"
        className="object-cover w-[56rem] aspect-auto"
        width={500}
        height={500}
      />
    </div>
  );
};

export default PostImageDetail;
