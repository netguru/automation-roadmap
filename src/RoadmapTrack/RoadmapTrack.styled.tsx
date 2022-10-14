import styled, { css } from "styled-components";
import { mediaQuery } from "styles/responsive";

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;

  ${mediaQuery.desktop} {
    padding: 1.8rem;
    margin: -1.8rem;
    max-height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const TrackTitle = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.7rem;
  color: #b4b4b4;
  margin: 0;
  margin-bottom: 2.3rem;
  display: none;

  ${mediaQuery.tablet} {
    display: block;
  }
  ${mediaQuery.desktop} {
    display: block;
  }
`;

export const StyledDisclosureButton = styled.button<{ open: boolean }>`
  position: relative;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: white;
  box-shadow: ${({ open }) =>
    open
      ? "none"
      : `
    0px 165px 66px rgba(18, 18, 18, 0.01), 0px 93px 56px rgba(18, 18, 18, 0.02),
    0px 41px 41px rgba(18, 18, 18, 0.03), 0px 10px 23px rgba(18, 18, 18, 0.04),
    0px 0px 0px rgba(18, 18, 18, 0.04);
  `};
  border-radius: 8px;
  color: #121212;
  font-weight: 700;
  font-size: 1rem;
  width: 100%;

  ${({ open }) =>
    open &&
    css`
      &::after {
        /* Bottom border with 16 horizontal padding  */
        content: "";
        display: block;
        width: calc(100% - 2.3rem);
        height: 1px;
        background-color: #e5e5e5;
        position: absolute;
        bottom: -1px;
        left: 1.2rem;
      }
    `}
`;

export const Chevron = styled.div<{ open: boolean }>`
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const StyledDisclosurePanel = styled.div`
  width: 100%;
  padding: 0 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;

export const MobileTrack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;
  background-color: #fff;
  border-radius: 8px;
`;

export const StyledTransition = styled.div`
  width: 100%;
  &.enter {
    transition-duration: 100ms;
    transition-timing-function: ease-out;
  }
  &.enterFrom {
    opacity: 0;
    transform: scale(0.95);
  }
  &.enterTo {
    opacity: 1;
    transform: scale(1);
  }
  &.leave {
    transition-duration: 75ms;
    transition-timing-function: ease-out;
  }
  &.leaveFrom {
    opacity: 1;
    transform: scale(1);
  }
  &.leaveTo {
    opacity: 0;
    transform: scale(0.95);
  }
`;
