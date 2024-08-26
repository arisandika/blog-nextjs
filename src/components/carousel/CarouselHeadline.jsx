"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useFetchFeaturedPosts } from "@/hooks/useFetchFeaturedPosts";
import { CarouselPostItem } from "./CarouselPostItem";
import { Skeleton } from "../ui/skeleton";

export function CarouselHeadline() {
  const posts = useFetchFeaturedPosts();

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  if (!posts)
    return (
      <>
        <div className="flex flex-col space-y-3">
          <Skeleton className="w-full aspect-[9/8.4] md:aspect-[9/3.9]" />
        </div>
      </>
    );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mx-auto mt-2 lg:mt-4"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {posts &&
          posts.data.map((post) => (
            <CarouselItem key={post.id}>
              <CarouselPostItem post={post} />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
