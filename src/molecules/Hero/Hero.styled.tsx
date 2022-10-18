import { StyledButton } from "atoms/Button/Button.styled";
import { HowToUseContainer } from "molecules/HowToUse/HowToUse.styled";
import styled from "styled-components";
import { colorsPalette } from "styles";
import { mediaQuery } from "styles/responsive";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  align-content: center;
  text-align: center;

  & ${HowToUseContainer} {
    display: none;

    ${mediaQuery.desktop} {
      display: block;
    }
  }

  & ${StyledButton} {
    margin-top: 1.7rem;
    ${mediaQuery.tablet} {
      margin-right: auto;
    }
    ${mediaQuery.desktop} {
      display: none;
    }
  }

  ${mediaQuery.tablet} {
    height: 16.9rem;
    margin-right: auto;
    flex-wrap: wrap;
  }
  ${mediaQuery.desktop} {
    justify-content: flex-start;
    min-width: 22.2rem;
    max-width: 24.6rem;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  margin: 0 0 1rem 0;
  color: ${colorsPalette.gray[500]};
  ${mediaQuery.tablet} {
    margin-right: auto;
  }
`;

export const Legend = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${colorsPalette.gray[500]};
  margin: 0;
  ${mediaQuery.tablet} {
    margin-right: auto;
  }
`;

export const IllustrationWrapper = styled.div`
  margin-bottom: 2.3rem;
  max-height: fit-content;
  ${mediaQuery.tablet} {
    flex-basis: 100%;
    margin: 0;
    margin-right: 1.4rem;
  }
`;
export const StyledTransition = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  &.enter {
    transition-duration: 100ms;
    transition-timing-function: ease-out;
  }
  &.enterFrom {
    opacity: 0;
  }
  &.enterTo {
    opacity: 1;
  }
  &.leave {
    transition-duration: 75ms;
    transition-timing-function: ease-out;
  }
  &.leaveFrom {
    opacity: 1;
  }
  &.leaveTo {
    opacity: 0;
  }
`;

export const StyledDialog = styled.div`
  position: relative;
  z-index: 10;
`;

export const PanelHolder = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
`;

export const FullscreenContainer = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
`;

export const StyledPanel = styled.div`
  width: 100%;
  max-width: 28.5rem;
  overflow: hidden;
  border-radius: 8px;
  background: ${colorsPalette.gray[100]};
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
  padding: 1.7rem;
  text-align: left;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  & h3 {
    font-size: 0.9rem;
    font-weight: 700;
  }
  & ${StyledButton} {
    width: 100%;
  }
`;
