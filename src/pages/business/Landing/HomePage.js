import React from 'react';
import styled from 'styled-components';

import bg from '../../../assets/img/22.png';
import Hero from '../../../components/Hero';
import { BtnLink, HireLink } from '../../../components/styledComponents';
import colors from '../../../config/colors';
import HeroSlider from '../../../slide/HeroSlider';
import banner1 from '../../../assets/img/23.png';
import banner2 from '../../../assets/img/24.png';
import banner3 from '../../../assets/img/25.png';
import create from '../../../assets/img/26.png';
import community from '../../../assets/img/27.png';
import win from '../../../assets/img/28.png';
import Categories from '../../../globals/toolbar/Categories';

function HomePage() {
  return (
    <Wrapper>
      <Categories />
      <Hero img={bg}>
        <div className="hero">
          <div className="txt">
            <h1>Bring your business to the community and raise investments</h1>
            <p>
              Engage a community of passionate investors & draw attention to
              your idea,
            </p>
            <p>the process is all simplified just for you</p>
          </div>
          <HireLink to="/fund">Start Raising Fund</HireLink>
        </div>
      </Hero>
      <article className="indexSection">
        <div className="txt">
          <h1>Fund your business at any Level</h1>
          <p>Empower the economy by building businesses with</p>
          <p>
            <span>Investments</span> as low as <span>$10</span>
          </p>
        </div>
      </article>
      <article className="secondSection">
        <HeroSlider banner1={banner1} banner2={banner2} banner3={banner3} />
      </article>
      <article className="thirdSection">
        <h1>Seed to Growth to Expansion</h1>
        <p>Combines a stationary washing machine, you can</p>
        <BtnLink hallwidth="30rem" to="/fund">
          Start Raising Funds Now
        </BtnLink>
      </article>
      <article className="fourthSection"></article>
      <article className="fifthSection">
        <div className="heading">
          <h1>You want to raise funds?</h1>
        </div>
        <div className="row">
          <div className="box">
            <img src={create} alt="png img" />
            <div className="txt">
              <h4>Create Your Campaign</h4>
              <p>Create your account & upload your</p>
              <p>idea, business or project</p>
            </div>
          </div>
          <div className="box">
            <img src={community} alt="png img" />
            <div className="txt">
              <h4>Connect with Community</h4>
              <p>Share your idea, business plan and</p>
              <p>projections. Let the community know</p>
              <p>why they should invest with the best</p>
              <p>YOU!</p>
            </div>
          </div>
          <div className="box">
            <img src={win} alt="png img" />
            <div className="txt">
              <h4>You Win</h4>
              <p>Access your fund after we have</p>
              <p>completed our necessary checks. At</p>
              <p>this point you are a winner</p>
            </div>
          </div>
        </div>
        <div className="txt">
          <h1>Don't Miss Out</h1>
          <p>The Community is waiting for You</p>
        </div>
      </article>
      <article className="sixSection">
        <h1>Success begins here</h1>
        <p>just dream it & Find it</p>
        <HireLink hallwidth="25rem" to="/fund">
          Start Raising Fund Now
        </HireLink>
      </article>
      <article className="seventhSection">
        <div className="txt">
          <h1>The Market Is Waiting For You</h1>
          <p>You are every step close to a successful project</p>
          <p>Exploring a directory of investors brings your campaign </p>
          <p>close to market</p>
        </div>
      </article>
    </Wrapper>
  );
}

// const Banner1Text = () => {
//   return (
//     <div className="banner-txt">
//       <h1>Startup Stage</h1>
//       <p>As a Start-up that is ready to launch</p>
//       <p>a business, you can get funds here.</p>
//     </div>
//   );
// };

// const Banner2Text = () => {
//   return (
//     <div className="banner-txt">
//       <h1>Growth Stage</h1>
//       <p>entrepreneurs looking to grow and gain</p>
//       <p>more grounds for their business are</p>
//       <p>eligible to raise funds</p>
//     </div>
//   );
// };

// const Banner3Text = () => {
//   return (
//     <div className="banner-txt">
//       <h1>Expansion Stage</h1>
//       <p>Established businesses that want to</p>
//       <p>expand are fit to raise funds</p>
//     </div>
//   );
// };

const Wrapper = styled.section`
  font-size: 1.4em;
  color: ${colors.navBarBlue};
  h1 {
    font-size: 2em;
  }
  .hero {
    padding-left: 40rem;
    color: ${colors.navBarBlue};
    .txt {
      margin-bottom: 3rem;
      h1 {
        font-size: 1.4em;
        font-family: 'OpenSans-Light';
        margin-bottom: 0.7rem;
      }
    }
  }
  .indexSection {
    width: 90%;
    margin: 0 auto;
    padding: 6rem 0 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .txt {
      h1 {
        margin-bottom: 1rem;
      }
      span {
        font-weight: bold;
      }
    }
  }
  .secondSection {
    width: 50%;
    margin: 0 auto 5rem;

    .banner-txt {
      position: absolute;
      top: 40%;
      left: 10px;
      h1 {
        margin-bottom: 1rem;
      }
    }
  }
  .thirdSection {
    width: 90%;
    margin: 0 auto;
    padding: 6rem 0 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin-bottom: 2rem;
    }
    a {
      border: 2px solid ${colors.navBarBlue};
      font-weight: bolder;
    }
  }
  .fourthSection {
    height: 23rem;
    width: 100%;
    background-color: ${colors.tabBorder};
    margin: 0 auto;
    padding: 6rem 0 8rem;
  }
  .fifthSection {
    width: 80%;
    margin: 0 auto;
    padding: 6rem 0 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .heading {
      margin-right: auto;
      margin-left: 6rem;
      margin-bottom: 1rem;
      h1 {
        font-size: 1.4em;
      }
    }
    .row {
      margin-bottom: 5rem;
      .box {
        align-items: center;
        text-align: center;
        h4 {
          font-size: 1.1em;
          margin-bottom: 1rem;
        }
      }
      .box:not(:last-child) {
        margin-right: 5rem;
      }
    }
    .txt {
      text-align: center;
      h1 {
        font-size: 1.4em;
      }
    }
  }
  .sixSection {
    padding: 6rem 0 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.navBarBlue};
    color: ${colors.colorWhite};
    h1 {
      font-size: 1.8em;
      font-family: 'OpenSans-Light';
    }
    p {
      font-weight: bold;
      margin-bottom: 5rem;
    }
    a {
      color: ${colors.navBarBlue};
      font-weight: bold;
      border-radius: 0;
    }
  }
  .seventhSection {
    padding: 6rem 0 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .txt {
      h1 {
        font-size: 1.8em;
        font-family: 'OpenSans-Light';
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.4em;
      }
      p:nth-child(2) {
        font-weight: bold;
        margin-bottom: 0.7rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 1.5em;
    }
    .hero {
      padding-left: 0;
      width: 90%;
      margin: 0 auto;
    }
    .secondSection {
      width: 80%;
      margin: 0 auto 3rem;
    }
    .fifthSection {
      text-align: center;
      .heading {
        margin-left: 0;
        margin-right: 0;
        text-align: center;
      }
      .row {
        align-items: center;
        justify-content: center;
      }
    }
    .seventhSection {
      padding: 5rem;
    }
  }
`;

export default HomePage;
