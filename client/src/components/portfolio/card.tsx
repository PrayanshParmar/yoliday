import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";

interface PortfolioCardInterface {
  title: string;
  description: string;
  sub1: string;
  sub2: string;
  image_url: string;
}
const PortfolioCard = ({
  title,
  description,
  sub1,
  sub2,
  image_url,
}: PortfolioCardInterface) => {
  return (
    <Card className="max-w-[811px] w-full h-[110px] sm:h-[161px] bg-white rounded-[15px] shadow-md">
      <div className="flex w-full h-full">
        <div className="w-[110px] sm:w-[253px] h-full flex-shrink-0">
          <img
            src={`${import.meta.env.VITE_SERVER_URL}${image_url}`}
            className="w-full h-full object-cover rounded-l-[15px]" // Ensures image covers and fits within the specified height
          />
        </div>
        <div className="flex flex-col justify-between flex-grow p-4 sm:p-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium sm:text-lg line-clamp-1">
              {title}
            </h3>
            <div className="hidden sm:block">
              <span className="font-medium text-sm text-[#9E95A2] line-clamp-2">
                {description}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[2px]">
              <span className="text-[10px] sm:text-xs font-normal">{sub1}</span>
              <span className="text-[10px] sm:text-xs font-normal text-[#9E95A2]">
                {sub2}
              </span>
            </div>
            <Button variant="custome">
              <span className="hidden sm:inline">Add to Cart</span>
              <span className="inline sm:hidden">A</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioCard;
