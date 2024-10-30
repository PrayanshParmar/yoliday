import { getProjectInterface } from "../types";

export async function fetchProjectData() {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/project`
  );
  if (!response.ok) {
    const errorData = await response.json();

    const error: any = new Error("An Error occurred while fetching project");
    error.code = response.status;
    error.info = errorData;

    throw error;
  }
  const data: getProjectInterface[] = await response.json();

  return data;
}
