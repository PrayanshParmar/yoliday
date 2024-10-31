import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ProjectCardSkeleton = () => {
  return (
    <Card className="max-w-[811px] w-full h-[110px] sm:h-[161px] bg-white rounded-[15px] shadow-md">
      <div className="flex w-full h-full">
        {/* Skeleton for the image area */}
        <Skeleton className="w-[110px] sm:w-[253px] h-full rounded-l-[15px] flex-shrink-0" />

        <div className="flex flex-col justify-between flex-grow p-4 sm:p-5">
          <div className="flex flex-col gap-1">
            {/* Skeleton for the title */}
            <Skeleton className="w-3/4 h-4 rounded sm:h-6" />

            {/* Skeleton for the description */}
            <div className="hidden sm:block">
              <Skeleton className="w-full h-4 mt-1 rounded" />
              <Skeleton className="w-5/6 h-4 mt-1 rounded" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[2px]">
              {/* Skeletons for sub1 and sub2 */}
              <Skeleton className="w-20 h-3 rounded sm:h-4" />
              <Skeleton className="w-16 h-3 mt-1 rounded sm:h-4" />
            </div>

            {/* Skeleton for the button */}
            <Skeleton className="w-16 h-8 rounded sm:w-24" />
          </div>
        </div>
      </div>
    </Card>
  );
};
