import React from 'react';
import styled from 'styled-components';

import arrow from '../../assets/img/34.png';
import colors from '../../config/colors';
import increase from '../../assets/img/36.png';
import decrease from '../../assets/img/36a.png';
import {
  BtnLink,
  HireLink,
  TextArea,
  TextInput,
} from '../../components/styledComponents';
import ProgressBar from '../../components/ProgressBar';

const shares = [
  {
    name: 'Company One Name',
    date: '22/10/19',
    purchasePrice: 0.06,
    currentPrice: 0.23,
    shareHeld: 534,
    priceMovement: 73,
    decrease: false,
    increase: true,
  },
  {
    name: 'Company Two Name',
    date: '13/09/19',
    purchasePrice: 0.16,
    currentPrice: 0.12,
    shareHeld: 231,
    priceMovement: 25.0,
    decrease: true,
    increase: false,
  },
  {
    name: 'Company Three Name',
    date: '16/04/19',
    purchasePrice: 0.06,
    currentPrice: 0.23,
    shareHeld: 1534,
    priceMovement: 73.9,
    decrease: false,
    increase: true,
  },
  {
    name: 'Company Four Name',
    date: '16/04/19',
    purchasePrice: 0.06,
    currentPrice: 0.23,
    shareHeld: 750,
    priceMovement: 79.9,
    decrease: false,
    increase: true,
  },
];

