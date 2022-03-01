import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Hero from '../../components/Hero';
import bg from '../../assets/img/55.png';
import colors from '../../config/colors';
import { HireLink } from '../../components/styledComponents';
import indexBg from '../../assets/img/42.png';
import categoryMap from './../../assets/img/43.png';
import legal from './../../assets/img/47.png';
import advert from './../../assets/img/46.png';
import design from './../../assets/img/45.png';
import account from './../../assets/img/44.png';
import hr from './../../assets/img/48.png';
import work from './../../assets/img/49.png';
import bird from './../../assets/img/50.png';
import business from './../../assets/img/51.png';
import commission from './../../assets/img/52.png';
import community from './../../assets/img/53.png';
import BePartner from './BePartner';
import Refer from './Refer';
import Categories from '../../globals/toolbar/Categories';
import useActive from '../../hooks/useActive';

const cats = [
  {
    logo: legal,
    title: 'Legal',
  },
  {
    logo: advert,
    title: 'Adverts',
  },
  {
    logo: design,
    title: 'Design',
  },
  {
    logo: account,
    title: 'Accounts',
  },
  {
    logo: hr,
    title: 'HR',
  },
  {
    logo: work,
    title: 'Work-Space',
  },
];

const sliders = () => {
  return cats.map((cat, index) => {
    return (
      <div className="box" key={index}>
        <div className="img-container">
          <img src={cat.logo} alt="design png" />
        </div>
        <p>{cat.title}</p>
      </div>
    );
  });
};

