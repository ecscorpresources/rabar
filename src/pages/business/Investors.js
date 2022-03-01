import React from 'react';
import styled from 'styled-components';

import anon from '../../assets/img/84.png';
import bryan from '../../assets/img/83.png';
import eli from '../../assets/img/82.png';

const investors = [
  {
    name: 'Anonymous',
    amt: '3,000',
    img: anon,
  },
  {
    name: 'Elvis Bryan',
    amt: '5,000',
    img: bryan,
  },
  {
    name: 'Anonymous',
    amt: '50,000',
    img: anon,
  },
  {
    name: 'Elizabeth Bridge',
    amt: '1,000',
    img: eli,
  },
];

function Investors() {
  return (
    <Wrapper>
      {investors.map((investor) => (
        <Investor data={investor} />
      ))}
      {investors.map((investor) => (
        <Investor data={investor} />
      ))}
      {investors.map((investor) => (
        <Investor data={investor} />
      ))}
      {investors.map((investor) => (
        <Investor data={investor} />
      ))}
    </Wrapper>
  );
}

const Investor = ({ data }) => {
  return (
    <div className="investor">
      <div className="img-container">
        <img src={data.img} alt="png" />
      </div>
      <h5>{data.name}</h5>
      <p>${data.amt}</p>
    </div>
  );
};

const Wrapper = styled.section`
  padding: 2.5rem;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
  .investor {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-container {
      width: 84px;
      height: 84px;
      overflow: hidden;
      border-radius: 42px;
      margin-right: 1.4rem;
      img {
        width: 100%;
      }
    }
  }
`;

export default Investors;
