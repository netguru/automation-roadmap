import { LearningTrack, Topic, Lesson } from "models";
import { IRoadmapDAO } from "./types";
import data from "../roadmapData.json";

type TypedJSONData = Record<
  string,
  Array<
    Record<
      string,
      Array<{
        name: string;
        optional?: boolean;
        data: Array<{ description: string; url: string; urlLabel: string }>;
        ngOnly?: boolean;
        wip?: boolean;
      }>
    >
  >
>;

class JsonRoadmapDAO implements IRoadmapDAO {
  private readonly learningTracks: LearningTrack[];

  constructor() {
    const typedData = data as unknown as TypedJSONData;

    const tracks = Object.keys(typedData).map((dataLearningTrack) => {
      const track: LearningTrack = {
        id: dataLearningTrack,
        name: dataLearningTrack,
        topics: typedData[dataLearningTrack].map((wrapperObj, i) => {
          const dataTopic = Object.keys(wrapperObj)[0];
          const topic: Topic = {
            id: dataTopic,
            name: dataTopic,
            lessons: typedData[dataLearningTrack][i][dataTopic].map((dataLesson) => {
              const lesson: Lesson = {
                id: dataLesson.name,
                title: dataLesson.name,
                data: dataLesson.data,
                optional: dataLesson.optional,
                ngOnly: dataLesson.ngOnly,
                wip: dataLesson.wip,
              };
              return lesson;
            }),
          };
          return topic;
        }),
      };
      return track;
    });
    this.learningTracks = tracks;
  }

  public async getLearningTracks(): Promise<LearningTrack[]> {
    return this.learningTracks;
  }
}

export default JsonRoadmapDAO;
