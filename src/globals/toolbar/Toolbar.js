import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../config/colors';
import logo from '../../assets/img/logo.png';
import { Search } from '../../components/styledComponents';

function Toolbar() {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="logo" onClick={handleClick} />
      </div>
      <div className="links">
        <ul>
          <li>
            <Search
              type="text"
              border={colors.colorLightBlue}
              search
              radius="6px"
              width="40rem"
            />
          </li>
          <div className="right">
            <li>
              <Link to="/signup">REGISTER</Link>
            </li>
            <li>
              <Link to="/signin">LOGIN</Link>
            </li>
          </div>
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  align-items: center;
  color: ${colors.textColor};
  display: flex;
  font-size: 1.3em;
  padding: 0.7rem 8rem 0.7rem 8rem;
  background-color: ${colors.navBarBlue};
  .logo {
    cursor: pointer;
    margin-right: 20rem;
  }
  .links {
    width: 100%;
    ul {
      align-items: center;
      display: flex;
      position: relative;
      li {
        font-weight: 700;
        input {
          margin-right: 7rem;
          margin-bottom: 0 !important;
        }
        a {
          color: ${colors.colorWhite};
          font-weight: bold;
          text-decoration: none;
        }
      }
      .right {
        align-items: center;
        display: flex;
        margin-left: auto;
        a {
          border-bottom: 1px solid ${colors.colorWhite};
          padding-bottom: 0.3rem;
        }
      }
      li:not(:last-child) {
        margin-right: 1.5rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding-right: 3rem;
    .logo {
      margin-right: 0rem;
    }
    .links {
      margin-left: auto;
      li {
        input {
          display: none;
        }
      }
    }
  }
`;

export default Toolbar;
