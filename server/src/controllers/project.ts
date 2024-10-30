import express from "express";
import { projectData } from "../data/project";

export const getProjects = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    return res.status(200).json(projectData);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "No data found" });
  }
};
