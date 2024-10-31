import ProfileTab from "@/components/custome-ui/custome-tabs";
import CustomeCard from "@/components/layout/card";

export const Portfolio = () => {
  return (
    <CustomeCard title="Portfolio" contentClass="w-full h-full p-0 sm:p-6">
      <ProfileTab />
    </CustomeCard>
  );
};
