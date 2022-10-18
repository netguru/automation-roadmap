import { LearningTrack } from "models";

export interface IRoadmapDAO {
  getLearningTracks(): Promise<LearningTrack[]>;
}
