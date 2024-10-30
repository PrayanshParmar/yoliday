import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";

interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface ComponentProps {
  tabItems: TabItem[];
}

export default function Component({ tabItems }: ComponentProps) {
  return (
    <Tabs defaultValue={tabItems[0].value} className="w-full">
      <TabsList className="justify-start w-full h-12 gap-8 p-0 bg-transparent">
        {tabItems.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="h-full px-0 text-lg font-medium data-[state=active]:text-[#FF4D12] data-[state=active]:border-b-2 data-[state=active]:border-[#FF4D12] data-[state=active]:shadow-none rounded-none"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="w-full h-[1px] bg-border -mt-[1px]" />

      {/* Render content for each tab */}
      {tabItems.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          <div className="py-4">{item.content}</div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
