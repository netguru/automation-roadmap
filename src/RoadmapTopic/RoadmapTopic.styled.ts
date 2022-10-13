import { Card } from "atoms/Card/Card.styled";
import styled from "styled-components";
import { mediaQuery } from "styles/responsive";

export const RoadmapTopicContainer = styled(Card)<{ isWIP?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  width: 100%;
  & button {
    width: 100%;
  }
  ${mediaQuery.tablet} {
    width: 311px;
  }
  ${mediaQuery.desktop} {
    width: 311px;
  }
`;

export const RoadmapTopicTitle = styled.h3`
  font-weight: 700;
  font-size: 0.9rem;
  color: #121212;
  margin-bottom: 16px;
`;
