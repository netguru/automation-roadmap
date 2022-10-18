import JsonRoadmapDAO from "./jsonDAO";
import { IRoadmapDAO } from "./types";

export const roadmapService: IRoadmapDAO = new JsonRoadmapDAO();
