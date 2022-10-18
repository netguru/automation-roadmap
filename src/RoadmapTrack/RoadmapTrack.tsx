import React from "react";
import { Topic } from "models";
import {
  Chevron,
  MobileTrack,
  StyledDisclosureButton,
  StyledDisclosurePanel,
  StyledTransition,
  TrackContainer,
  TrackTitle,
} from "./RoadmapTrack.styled";
import RoadmapTopic from "RoadmapTopic/RoadmapTopic";
import { capitalizeFirstLetter } from "utils";
import useBreakpoint from "hooks/useBreakpoint";
import { Disclosure, Transition } from "@headlessui/react";

import { ReactComponent as ChevronIcon } from "assets/chevron.svg";

interface RoadmapTrackProps {
  name: string;
  topics: Topic[];
}
const RoadmapTrack: React.FC<RoadmapTrackProps> = ({ name, topics }) => {
  const breakpoint = useBreakpoint();
  return breakpoint === "mobile" ? (
    <Disclosure as={MobileTrack}>
      {({ open }) => (
        <>
          <Disclosure.Button as={StyledDisclosureButton} open={open}>
            <span>{capitalizeFirstLetter(name)}</span>
            <Chevron open={open}>
              <ChevronIcon />
            </Chevron>
          </Disclosure.Button>
          <Transition
            as={StyledTransition}
            enter="enter"
            enterFrom="enterFrom"
            enterTo="enterTo"
            leave="leave"
            leaveFrom="leaveFrom"
            leaveTo="leaveTo"
          >
            <Disclosure.Panel as={StyledDisclosurePanel}>
              {topics.map((topic, i) => (
                <RoadmapTopic
                  name={topic.name}
                  lessons={topic.lessons}
                  trackName={name}
                  key={topic.id + i}
                />
              ))}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  ) : (
    <TrackContainer>
      <TrackTitle>{capitalizeFirstLetter(name)}</TrackTitle>
      {topics.map((topic, i) => (
        <RoadmapTopic
          name={topic.name}
          lessons={topic.lessons}
          key={topic.id + i}
          trackName={name}
        />
      ))}
    </TrackContainer>
  );
};

export default RoadmapTrack;
