import styled from "styled-components";
import { colorsPalette } from "styles";

export const POPOVER_PADDING = "1.2rem";
export const POPOVER_MAX_HEIGHT = "50vh";
export const POPOVER_HEADER_HEIGHT = "3.4rem";

export const PopoverContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 33px 6px rgba(66, 68, 90, 0.35);
  border-radius: 8px;
  width: fit-content;
  max-width: 350px;

  #arrow,
  #arrow::before {
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    background: inherit;
    z-index: -1;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
    background-color: inherit;
  }

  &[data-popper-placement^="top"] > #arrow {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > #arrow {
    top: -4px;
  }

  &[data-popper-placement^="left"] > #arrow {
    right: -4px;
  }

  &[data-popper-placement^="right"] > #arrow {
    left: -4px;
  }
`;

export const Header = styled.div`
  padding: ${POPOVER_PADDING};
  border-radius: 8px 8px 0 0;
  background-color: ${colorsPalette.primary[500]};
  width: 100%;
  height: ${POPOVER_HEADER_HEIGHT};
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  color: #ffffff;
`;

export const PopoverContent = styled.div`
  padding: ${POPOVER_PADDING};
  max-height: ${POPOVER_MAX_HEIGHT};
  overflow-y: hidden;
`;
