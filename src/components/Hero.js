import React from 'react';
import styled from 'styled-components';

import bg from '../assets/img/01.png';

function Hero({ img = bg, children, pos }) {
  return (
    <Wrapper img={img} pos={pos}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: ${(props) => (props.img ? `url(${props.img})` : '')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${(props) => (props.pos ? `${props.pos}` : '100%')};
  height: 27rem;
  margin: 1px 0 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    height: 32rem;
    align-items: center;
    background-position: 100%;
  }
`;

export default Hero;