function Dashboard() {
  const [state, setState] = React.useState({
    show: false,
    id: -1,
  });
  const handleClick = (url) => {
    window.location.href = url;
  };
  const show = (id) => {
    setState({ show: !state.show, id });
  };
  return (
    <Wrapper>
      <div className="name">
        <h1>Username</h1>
        <p>Nick name</p>
      </div>
      <nav>
        <p
          onClick={() => {
            handleClick('/shares');
          }}
        >
          Buy Shares
        </p>
        <p
          onClick={() => {
            handleClick('/#invest');
          }}
        >
          Fund a Project
        </p>
        <p
          onClick={() => {
            handleClick('/fund');
          }}
        >
          Raise Funds
        </p>
      </nav>
      <section className="content">
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Company Name</td>
              <td>Date Bought</td>
              <td>Purchased Price</td>
              <td>Current Price</td>
              <td>No. Shares Held</td>
              <td>Price Movement</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {shares.map((share, i) => (
              <>
                <tr key={i}>
                  <td>{i}</td>
                  <td>{share.name}</td>
                  <td>{share.date}</td>
                  <td>${share.purchasePrice}</td>
                  <td>${share.currentPrice} </td>
                  <td>{share.shareHeld} units</td>
                  <td>
                    <img src={share.increase ? increase : decrease} alt="" />(
                    {share.priceMovement}%)
                  </td>
                  <td
                    className="row arrow-cont"
                    onClick={() => {
                      show(i);
                    }}
                  >
                    <img src={arrow} alt="arrow png" className="arrow" />
                    Sell
                  </td>
                </tr>
                {state.show && state.id == i ? (
                  <tr>
                    <td colspan={8}>
                      <section className="sell row">
                        <article className="part-1 row">
                          <div className="box">
                            <div className="box">
                              <h6>Successfully Funded</h6>
                              <p>Raised $345,678</p>
                            </div>
                            <div className="box">
                              <h6>Last Valuation</h6>
                              <p>$3,445,678</p>
                            </div>
                          </div>
                          <div className="box">
                            <div className="box">
                              <h6>Total Investors</h6>
                              <p>3,678</p>
                            </div>
                            <div className="box">
                              <h6>Available Shares</h6>
                              <p>5,678 units</p>
                            </div>
                          </div>
                        </article>
                        <div className="divider"></div>
                        <article className="info">
                          <p>Your share units will be listed on</p>
                          <p>the secondary Market. You will</p>
                          <p>receive notification when your</p>
                          <p>share has been purchased</p>
                        </article>
                        <article className="share row">
                          <div className="box">
                            <p>
                              Number of shares <br /> you will like to sell
                            </p>
                            <TextInput type="text" />
                          </div>
                          <div className="box">
                            <h6>Current Price</h6>
                            <p className="row">
                              <span> $0.23</span>{' '}
                              <img src={increase} alt="png" />
                            </p>
                            <HireLink>Sell Share</HireLink>
                          </div>
                        </article>
                      </section>
                    </td>
                  </tr>
                ) : null}
              </>
            ))}
          </tbody>
        </table>
      </section>
      <section className="secondSection">
        <div className="button">
          <BtnLink
            onClick={() => {
              show('project');
            }}
          >
            View Project Fund Raiser
          </BtnLink>
        </div>
        {state.show && state.id == 'project' ? (
          <article className="project">
            <div className="part-one">
              <div className="heading row">
                <div className="txt">
                  <p>Project Name</p>
                  <p>Category</p>
                </div>
                <HireLink hallwidth="6rem">Edit</HireLink>
              </div>
              <div className="progress">
                <ProgressBar completed={19} ht="10px" rd="0" />
              </div>
              <div className="raised">
                <div className="row">
                  <p>Raised -</p>
                  <p>$97,000(19%)</p>
                </div>
                <div className="divider"></div>
                <div className="row">
                  <p>Investors - </p>
                  <p> 36</p>
                </div>
                <div className="divider"></div>
                <div className="row">
                  <p>Days Left - </p>
                  <p> 29</p>
                </div>
                <div className="divider"></div>
                <div className="row">
                  <p>Target - </p>
                  <p> $500,000</p>
                </div>
              </div>
              <div className="update">
                <p>
                  Something new and fresh happened? Make Update on the Project?
                </p>
                <TextArea cols="30" rows="6" placeholder="Include an update" />
                <HireLink>Send Update</HireLink>
              </div>
            </div>
            <div className="part-two">
              <div className="head">
                <table>
                  <thead>
                    <tr>
                      <td>Top Investors</td>
                      <td>Raised</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>UserTop 1</td>
                      <td>$380</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="investors">
                <table>
                  <thead>
                    <tr>
                      <td>Investors</td>
                      <td>Raised</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>User001</td>
                      <td>$25</td>
                    </tr>
                    <tr>
                      <td>User002</td>
                      <td>$150</td>
                    </tr>
                    <tr>
                      <td>User003</td>
                      <td>$300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        ) : null}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 8rem 0;
  width: 80%;
  margin: 0 auto;
  font-size: 1.4em;
  color: ${colors.navBarBlue};
  a {
    border-radius: 0;
  }
  .name {
    margin-bottom: 5rem;
    h1 {
      font-size: 1.2em;
    }
    p {
      font-size: 0.9em;
    }
  }
  nav {
    display: flex;
    color: ${colors.colorWhite};
    margin-bottom: 3rem;
    P {
      background-color: ${colors.colorGreenGrey};
      padding: 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
    p:not(:last-child) {
      margin-right: 2rem;
    }
  }
  .content {
    background-color: ${colors.primaryColor};
    padding: 3rem;
    margin-bottom: 5rem;
    table {
      width: 100%;
      border-collapse: collapse;
    }

    table tr td {
      padding: 10px 15px 5px 10px;
      img {
        cursor: pointer;
        width: 18px;
        margin-right: 1rem;
      }
      .arrow {
        width: 10px;
      }
    }
    table tr .arrow-cont {
      cursor: pointer;
    }
    table tr .row {
      align-items: center;
    }
    table tr td .sell {
      background-color: #fff;
      padding: 3rem 4rem;
      padding-left: 6rem;
      font-size: 0.8em;
      align-items: center;
      .part-1 {
        .box:nth-child(1) {
          margin-right: 2rem;
        }
        .box {
          .box:nth-child(1) {
            margin-bottom: 1.5rem;
          }
        }
      }
      .divider {
        width: 2px;
        height: 9rem;
        background-color: ${colors.colorGreenGrey};
        margin: 0 2rem;
      }
      .info {
        margin: 2rem;
      }
      .share {
        border: 1px solid ${colors.colorGreenGrey};
        padding: 2rem;

        a {
          font-weight: bold;
        }
        .box {
          P {
            margin-bottom: 1rem;
          }
          input {
            width: 10rem;
            padding: 1rem 1.5rem;
          }
        }
        .box:nth-child(1) {
          margin-right: 1rem;
        }
        .box:nth-child(2) {
          p {
            span {
              margin-right: 0.5rem;
            }
          }
        }
      }
    }

    table thead tr td {
      font-weight: bold;
      border-bottom: 1px solid ${colors.colorGreenGrey};
      padding-bottom: 20px;
    }
  }

  .secondSection {
    .button {
      margin-bottom: 4rem;
      a {
        font-weight: bold;
        border: 2px solid ${colors.navBarBlue};
      }
    }
    .project {
      display: grid;
      grid-template-columns: 2.5fr 1.1fr;
      grid-gap: 2rem;
      border-top: 1px solid ${colors.colorGreenGrey};
      padding: 5rem 0;
      .part-one {
        background-color: ${colors.primaryColor};
        padding: 2rem 2rem 3rem;
        .heading {
          align-items: flex-start;
          a {
            margin-left: auto;
            background-color: ${colors.colorGreenGrey};
            padding: 0.3rem 0.5rem;
          }
          .txt {
            P {
              font-weight: bold;
            }
            p:nth-child(2) {
              font-size: 1.1em;
              margin-bottom: 0.5rem;
            }
            p:nth-child(1) {
              font-size: 1.3em;
            }
          }
        }
        .progress {
          margin-bottom: 0.6rem;
        }
        .raised {
          display: flex;
          align-items: center;
          .divider {
            background-color: ${colors.navBarBlue};
            width: 2px;
            height: 25px;
            margin: 0 2rem;
          }
          .row {
            p:nth-child(1) {
              font-weight: bold;
            }
          }
        }
        .update {
          margin-top: 4rem;
          p {
            margin-bottom: 1rem;
            font-weight: bold;
          }
          textarea {
            margin-bottom: 2rem;
          }
        }
      }
      .part-two {
        table {
          width: 100%;
          border-collapse: collapse;
        }
        table tr td {
          padding: 7px 15px 5px 10px;
        }
        table thead tr td {
          font-weight: bold;
        }
        .head {
          background-color: ${colors.colorGreenDark};
          margin-bottom: 1rem;
          color: ${colors.colorWhite};
          padding: 1rem 2rem;
        }
        .investors {
          background-color: ${colors.primaryColor};
          padding: 1rem 2rem;
          table thead tr td {
            font-weight: bold;
            border-bottom: 1px solid ${colors.colorGreenGrey};
            padding-bottom: 20px;
          }
        }
      }
    }
  }
`;

export default Dashboard;
