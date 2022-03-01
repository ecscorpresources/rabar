import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import useActive from '../hooks/useActive';

function Tabs({ tabs = [], children }) {
  const arr = [];
  tabs.forEach((tab, index) => arr.push(index));

  const [active, changeActive] = useActive(arr);

  return (
    <Wrapper>
      <div className="tabTitle">
        {tabs.map((tab, index) => (
          <p
            key={index}
            onClick={() => {
              changeActive(index);
            }}
            className={
              typeof active !== 'undefined' && active[index] ? 'active' : ''
            }
          >
            {tab}
          </p>
        ))}
      </div>
      <div className="content">
        {React.Children.map(children, (Child) => {
          const index = parseInt(Child.key);

          // add changeActive to Child props
          const change = JSON.parse(JSON.stringify(Child.props));
          change.changeActive = changeActive;
          Object.preventExtensions(change);

          return typeof active !== 'undefined' && active[index] ? (
            <Wrapper>{React.cloneElement(Child, change)}</Wrapper>
          ) : null;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 100%;
  .tabTitle {
    display: flex;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9em;

    p {
      cursor: pointer;
      font-weight: bold;
      padding: 0.8rem 1.5rem;
      border: 1px solid ${colors.tabBorder};
    }
    p:not(:last-child) {
      margin-right: 1rem;
    }
    .active {
      background: ${colors.tabBorder};
      color: ${colors.colorWhite};
    }
  }
  .content {
    background-color: ${colors.colorWhite};
    height: 40rem;
    overflow-y: scroll;
  }
`;

export default Tabs;
