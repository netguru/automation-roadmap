import Button from "atoms/Button/Button";
import { Card } from "atoms/Card/Card.styled";
import styled from "styled-components";
import { colorsPalette } from "styles";
import { mediaQuery } from "styles/responsive";

export const RoadmapTopicContainer = styled(Card)<{ isWIP?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.2rem;
  width: 100%;
  ${mediaQuery.tablet} {
    width: 311px;
  }
  ${mediaQuery.desktop} {
    width: 22.21rem;
  }

  & > div > button {
    width: 100%;
  }
`;

export const RoadmapTopicTitle = styled.h3`
  font-weight: 700;
  font-size: 0.9rem;
  color: ${colorsPalette.gray[700]};
  margin-bottom: 1.2rem;
  text-align: center;
`;

export const TopicButton = styled(Button)`
  width: 100%;
`;
