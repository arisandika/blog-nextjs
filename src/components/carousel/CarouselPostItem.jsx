import Image from "next/image";
import Link from "next/link";
import { CarouselMeta } from "./CarouselMeta";

export function CarouselPostItem({ post }) {
  return (
    <figure className="relative overflow-hidden rounded cursor-pointer group">
      <Link href={`/blog/${post.alias}`} scroll={true}>
        <Image
          src={post.thumbnail_url}
          alt="hero image"
          priority
          className="object-cover w-full transition-all duration-300 aspect-[9/9] md:aspect-[9/4] group-hover:scale-[1.02]"
          width={1000}
          height={1000}
        />
      </Link>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18rem] md:w-[32rem] lg:w-[48rem] text-white top-1/2 transition-all duration-300 group-hover:scale-100">
        <div className="flex items-center justify-center h-full">
          <Link href={`/blog/${post.alias}`} scroll={true}>
            <h3 className="text-2xl font-medium text-center text-wrap md:text-[2rem] lg:text-[3rem] leading-[1.2]">
              {post.title}
            </h3>
          </Link>
        </div>
      </div>
      <CarouselMeta post={post} />
    </figure>
  );
}
