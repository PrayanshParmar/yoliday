import express from "express";
import { getProjects } from "../controllers/project";

export default (router: express.Router) => {
  //@ts-ignore
  router.get("/api/project", getProjects);
};
