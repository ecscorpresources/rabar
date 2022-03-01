import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';

const ProgressBar = ({ bgcolor, completed, ht, rd }) => {
  return (
    <Wrapper completed={completed} bgcolor={bgcolor} ht={ht} rd={rd}>
      <div className="containerStyles">
        <div className="fillerStyles">
          <span className="labelStyles"></span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .containerStyles {
    height: ${(props) => (props.ht ? `${props.ht}` : '8px')};
    width: 100%;
    background-color: ${colors.colorGreyShade1};
    border-radius: ${(props) => (props.rd ? `${props.rd}%` : '50px')};
  }
  .fillerStyles {
    height: 100%;
    width: ${(props) => (props.completed ? `${props.completed}%` : '')};
    background-color: ${(props) =>
      props.bgcolor ? `${props.bgcolor}` : `${colors.buttonBackground}`};
    border-radius: inherit;
    text-align: right;
  }

  .labelStyles {
    padding: 5px;
    color: ${colors.colorWhite};
    font-weight: bold;
  }
`;

export default ProgressBar;
