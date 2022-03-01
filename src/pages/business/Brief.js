import React from 'react';
import styled from 'styled-components';
import '../../../node_modules/video-react/dist/video-react.css';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from 'video-react';

function Brief({ changeActive, data }) {
  return (
    <Wrapper>
      <div className="txt">
        <p>
          Big Data is becoming one of the most valuable assets in the world,
          being exploited by small oligopolies. While you, the USERS, the real
          data generators are being left out of the equation. BeoN will reward
          any user around the world for the data they generate.
        </p>
      </div>
      <div className="txt">
        <p>
          BeoN is a peer-to-peer big data sharing ecosystem powered by
          blockchain technologies. We create bridges between current isolated
          participants and aim to solve the existing inefficiencies of the huge
          big data industry.
        </p>
      </div>
      <div className="txt">
        <p>
          Users receive BeoN tokens in exchange for their anonymous data, which
          can later be exchanged for FIAT money or other crypto-currencies or,
          once we launch our full network, use it to acquire goods and services.
        </p>
      </div>
      <div className="video-container">
        <Player fluid="false">
          <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
          <BigPlayButton position="center" />
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton />
          </ControlBar>
        </Player>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 2.5rem;
  padding-left: 3.5rem;
  .txt {
    margin-bottom: 1.5rem;
    width: 88%;
  }
  .video-container {
    width: 400px;
    height: 250px;
    margin-top: 3rem;
    .video-react.video-react-fluid,
    .video-react.video-react-16-9,
    .video-react.video-react-4-3 {
      height: 100% !important;
    }
  }
`;

export default Brief;
