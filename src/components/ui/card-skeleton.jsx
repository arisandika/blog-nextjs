import Loading from "./loading";
import { Skeleton } from "./skeleton";

const CardSkeleton = () => {
  return (
    <>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <Skeleton className="w-full aspect-video" />
          <Skeleton className="h-4 w-[160px]" />
          <Skeleton className="h-4 w-[320px]" />
          <Skeleton className="h-4 w-[260px]" />
        </div>
        <div className="flex flex-col space-y-4">
          <Skeleton className="w-full aspect-video" />
          <Skeleton className="h-4 w-[160px]" />
          <Skeleton className="h-4 w-[320px]" />
          <Skeleton className="h-4 w-[260px]" />
        </div>
      </div>
      <Loading height="h-40" />
    </>
  );
};

export default CardSkeleton;