function Landing() {
  const [active, changeActive] = useActive(['be', 'refer']);
  var settings = {
    className: 'slider variable-width',
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
  };

  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <Wrapper>
      <Categories />
      <Hero img={bg}>
        <div className="hero">
          <h1>Inspiring Change Together</h1>
          <div className="txt">
            <p>Join our community and let us create an enabling</p>
            <p>environment for a suitable economic growth</p>
          </div>
        </div>
      </Hero>
      <div className="button">
        <HireLink
          hallwidth="25rem"
          onClick={() => {
            handleClick('#partner');
          }}
        >
          Become a Partner
        </HireLink>
      </div>
      <section className="indexSection">
        <article className="partner">
          <div className="heading">
            <h1>How to Partner with Rabar</h1>
            <div className="divider"></div>
          </div>
          <div className="row">
            <div className="box">
              <h1>Support</h1>
              <div className="txt">
                <p>There is the opportunity to change the lives of</p>
                <p>individuals and communities...</p>
              </div>
              <div className="txt">
                <p>I t might not have been your idea but you sure</p>
                <p>can prop it up</p>
              </div>
            </div>
            <div className="box">
              <h1>Recommended</h1>
              <div className="txt">
                <p>Help your clients receive the funding they need </p>
                <p>to become the next big thing</p>
              </div>
              <div className="txt">
                <p>Increase patronage through the value you input</p>
                <p>into on others</p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="secondSection">
        <div className="categories-map">
          <img src={categoryMap} alt="png" />
          <Slider {...settings}>{sliders()}</Slider>
        </div>
        <div className="content">
          <h1>Being there for businesses</h1>
          <div className="txt">
            <p>Startups need necessary support to ensure that they deliver</p>
            <p>their business ideas in excellence, clarity and beauty.</p>
          </div>
          <div className="txt">
            <p>We create a working engine for these startups that</p>
            <p>help grow their idea and ultimately protect and manage</p>
            <p>the funds of investors</p>
          </div>
          <HireLink
            onClick={() => {
              handleClick('#partner');
            }}
          >
            Support a Business
          </HireLink>
        </div>
      </section>
      <section className="thirdSection">
        <article className="partner">
          <h1>Why Partner With US ?</h1>
          <div className="txt">
            <p>
              Here at Rabar Crowd Funding, an important prerequisite for smooth
            </p>
            <p>collaboration is the merging of our core values</p>
          </div>
          <div className="txt">
            <p>
              Because your core values align with ours, we have therefore placed
            </p>
            <p>
              ourselves in the right position to take startups and investors
            </p>
            <p>to greater levels</p>
          </div>
        </article>
        <article className="benefit">
          <p className="heading">The Benefits of Partnering with Us</p>
          <div className="benefits">
            <div className="row">
              <div className="box">
                <div className="row">
                  <img src={bird} alt="blue bird png" />
                  <div className="text">
                    <h1>Early Bird</h1>
                    <div className="txt">
                      <p>
                        Since you will be building their businesses, you have a
                      </p>
                      <p>
                        first hand view of and an opportunity to dive into that
                      </p>
                      <p>“opportunity”</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <img src={commission} alt="blue bird png" />
                  <div className="text">
                    <h1>Earn Commission</h1>
                    <div className="txt">
                      <p>You get a 20% referral fee when any business you</p>
                      <p> referred is successfully funded</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="row">
                  <img src={business} alt="business png" />
                  <div className="text">
                    <h1>Business Exposure</h1>
                    <div className="txt">
                      <p>Enjoy maximum business exposure at a discounted</p>
                      <p>rate and reach more potential clients for you</p>
                      <p>business</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <img src={community} alt="business png" />
                  <div className="text">
                    <h1>Access to Community</h1>
                    <div className="txt">
                      <p>Get exclusive access to our community on Rabar</p>
                      <p>as well as other communities on our affiliate sites</p>
                      <p>on Monkhey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="fourthSection" id="partner">
        <div className="nav row">
          <div className="row">
            <input
              type="radio"
              name="nav"
              id=""
              onClick={() => {
                changeActive('be');
              }}
              checked={
                typeof active !== 'undefined' && active.be ? 'checked' : ''
              }
            />
            <label htmlFor="nav">Become a Partner</label>
          </div>
          <div className="row">
            <input
              type="radio"
              name="nav"
              id=""
              onClick={() => {
                changeActive('refer');
              }}
              checked={
                typeof active !== 'undefined' && active.refer ? 'checked' : ''
              }
            />
            <label htmlFor="nav">Refer a Business</label>
          </div>
        </div>
        <div className="form-group">
          {typeof active !== 'undefined' && active.be ? (
            <BePartner />
          ) : (
            <Refer />
          )}
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.4em;
  color: ${colors.navBarBlue};
  a {
    border-radius: 0;
    color: ${colors.navBarBlue};
    font-weight: 800;
  }
  .hero {
    padding-left: 40rem;
    color: ${colors.colorWhite};
    h1 {
      font-size: 2em;
      margin-bottom: 0.5rem;
    }
    .txt {
      margin-bottom: 3rem;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    padding: 4rem 0;
  }
  .indexSection {
    background-color: ${colors.colorGreyLight};
    padding: 10rem 0;
    .partner {
      background: url(${indexBg});
      background-position: top;
      background-repeat: no-repeat;
      background-size: contain;
      color: ${colors.colorBlue};
      width: 68%;
      margin: 0 auto;
      height: 30rem;
      padding: 2rem 5rem 8rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-size: 2em;
          font-family: 'OpenSans-Light';
          margin-bottom: 0.6rem;
        }
        .divider {
          background-color: ${colors.colorBlue};
          width: 100px;
          height: 3px;
        }
      }
      .row {
        justify-content: space-between;
        .box {
          h1 {
            font-size: 1.3em;
          }
          .txt:nth-child(2) {
            margin-bottom: 1rem;
          }
          .txt:nth-child(3) {
            font-weight: bold;
          }
        }
      }
    }
  }
  .secondSection {
    background-color: ${colors.colorBlue};
    padding: 10rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: ${colors.colorWhite};
    .categories-map {
      margin-right: 6rem;
      .slick-track {
        display: flex;
        width: 380px !important;
      }
      .slick-slider {
        left: -40px;
      }
      .box {
        display: flex !important;
        justify-content: center;
        align-items: center;
      }
      .box {
        margin-right: 15px !important;
      }
    }
    .content {
      margin-top: 3rem;
      h1 {
        font-size: 1.7em;
        margin-bottom: 1rem;
      }
      .txt:nth-child(2) {
        font-weight: bold;
        margin-bottom: 1rem;
      }
      .txt:nth-child(3) {
        margin-bottom: 6rem;
      }
      a {
        color: ${colors.colorBlue};
      }
    }
  }
  .thirdSection {
    padding: 10rem;
    width: 90%;
    margin: 0 auto;
    color: ${colors.colorBlue};
    .partner {
      margin-bottom: 5rem;
      h1 {
        font-size: 2em;
        margin-bottom: 1rem;
        font-family: 'OpenSans-Light';
      }
      .txt:nth-child(2) {
        font-weight: bold;
        margin-bottom: 1rem;
      }
    }
    .benefit {
      .heading {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      .benefits {
        p {
        }
        .row {
          align-items: center;
          .box {
            .row {
              align-items: flex-start;
              h1 {
                font-size: 1.2em;
                margin-bottom: 0.7rem;
              }
            }
            .row:nth-child(1) {
              margin-bottom: 4rem;
            }
          }
          .box:not(:last-child) {
            margin-right: 4rem;
          }
        }
      }
    }
  }
  .fourthSection {
    background-color: ${colors.primaryColor};
    padding: 8rem 0;
    margin-bottom: 10rem;
    .nav {
      width: 60%;
      margin: 0 auto 4rem;
      justify-content: center;
      .row {
        align-items: center;
        input {
          margin-right: 1rem;
        }
      }
      .row:not(:last-child) {
        margin-right: 4rem;
      }
    }
    .form-group {
      width: 60%;
      margin: 0 auto;
      background-color: ${colors.colorWhite};
      padding: 6rem 5rem;
      label {
        font-weight: bold;
        margin-bottom: 0.6rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      padding-left: 0;
    }
    .indexSection {
      .partner {
        height: 50rem;
        background: none;
        justify-content: center;
        width: 90%;
        padding-top: 0;
        padding-bottom: 5rem;
        .heading {
          justify-content: center;
          margin-bottom: 3rem;
          h1 {
            font-size: 1.6em;
          }
        }
        .row {
          justify-content: center;
          align-items: center;
          .box:nth-child(1) {
            margin-bottom: 2rem;
          }
        }
      }
    }
    .secondSection {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .categories-map {
        margin-right: 0;
      }
    }
    .thirdSection {
      padding: 5rem;
      .benefit {
        .heading {
          margin-bottom: 3rem;
          text-align: center;
          font-weight: bold;
        }
        .benefits {
          .row {
            flex-direction: column;
            justify-content: center;
            align-items: center !important;
            .box {
              text-align: center;
            }
          }
        }
      }
    }
    .fourthSection {
      .nav {
        width: 80%;
      }
      .form-group {
        width: 80%;
      }
    }
  }
`;

export default Landing;
