import Link from "next/link";
import Image from "next/image";
import { cx } from "@/utils/all";

const PostImage = ({ alias, thumbnail_url, preloadImage }) => {
  return (
    <div className={cx("overflow-hidden bg-gray-100 rounded")}>
      <Link
        href={`/blog/${alias}`} scroll={true}
        className={cx("relative block aspect-video")}
      >
        <Image
          src={thumbnail_url}
          alt="Thumbnail"
          priority
          className="object-cover transition-all duration-300 hover:scale-[1.02]"
          fill
          sizes="(max-width: 768px) 30vw, 33vw"
        />
        {/* <video width="auto" autoPlay loop muted preload="true">
          <source src="https://resources.247studio.co/247/www/HAPE.mp4" type="video/mp4" />
        </video> */}
      </Link>
    </div>
  );
};

export default PostImage;
