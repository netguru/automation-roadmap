import { POPOVER_MAX_HEIGHT, POPOVER_PADDING } from "molecules/Popover/Popover.styled";
import styled from "styled-components";
import { colorsPalette } from "styles";

export const LessonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(${POPOVER_MAX_HEIGHT} - calc(${POPOVER_PADDING} * 2));
  overflow-y: auto;
  gap: 1.4rem;
  color: ${colorsPalette.gray[500]};
`;
