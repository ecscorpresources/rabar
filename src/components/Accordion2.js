import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import close from '../assets/img/58.png';
import open from '../assets/img/59.png';
import setting from '../assets/img/57.png';

function Accordion({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export const Tab2 = ({ title, Content = <></>, data, page, changeTabs }) => {
  return (
    <div className={data ? 'tab bg' : 'tab'}>
      <div className="header">
        <img src={setting} alt="setting png" />
        <h1>{title}</h1>
        {data ? (
          <img
            src={close}
            alt="close button png"
            onClick={() => changeTabs(page, false)}
            className="right"
          />
        ) : (
          <img
            src={open}
            alt="open button png"
            onClick={() => changeTabs(page, true)}
            className="right"
          />
        )}
      </div>
      {data ? (
        <div className="content">
          <Content />
        </div>
      ) : null}
    </div>
  );
};

const Wrapper = styled.section`
  .tab {
    margin-bottom: 1rem;
    .header {
      padding: 2rem;
      display: flex;
      align-items: center;
      background-color: ${colors.primaryColor};
      .right {
        margin-left: auto;
      }
      h1 {
        font-size: 1.2em;
        margin-left: 5rem;
      }
      img {
        cursor: pointer;
      }
    }
    .content {
      padding: 0 0.6rem;
      width: 70%;
      margin: 1rem 0;
    }
  }
`;

export default Accordion;
