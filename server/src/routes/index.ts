import express from "express";

import project from "./project";

const router = express.Router();

export default (): express.Router => {
  project(router);

  return router;
};
