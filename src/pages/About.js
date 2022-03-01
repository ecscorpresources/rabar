import React from 'react';
import styled from 'styled-components';

import bg from '../assets/img/86.png';
import colors from '../config/colors';
import umbrella from '../assets/img/87.png';
import contact from '../assets/img/contact.png';
import ContactUs from '../components/ContactUs';

function About() {
  const [show, setShow] = React.useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Wrapper>
      <section className="indexSection">
        <div className="text">
          <div className="heading">
            <h1>Broken Ideas can still be brought back to life</h1>
          </div>
          <div className="txt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              minus sunt consequuntur ut veritatis necessitatibus corporis neque
              voluptatum dolorum nihil odio perspiciatis assumenda, sapiente
              corrupti, fuga reprehenderit minima illum! Dignissimos!
            </p>
          </div>
        </div>
        <div className="text">
          <div className="box"></div>
          <div>
            <div className="heading">
              <h1>Rabar Perspective...</h1>
            </div>
            <div className="txt">
              <p>
                corporis neque voluptatum dolorum nihil odio perspiciatis
                assumenda, sapiente corrupti, fuga reprehenderit minima illum!
                Dignissimos!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="secondSection">
        <div className="umbrella">
          <img src={umbrella} alt="umbrella rabar" />
        </div>
        <div className="text">
          <div className="heading">
            <h1>Drive with Us at Rabar</h1>
          </div>
          <div className="txt">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique totam, exercitationem perspiciatis, aliquid voluptatibus
              quisquam ducimus neque sint quod odio dicta doloribus esse hic eum
              voluptatem, alias dolorem et vitae.
            </p>
          </div>
          <div className="txt">
            <p>
              voluptatibus quisquam ducimus neque sint quod odio dicta doloribus
              esse hic eum voluptatem, alias dolorem et vitae.
            </p>
          </div>
        </div>
      </section>
      <section className="thirdSection">
        <div className="col">
          <div className="box">
            <h1>Impressions</h1>
            <p>Creating a lasting impression within your locality</p>
          </div>
          <div className="box">
            <h1>Integrity</h1>
            <p>
              the amount of funds you need for this project as well as any key
            </p>
          </div>
          <div className="box">
            <h1>Curiosity</h1>
            <p>
              The ability to question the norm and desire to find ways of making
              humanity exist in a better environment
            </p>
          </div>
          <div className="box">
            <h1>Tenacity</h1>
            <p>
              Pressing towards the mark in the midst of certain challenges could
              be difficult
            </p>
          </div>
        </div>
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            sunt atque eum quasi labore minima veritatis accusamus{' '}
          </p>
          <p>
            cupiditate tempora voluptatibus expedita repellendus, dolores cum
            odio in nobis neque rem aperiam.
          </p>
        </div>
      </section>
      <section className="fourthSection"></section>
      <section className="fifthSection">
        {!show ? (
          <article className="contact">
            <div className="img-container">
              <img src={contact} alt="rabar contact us" />
            </div>
            <div className="text">
              <p>
                Contact our team of professionals to discuss your need you can
                be rest assured of a better solution
              </p>
            </div>
            <button onClick={handleClick}>Contact Us</button>
          </article>
        ) : (
          <ContactUs />
        )}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.4em;
  background-color: ${colors.colorGreyLight};
  .indexSection {
    color: ${colors.colorWhite};
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100%;
    height: 100vh;
    margin: 1px 0 0rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    padding: 10rem 0;
    .text {
      padding-left: 15rem;
      width: 45%;
      .heading {
        margin-bottom: 1.5rem;
        line-height: 1.2;
        h1 {
          font-size: 2em;
          font-weight: 400;
        }
      }
    }
    .text:nth-child(2) {
      padding-left: 10rem;
      margin-top: 6rem;
      display: flex;
      width: 58%;
      .heading {
        h1 {
          font-weight: 300;
          font-size: 2em;
        }
      }
      .box {
        width: 25px;
        height: 25px;
        border: 2px solid #ffc938;
        margin: 0.45rem 1.5rem 0 0;
      }
      & > div:nth-child(2) {
        flex: 60%;
      }
    }
  }
  .secondSection {
    display: flex;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    .umbrella {
      position: relative;
      top: -80px;
      margin-bottom: -60px;
      margin-right: 6rem;
    }
    .text {
      background-color: ${colors.colorWhite};
      padding: 5rem;
      margin-top: 15rem;
      .heading {
        margin-bottom: 1.2rem;
        h1 {
          font-weight: 400;
          font-size: 2em;
        }
      }
      .txt:nth-child(3) {
        margin-top: 1.5rem;
        font-weight: bold;
      }
    }
  }
  .thirdSection {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 8rem;
    align-items: center;
    padding-bottom: 8rem;
    & .col:nth-child(1) {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap: 2rem;
      .box {
        background-color: #ffc938;
        padding: 4rem 3rem;
        height: 20rem;
        color: ${colors.navBarBlue};
        h1 {
          font-size: 1.3em;
          margin-bottom: 1rem;
        }
      }
    }
    & .col:nth-child(2) {
      p:first-of-type {
        margin-bottom: 3rem;
      }
      p {
        width: 80%;
      }
    }
  }
  .fourthSection {
    width: 100%;
    height: 60vh;
    background-color: ${colors.navBarBlue};
  }
  .fifthSection {
    padding: 4rem 0;
    & .contact {
      display: flex;
      align-items: center;
      justify-content: center;
      .img-container {
        margin-right: 4rem;
      }
      .text {
        width: 30%;
        margin-right: 4rem;
      }
      button {
        padding: 1rem 2rem;
        background-color: #ffc938;
        border: none;
        color: ${colors.colorWhite};
        font-size: 1.2em;
        cursor: pointer;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .indexSection {
      height: 32rem;
      align-items: center;
      background-position: 100%;
    }
  }
`;

export default About;
