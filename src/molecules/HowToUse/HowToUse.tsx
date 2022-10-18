import React from "react";
import Tag from "atoms/Tag/Tag";
import { HowToUseContainer, InstructionsParagraph, PrimaryEmphasis } from "./HowToUse.styled";

const HowToUse = () => {
  return (
    <HowToUseContainer>
      <InstructionsParagraph>
        Welcome to automation roadmap where you can plan your development in software test
        automation related sills. You'll find here useful links and paths which will help you to
        discover which skill to learn next. Skills are sorted into three levels:
      </InstructionsParagraph>

      <InstructionsParagraph>
        <Tag color="beginner" content="beginner" />,{" "}
        <Tag color="intermediate" content="intermediate" /> and{" "}
        <Tag color="expert" content="expert" /> (currently under "construction"). Each skill can be
        expanded by clicking on it: popup with short introduction and links will appear.
      </InstructionsParagraph>

      <InstructionsParagraph>
        Items without colors filled are{" "}
        <Tag color="beginner" variant="secondary" content="optional" /> skills, which are considered
        nice to have but not mandatory to learn. Some of the links are available for Netguru only -
        it means they are not available to public audience - apply to us if you want to see them! 😅
      </InstructionsParagraph>
      <InstructionsParagraph>
        Made in <PrimaryEmphasis>Netguru</PrimaryEmphasis> with love ♥️
      </InstructionsParagraph>
    </HowToUseContainer>
  );
};

export default HowToUse;
