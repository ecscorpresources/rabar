import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../config/colors';
import facebook from '../../assets/img/10.png';
import instagram from '../../assets/img/11.png';
import twitter from '../../assets/img/12.png';
import logo from '../../assets/img/35.png';
import { HireLink } from '../../components/styledComponents';
import useActive from '../../hooks/useActive';
import bullish from '../../assets/img/36.png';
import Categories from '../../globals/toolbar/Categories';

const share = [
  {
    quantity: 300,
    price: 1.2,
    amt: 360,
  },
  {
    quantity: 300,
    price: 1.2,
    amt: 360,
  },
  {
    quantity: 300,
    price: 1.2,
    amt: 360,
  },
];

function Share() {
  const [active, changeActive] = useActive(['market', 'company']);
  return (
    <Wrapper>
      <Categories />
      <article className="indexSection">
        <div className="container">
          <div className="row details">
            <div className="box">
              <p>Company Name</p>
              <p>innovation & Technology</p>
            </div>
            <div className="box">
              <p>Company Reg No.</p>
              <p>ABC/1234/EF</p>
            </div>
            <div className="box">
              <p>Date of Incorporation</p>
              <p>11 April, 2019</p>
            </div>
            <div className="box">
              <div className="row">
                <img src={facebook} alt="facebook png" />
                <img src={instagram} alt="instagram png" />
                <img src={twitter} alt="twitter png" />
              </div>
              <p>www.companyname.co.ng</p>
            </div>
          </div>
          <div className="introduction row">
            <div className="img-container">
              <img src={logo} alt="logo png" />
            </div>
            <div className="txt">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                dolores, quo qui saepe maiores quam molestias officia. Corporis
                veritatis assumenda incidunt labore quia assumenda incidunt
                labore
              </p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="funded row">
            <div className="box">
              <p>Successfully Funded</p>
              <p>Raised $348,233</p>
            </div>
            <div className="box">
              <p>Total Investors</p>
              <p>3,283</p>
            </div>
            <div className="box">
              <p>Available Shares</p>
              <p>2445 units</p>
            </div>
            <div className="box">
              <p>Last Valuation</p>
              <p>$3,733,657</p>
            </div>
          </div>
        </div>
        <div className="tabNav row">
          <p
            className={
              typeof active !== 'undefined' && active.market ? 'active' : ''
            }
            onClick={() => {
              changeActive('market');
            }}
          >
            Market
          </p>
          <p
            className={
              typeof active !== 'undefined' && active.company ? 'active' : ''
            }
            onClick={() => {
              changeActive('company');
            }}
          >
            About Company
          </p>
        </div>
        <div className="tabs">
          {typeof active !== 'undefined' && active.market ? (
            <Market data={share} />
          ) : (
            <Company />
          )}
        </div>
      </article>
      <article className="secondSection">
        <div className="operation">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            alias aliquam magnam esse minima eveniet deserunt porro iure, sunt
            nam, error suscipit modi qui eos amet possimus praesentium ipsam.
            Amet! <Link>"Secondary Market Terms & Conditions"</Link>
          </p>
        </div>
        <div className="movement">
          <h1>Price Movement</h1>
          <div className="box">
            <p className="heading">Previous Share Price</p>
            <div className="row">
              <p>$0.83</p>
              <p>14/10/2020</p>
            </div>
          </div>
          <div className="box">
            <p className="heading">Current Share Price</p>
            <div className="row">
              <p>$1.24</p>
              <p>27/10/2020</p>
            </div>
          </div>
          <div className="bull row">
            <img src={bullish} alt="bull png" />
            <p>(66.9%)</p>
            <p>Bullish</p>
          </div>
        </div>
      </article>
    </Wrapper>
  );
}

const Market = ({ data }) => {
  return (
    <div className="market">
      <table>
        <thead>
          <tr>
            <td>Quantity</td>
            <td>Share Price Offered</td>
            <td>Amount</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.map((share, i) => (
            <tr key={i}>
              <td>{share.quantity}</td>
              <td>${share.price}</td>
              <td>${share.amt}</td>
              <td></td>
              <td>
                <HireLink>Purchase</HireLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Company = () => {
  return (
    <div className="company">
      <p>Company Info</p>
    </div>
  );
};

const Wrapper = styled.section`
  padding-left: 330px;
  padding-right: 2rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  font-size: 1.4em;
  color: ${colors.navBarBlue};
  .indexSection {
    .tabNav {
      padding: 2rem;
      background-color: ${colors.colorGreyLight};
      margin-bottom: 2rem;
      p {
        font-weight: 800;
        padding-bottom: 0.6rem;
        cursor: pointer;
      }
      p:not(:last-child) {
        margin-right: 2rem;
      }
      .active {
        border-bottom: 4px solid ${colors.navBarBlue};
      }
    }
    .tabs {
      padding: 2rem;
      background-color: ${colors.colorGreyLight};
      margin-bottom: 2rem;
      height: 300px;
      overflow-y: scroll;
      .market {
        padding: 2rem;
        table {
          width: 100%;
          border-collapse: collapse;
        }

        table thead tr td {
          font-weight: bold;
          border: none;
        }

        table tr td {
          padding: 7px 10px 7px 10px;
        }
        a {
          display: block;
          background-color: ${colors.colorSky};
          border-radius: 0;
          color: ${colors.navBarBlue};
          font-weight: bold;
        }
      }
    }
    .container {
      padding: 2rem;
      background-color: ${colors.colorGreyLight};
      margin-bottom: 2rem;
      .details {
        align-items: center;
        margin-bottom: 1.5rem;
        .box:not(:last-child) {
          margin-right: 3rem;
        }
        p {
          font-size: 0.8em;
        }
        .box:nth-child(1) {
          p:first-of-type {
            font-size: 1.4em;
          }
          p:nth-child(2) {
            font-weight: bold;
          }
        }
        .box:nth-child(2),
        .box:nth-child(3) {
          p:nth-child(1) {
            font-weight: bold;
          }
        }
        .box:nth-child(4) {
          .row {
            margin-left: auto;
            margin-bottom: 1rem;
            img:not(:last-child) {
              margin-right: 0.5rem;
            }
          }
        }
      }
      .introduction {
        align-items: center;
        margin-bottom: 1.5rem;
        .img-container {
          margin-right: 1.5rem;
        }
        .txt {
          width: 70%;
          p:nth-child(1) {
            margin-bottom: 1rem;
          }
        }
      }
      .funded {
        p {
          font-size: 0.8em;
        }
        .box:not(:last-child) {
          margin-right: 4rem;
        }
        .box {
          p:first-of-type {
            font-weight: bold;
          }
        }
      }
    }
  }
  .secondSection {
    padding: 3rem 2rem 2rem;
    background-color: ${colors.colorGreyLight};
    margin-bottom: 2rem;
    font-size: 0.9em;
    height: 450px;
    .operation {
      padding-bottom: 2rem;
      border-bottom: 4px solid ${colors.colorWhite};
    }
    .bull {
      background-color: ${colors.dashboardBg};
      padding: 1rem 1rem;
      p {
        margin-left: 0.8rem;
      }
      p:nth-child(3) {
        color: ${colors.colorGreen};
        font-weight: bold;
      }
    }
    .movement {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 1.6rem;
        margin-bottom: 1rem;
      }
      .box {
        margin-bottom: 1rem;
        .heading {
          font-size: 1.2em;
          color: ${colors.colorLightBlue};
        }
        .row {
          justify-content: space-between;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export default Share;
