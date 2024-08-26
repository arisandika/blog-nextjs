import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("animate-pulse rounded bg-zinc-900", className)}
      {...props} />)
  );
}

export { Skeleton }
