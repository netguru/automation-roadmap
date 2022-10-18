import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import { LessonSection } from "models";
import { LessonContainer } from "./RoadmapLesson.styled";
import Button from "atoms/Button/Button";

interface RoadmapLessonProps {
  sections: LessonSection[];
}
const RoadmapLesson: React.FC<RoadmapLessonProps> = ({ sections }) => {
  return (
    <LessonContainer>
      {sections.map((section, i) => (
        <Fragment key={i}>
          {section.description && <ReactMarkdown children={section.description} />}
          <a href={section.url} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">{section.urlLabel}</Button>
          </a>
        </Fragment>
      ))}
    </LessonContainer>
  );
};

export default RoadmapLesson;
