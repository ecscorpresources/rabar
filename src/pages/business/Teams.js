import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import facebook from '../../assets/img/77.png';
import twitter from '../../assets/img/78.png';
import linkedIn from '../../assets/img/79.png';
import ruth from '../../assets/img/80.png';
import david from '../../assets/img/81.png';
import eli from '../../assets/img/82.png';
import colors from '../../config/colors';
const teams = [
  {
    img: ruth,
    name: 'Ruth Daniel',
    office: 'CEO & Founder',
    social: [
      {
        img: facebook,
        link: '#',
      },
      {
        img: twitter,
        link: '#',
      },
      {
        img: linkedIn,
        link: '#',
      },
    ],
  },
  {
    img: david,
    name: 'David Adama',
    office: 'CTO',
    social: [
      {
        img: linkedIn,
        link: '#',
      },
    ],
  },
  {
    img: eli,
    name: 'Elizabeth Bridge',
    office: 'Network Administrator',
    social: [
      {
        img: linkedIn,
        link: '#',
      },
    ],
  },
];

function Teams() {
  return (
    <Wrapper>
      {teams.map((team) => (
        <Team data={team} />
      ))}
    </Wrapper>
  );
}

const Team = ({ data }) => {
  return (
    <div className="team">
      <div className="picture-profile">
        <div className="img-container">
          <img src={data.img} alt="png" />
        </div>
        <div className="details">
          <h5>{data.name}</h5>
          <p>{data.office}</p>
          <div className="social">
            {data.social.map((img, i) => (
              <Link to={img.link} key={i}>
                <img src={img.img} key={i} alt="png" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="brief">
        <p>
          A brief on the work and success profile of this executive is displayed
          here
        </p>
      </div>
    </div>
  );
};

const Wrapper = styled.section`
  padding: 2.5rem;
  .team {
    width: 90%;
    display: grid;
    grid-template-columns: 1.5fr 2.5fr;
    grid-gap: 3rem;
    padding: 3rem 0;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    .picture-profile {
      display: flex;
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
      .details {
        p {
          margin-bottom: 0.7rem;
        }
        .social {
          a:not(:last-child) {
            margin-right: 0.8rem;
          }
        }
      }
    }
  }
  .team:not(:last-child) {
    border-bottom: 1px solid ${colors.colorLightGreen};
  }
`;

export default Teams;
