import ProfileTab from "@/components/custome-ui/custome-tabs";
import CustomeCard from "@/components/layout/card";
import PortfolioCard from "@/components/portfolio/card";
import { fetchProjectData } from "@/lib/server-query";
import { getProjectInterface, MyError } from "@/lib/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const Portfolio = () => {
  // Fetch project data with React Query
  const {
    data: projectData,
    isLoading,
    isError,
    error,
  }: UseQueryResult<getProjectInterface[], MyError> = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjectData,
    staleTime: Infinity,
  });

  // Log project data for debugging
  console.log(projectData);

  // Loading state
  if (isLoading) {
    return (
      <CustomeCard title="Profile">
        <div className="flex items-center justify-center h-full">
          <span className="text-lg">Loading...</span>
        </div>
      </CustomeCard>
    );
  }

  // Error state
  if (isError) {
    return (
      <CustomeCard title="Profile">
        <div className="flex items-center justify-center h-full">
          <span className="text-lg text-red-500">
            {(error as MyError).message || "An error occurred"}
          </span>
        </div>
      </CustomeCard>
    );
  }

  // Define tab data with projectData passed to the "Project" tab content
  const tabData = [
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
    <CustomeCard title="Portfolio" contentClass="p-0 sm:p-6">
      <ProfileTab tabItems={tabData} />
    </CustomeCard>
  );
};
