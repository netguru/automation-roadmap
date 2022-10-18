export interface LessonSection {
  description: string;
  url: string;
  urlLabel: string;
}
export interface Lesson {
  id: string;
  title: string;
  optional?: boolean;
  data: LessonSection[];
  ngOnly?: boolean;
  wip?: boolean;
}

export interface Topic {
  id: string;
  name: string;
  lessons: Lesson[];
}

export interface LearningTrack {
  id: string;
  name: string;
  topics: Topic[];
}
