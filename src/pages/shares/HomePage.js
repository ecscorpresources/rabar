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

import { HireLink } from '../../components/styledComponents';
import colors from '../../config/colors';
import all from '../../assets/img/29.png';
import tech from '../../assets/img/30.png';
import manu from '../../assets/img/31.png';
import housing from '../../assets/img/32.png';
import logo from '../../assets/img/033.png';
import arrow from '../../assets/img/34.png';
import Categories from '../../globals/toolbar/Categories';

const shares = [
  {
    name: 'Company One Name',
    lastValuation: '1.4',
    availableShares: '532',
    DateOfIncorporation: '22/10/20 17',
  },
  {
    name: 'Company One Name',
    lastValuation: '1.4',
    availableShares: '532',
    DateOfIncorporation: '22/10/20 17',
  },
  {
    name: 'Company One Name',
    lastValuation: '1.4',
    availableShares: '532',
    DateOfIncorporation: '22/10/20 17',
  },
  {
    name: 'Company One Name',
    lastValuation: '1.4',
    availableShares: '532',
    DateOfIncorporation: '22/10/20 17',
  },
];

function HomePage() {
  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <Wrapper>
      <Categories />
      <article className="indexSection">
        <div className="fund">
          <h1>Catching the moving train</h1>
          <p>Transit startup shares in a guaranteed secured environment</p>
          <p>Cash-in on missed opportunities</p>
          <HireLink hallwidth="25rem" to="/shares">
            Start Buying
          </HireLink>
        </div>
        <div className="how">
          <div className="txt">
            <h1>Bring your business</h1>
            <div className="text">
              <p>Empowering the complexity of financial</p>
              <p>engineering. Disrupt your financial growth</p>
            </div>
            <div className="text">
              <p>Engage community of passionate investors</p>
              <p>& draw attention to your idea</p>
            </div>
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
                <PlaybackRateMenuButton
                  rates={[5, 2, 1, 0.5, 0.1]}
                  order={7.1}
                />
                <VolumeMenuButton />
              </ControlBar>
            </Player>
          </div>
        </div>
      </article>
      <article className="secondSection" id="buy">
        <h1>Investment Opportunities</h1>
        <p className="search">Search By Category</p>
        <div className="row">
          <div className="box">
            <img src={all} alt="png" />
            <p>Pitches</p>
          </div>
          <div className="box">
            <img src={tech} alt="png" />
            <p>Innovation &</p>
            <p>Technology</p>
          </div>
          <div className="box">
            <img src={manu} alt="png" />
            <p>FCMG &</p>
            <p>Manufacturing</p>
          </div>
          <div className="box">
            <img src={housing} alt="png" />
            <p>Affordable</p>
            <p>Housing</p>
          </div>
        </div>
      </article>
      <article className="thirdSection">
        <table>
          <thead>
            <tr>
              <td>Business Name</td>
              <td>Last Valuation</td>
              <td>Available Shares</td>
              <td>Date of Incorporation</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {shares.map((share, i) => (
              <tr>
                <td className="row">
                  <div className="img-container">
                    <img src={logo} alt="png" />
                  </div>
                  {share.name}
                </td>
                <td>${share.lastValuation}M</td>
                <td>{share.availableShares} units</td>
                <td>{share.DateOfIncorporation}</td>
                <td
                  onClick={() => {
                    handleClick('/share');
                  }}
                >
                  <div className="arrow-container">
                    <img src={arrow} alt="png" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.4em;
  .indexSection {
    background-color: ${colors.colorPink};
    padding: 5rem 5rem 8rem 330px;
    .fund {
      padding-left: 100px;
      margin-bottom: 10rem;
      h1 {
        font-size: 1.4em;
        font-family: 'OpenSans-Light';
        margin-bottom: 1rem;
      }
      p:nth-child(2) {
        font-weight: bold;
      }
      p:nth-child(3) {
        margin-bottom: 3rem;
      }
      a {
        border-radius: 0;
      }
    }
    .how {
      display: flex;
      justify-content: center;
      align-items: center;
      .txt {
        margin-right: 5rem;
        h1 {
          font-size: 1.4em;
          margin-bottom: 1rem;
        }
        p {
          font-style: italic;
        }
        .text:nth-child(2) {
          margin-bottom: 2rem;
        }
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
    }
  }
  .secondSection {
    padding: 4rem 15rem 10rem;
    h1 {
      font-size: 1.5em;
      margin-bottom: 1rem;
    }
    .search {
      margin-bottom: 1rem;
      font-weight: bold;
    }
    .row {
      .box {
        align-items: center;
        img {
          margin-bottom: 1rem;
        }
      }
      .box:not(:last-child) {
        margin-right: 3rem;
      }
    }
  }
  .thirdSection {
    width: 60%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10rem;
    table {
      width: 100%;
      border-collapse: collapse;
      .row {
        align-items: center;
      }
    }

    table thead tr td {
      font-weight: bold;
      border: none;
    }

    table tr td {
      padding: 7px 10px 5px 0px;
      border-top: 1px solid ${colors.tabBorder};
      .img-container {
        margin-right: 1rem;
        width: 30px;
        img {
          width: 100%;
        }
      }
      .arrow-container {
        width: 15px;
        cursor: pointer;
        img {
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .indexSection {
      padding-left: 5rem;
      .how {
        flex-direction: column;
      }
    }
    .secondSection {
      padding: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .row {
        .box:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
    .thirdSection {
      width: 80%;
    }
  }
`;

export default HomePage;
