import React from 'react';
import styled from 'styled-components';

import {
  EQUALGRID,
  HireLink,
  Select,
  TextArea,
  TextInput,
} from '../../../../components/styledComponents';
import colors from '../../../../config/colors';
import computer from '../../../../assets/img/70.png';
import dropbox from '../../../../assets/img/71.png';
import add from '../../../../assets/img/72.png';
import { Link } from 'react-router-dom';
import useActive from '../../../../hooks/useActive';

function ProjectDetails({ changeActive }) {
  const [active, show] = useActive(['text', 'image', 'video']);
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Wrapper>
      <section className="heading">
        <h1>Tell the Investors about your Idea or Project</h1>
        <div className="txt">
          <p>Include quality images and/or videos that help</p>
          <p>you sell your idea or project to the investors</p>
        </div>
      </section>
      <section className="part-one">
        <form>
          <h1>Idea or Project Title</h1>
          <EQUALGRID>
            <TextInput type="text" placeholder="Title" />
            <Select>
              <option value="">Category</option>
            </Select>
          </EQUALGRID>
          <div className="banner">
            <h1>Add Display Banner</h1>
          </div>
          <div className="pickers">
            <div className="box">
              <div className="row">
                <img src={computer} alt="computer png" />
                <p>From Computer</p>
              </div>
              <div className="row">
                <img src={dropbox} alt="dropbox png" />
                <p>From Dropbox</p>
              </div>
            </div>
            <div className="image-container">
              <div className="txt">
                <p>Image Preview</p>
                <p>Banner must be 1,215/273</p>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section className="part-three">
        <form>
          <div className="utilization">
            <h1>Please state how fund raised will be utilized</h1>
            <TextArea
              col="30"
              rows="7"
              placeholder="Purpose of raising this funds"
            />
            <div className="right">
              <p>Max 1000 Characters</p>
            </div>
          </div>
        </form>
      </section>
      <section className="part-two">
        <form>
          <div className="keys row">
            <Link>
              <img src={add} alt="add button png" />
              Add Text
            </Link>
            <Link>
              <img src={add} alt="add button png" />
              Add Image
            </Link>
            <Link>
              <img src={add} alt="add button png" />
              Add Video
            </Link>
          </div>
          {typeof active !== 'undefined' && active.text ? (
            <div className="chosen">
              <div className="text cont">
                <h1>Input Text</h1>
                <TextArea col="30" rows="6" />
              </div>
            </div>
          ) : typeof active !== 'undefined' && active.image ? (
            <div className="image cont">
              <h1>Add Image</h1>
              <div className="img-container">
                <div className="txt">
                  <p>Image Preview</p>
                  <p>Image must have a minimum width of 593px</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="video cont">
              <h1>Add Video</h1>
              <div className="video-container">
                <div className="txt">
                  <p>Video Preview</p>
                  <p>Video must be in mp3/mp4 format</p>
                  <p>with a minimum playtime of 120 seconds</p>
                </div>
              </div>
            </div>
          )}
        </form>
      </section>
      <div className="button">
        <HireLink
          onClick={() => {
            changeActive('team');
          }}
        >
          Proceed
        </HireLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .part-one {
    margin-bottom: 2rem;
    h1 {
      margin-top: 2rem;
    }
    .pickers {
      display: grid;
      grid-template-columns: 1.2fr 2.8fr;
      grid-gap: 2rem;

      .box:nth-child(1) {
        border: 1px dashed ${colors.colorLightGreen};
        background-color: ${colors.colorWhite};
        padding: 1.5rem 1.3rem;
        .row {
          align-items: center;
          padding-top: 0.6rem;
          cursor: pointer;
        }
        .row:nth-child(1) {
          border-bottom: 1px solid ${colors.colorLightGreen};
          padding-bottom: 0.6rem;
          padding-top: 0;
        }
      }
      .image-container {
        border: 1px dashed ${colors.colorLightGreen};
        background-color: ${colors.colorWhite};
        padding-left: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .txt {
          p:first-of-type {
            font-weight: bold;
          }
        }
      }
    }
  }
  .part-two {
    background-color: ${colors.primaryColor};
    .keys {
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 4rem;
      a {
        text-decoration: none;
        padding: 1rem;
        background-color: ${colors.colorLightGreen};
        display: flex;
        align-items: center;
        color: ${colors.navBarBlue};
        font-weight: bold;
        img {
          margin-right: 0.6rem;
        }
      }
      a:not(:last-child) {
        margin-right: 1.5rem;
      }
    }
    .chosen {
      .cont {
        margin-bottom: 2rem;
      }
      .txt {
        p:first-of-type {
          font-weight: bold;
        }
      }
      .image {
        .img-container {
          height: 17vh;
          border: 1px solid ${colors.navBarBlue};
          background-color: ${colors.colorWhite};
          border-radius: 6px;
          padding-left: 5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      .video {
        .video-container {
          height: 35vh;
          width: 29vw;
          border: 1px solid ${colors.navBarBlue};
          background-color: ${colors.colorWhite};
          border-radius: 6px;
          padding-left: 5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
  .part-three {
    margin-bottom: 2rem;
    .right {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export default ProjectDetails;
