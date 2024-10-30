import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cart from "@/assets/cart.svg";
import bell from "@/assets/bell.svg";

interface CustomeCardProps {
  title: string;
  children: React.ReactNode;
  contentClass?: string;
}
const CustomeCard = ({ title, children, contentClass }: CustomeCardProps) => {
  return (
    <Card className="w-full h-full bg-white rounded-none sm:rounded-[15px]">
      <CardHeader className="flex-row items-center justify-between pb-0 ">
        <CardTitle className="text-lg font-medium sm:text-[22px] sm:leading-[25px] sm:font-semibold ">
          {title}
        </CardTitle>
        <div className="flex items-center gap-5 sm:hidden">
          {/* <div className="flex" ></div> */}
          <img src={cart} className="hover:cursor-pointer" />
          <img src={bell} className="hover:cursor-pointer" />
        </div>
      </CardHeader>
      <CardContent className={contentClass}>{children}</CardContent>
    </Card>
  );
};

export default CustomeCard;
