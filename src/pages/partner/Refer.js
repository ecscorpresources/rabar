import React from 'react';
import styled from 'styled-components';

import {
  EQUALGRID,
  GRID,
  HireLink,
  Select,
  TextArea,
  TextInput,
} from '../../components/styledComponents';
import liknedIn from '../../assets/img/74.png';
import website from '../../assets/img/65.png';

function Refer() {
  return (
    <Wrapper>
      <EQUALGRID>
        <div className="box">
          <label htmlFor="contact">Entrepreneur Name</label>
          <TextInput type="text" placeholder="First Name" />
        </div>
        <TextInput type="text" placeholder="Last Name" />
      </EQUALGRID>
      <div className="contact">
        <EQUALGRID>
          <TextInput type="text" placeholder="Company Name" />
          <TextInput type="email" placeholder="Entrepreneur Email" />
        </EQUALGRID>
        <div className="social">
          <EQUALGRID>
            <TextInput type="text" placeholder="LinkedIn" />
            <TextInput type="text" placeholder="Website" />
          </EQUALGRID>
        </div>
      </div>
      <EQUALGRID>
        <div className="box">
          <label htmlFor="company">Referrer</label>
          <TextInput type="text" placeholder="Your Email" />
        </div>
        <TextInput type="email" placeholder="Referral ID" />
      </EQUALGRID>
      <p>If you do not have Referral ID then join now and become a partner</p>
      <HireLink>Submit</HireLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact {
    margin: 4rem 0 5rem;
  }
  p {
    margin-bottom: 4rem;
    font-size: 0.9em;
  }
  .social {
    input {
      padding: 1.5rem 38px;
    }
    input:nth-child(1) {
      background: url(${liknedIn});
      background-repeat: no-repeat;
      background-position-y: 40%;
      background-position-x: 2%;
    }
    input:nth-child(2) {
      background: url(${website});
      background-repeat: no-repeat;
      background-position: 2% center;
    }
  }
`;

export default Refer;
