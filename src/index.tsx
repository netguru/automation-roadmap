import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "styles/global";
import styled from "styled-components";
import Hero from "molecules/Hero/Hero";
import { LearningTrack } from "models";
import RoadmapTrack from "RoadmapTrack/RoadmapTrack";
import { roadmapService } from "services/roadmap";
import { mediaQuery } from "styles/responsive";
import { TrackContainer } from "RoadmapTrack/RoadmapTrack.styled";
import { ReactComponent as OtherIcon } from "assets/other.svg";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  padding: 1.4rem;

  ${mediaQuery.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.7rem;
    justify-content: space-between;
    & div:first-child {
      flex-basis: 100%;
    }
    & ${TrackContainer} {
      flex-basis: 29%;
    }
  }

  ${mediaQuery.desktop} {
    flex-direction: row;
    justify-content: center;
    gap: 2.3rem;
    // On Desktop each track should scroll independently
    max-height: calc(100vh - 1.4rem);
    overflow-y: hidden;
  }
`;

const IconWrapper = styled.div`
  display: none;
  ${mediaQuery.mobile} {
    display: flex;
    justify-content: center;
  }
`;
const App = () => {
  const [tracks, setTracks] = React.useState<LearningTrack[]>([]);

  React.useEffect(() => {
    roadmapService.getLearningTracks().then(setTracks);
  }, []);

  return (
    <AppContainer>
      <Hero />
      {tracks.map((track) => (
        <RoadmapTrack topics={track.topics} name={track.name} key={track.id} />
      ))}
      <IconWrapper>
        <OtherIcon />
      </IconWrapper>
    </AppContainer>
  );
};

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
