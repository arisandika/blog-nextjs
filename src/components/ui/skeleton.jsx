import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("animate-pulse rounded bg-zinc-800", className)}
      {...props} />)
  );
}

export { Skeleton }
