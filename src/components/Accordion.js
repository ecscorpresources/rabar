import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import close from '../assets/img/arrow-down.png';
import open from '../assets/img/arrow-up.png';

function Accordion({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export const Tab = ({ title, Content = <></>, data, page, changeTabs }) => {
  return (
    <div className={data ? 'tab bg' : 'tab'}>
      <div className="header">
        <h1>{title}</h1>
        {data ? (
          <img
            src={close}
            alt="close button png"
            onClick={() => changeTabs(page, false)}
          />
        ) : (
          <img
            src={open}
            alt="open button png"
            onClick={() => changeTabs(page, true)}
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
    padding: 2.5rem;
    border-bottom: 1px solid ${colors.colorGreyShade1};
    .header {
      padding: 0 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-size: 1em;
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
  .bg {
    background-color: ${colors.colorGreyShade1};
  }
`;

export default Accordion;
