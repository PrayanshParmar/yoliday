import PortfolioCard from "../portfolio/card";
import { fetchProjectData } from "@/lib/server-query";
import { getProjectInterface, MyError } from "@/lib/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ProjectCardSkeleton } from "../skeleton/skeleton-project-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Component() {
  const {
    data: projectData,
    isLoading,
    isError,
  }: UseQueryResult<getProjectInterface[], MyError> = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjectData,
    staleTime: Infinity,
  });

  const tabItems = [
    {
      value: "project",
      label: "Project",
      content: (
        <div className="flex flex-col w-full h-full gap-5">
          {projectData?.map((project, key) => (
            <PortfolioCard
              key={key} // Assuming 'id' is a unique identifier for each project
              title={project.title}
              description={project.description}
              sub1={project.sub1}
              sub2={project.sub2}
              image_url={project.image_url}
            />
          ))}
        </div>
      ),
    },
    {
      value: "saved",
      label: "Saved",
      content: <div>Saved Content</div>, // Placeholder for other tabs
    },
    {
      value: "shared",
      label: "Shared",
      content: <div>Shared Content</div>, // Placeholder for other tabs
    },
    {
      value: "achievement",
      label: "Achievement",
      content: <div>Achievement Content</div>, // Placeholder for other tabs
    },
  ];

  return (
    <>
      {isError && (
        <div className="w-full h-full py-4 mt-2 max-sm:px-2 ">
          Someting went wrong
        </div>
      )}
      <Tabs defaultValue={tabItems[0].value} className="w-full">
        <TabsList className="justify-start w-full h-12 gap-8 p-0 text-black bg-transparent">
          {tabItems.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="h-full px-0 text-sm font-normal data-[state=active]:text-[#FF4D12] data-[state=active]:border-b-2 data-[state=active]:border-[#FF4D12] data-[state=active]:shadow-none rounded-none"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full h-[1px] bg-border -mt-[1px]" />

        {/* Render content for each tab */}
        {isLoading ? (
          <div className="w-full h-full py-4 mt-2 max-sm:px-2 ">
            <div className="flex flex-col w-full h-full gap-5">
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </div>
          </div>
        ) : (
          tabItems.map((item) => (
            <TabsContent key={item.value} value={item.value}>
              <div className="w-full h-full py-4 max-sm:px-2">
                {item.content}
              </div>
            </TabsContent>
          ))
        )}
      </Tabs>
    </>
  );
}
