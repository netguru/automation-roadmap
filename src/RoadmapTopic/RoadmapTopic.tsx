import React from "react";
import { Lesson } from "models";
import { RoadmapTopicContainer, RoadmapTopicTitle, TopicButton } from "./RoadmapTopic.styled";
import { AppColors, Colors } from "styles/types";
import { capitalizeFirstLetter } from "utils";
import Popover from "molecules/Popover/Popover";
import RoadmapLesson from "RoadmapLesson/RoadmapLesson";

interface RoadmapTopicProps {
  name: string;
  trackName?: string;
  lessons: Lesson[];
}
const RoadmapTopic: React.FC<RoadmapTopicProps> = ({ name, lessons, trackName }) => {
  return (
    <RoadmapTopicContainer>
      <RoadmapTopicTitle>{capitalizeFirstLetter(name)}</RoadmapTopicTitle>
      {lessons.map((lesson, i) =>
        lesson.wip ? (
          <TopicButton
            key={lesson.id + i}
            variant={lesson.optional ? "secondary" : "primary"}
            color={
              trackName && AppColors.includes(trackName as Colors)
                ? (trackName as Colors)
                : "primary"
            }
            disabled
          >
            Work In Progress 🚧
          </TopicButton>
        ) : (
          <Popover
            key={lesson.id + i}
            triggercolor={
              trackName && AppColors.includes(trackName as Colors)
                ? (trackName as Colors)
                : "primary"
            }
            triggerText={lesson.title}
            triggerVariant={lesson.optional ? "secondary" : "primary"}
            headerText={lesson.ngOnly ? "Netguru only" : undefined}
          >
            <RoadmapLesson sections={lesson.data} />
          </Popover>
        )
      )}
    </RoadmapTopicContainer>
  );
};

export default RoadmapTopic;
