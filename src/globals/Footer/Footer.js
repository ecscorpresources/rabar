import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../config/colors';
import { link1, link2, link3, link4 } from '../../constants/footerlinks';
import footericons from '../../constants/footericons';

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="row first_row">
          <div className="box">
            <div>
              <ul>
                {link1.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="box">
            <div>
              <ul>
                {link2.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="box">
            <div>
              <ul>
                {link3.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row social">
          <div className="">
            <ul className="socials">
              {footericons.map((icon, index) => (
                <li key={index}>
                  <Link to={icon.url}>
                    <img src={icon.img} alt="social network" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} CrowdFunding. All Rights Reserved
        </p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  footer {
    background-color: ${colors.footer};
    color: ${colors.textColor};
  }

  .box:not(:last-child) {
    margin-right: 12rem;
  }

  .heading {
    h1 {
      font-size: 1.5em;
      margin-bottom: 1rem;
    }
  }

  footer .row.first_row {
    justify-content: center;
    padding: 50px 0 10px 0;
  }

  footer ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  footer ul li {
    padding-bottom: 5px;
  }

  footer ul li a {
    color: ${colors.textColor};
    text-decoration: none !important;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  footer p {
    text-align: center;
    font-size: 1.45rem;
    padding-bottom: 20px;
    margin-bottom: 0;

    @media screen and(max-width:768px) {
      text-align: left;
    }
  }

  footer .row.social {
    justify-content: center;
    padding: 20px 0;
  }

  footer .row.social ul li {
    display: inline;
    margin-right: 20px;
  }
`;

export default Footer;
