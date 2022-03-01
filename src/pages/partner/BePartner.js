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

function BePartner() {
  return (
    <Wrapper>
      <EQUALGRID>
        <div className="box">
          <label htmlFor="partner">How do you want to partner?</label>
          <Select>
            <option>Accounting</option>
          </Select>
        </div>
        <div className="box">
          <label htmlFor="company">Company Name (if applicable)</label>
          <TextInput type="text" />
        </div>
      </EQUALGRID>
      <GRID>
        <div className="box">
          <label htmlFor="how">
            Specify any other way you think you can partner with us
          </label>
          <TextArea cols="30" rows="6" />
        </div>
      </GRID>
      <div className="contact">
        <EQUALGRID>
          <div className="box">
            <label htmlFor="contact">Contact Person</label>
            <TextInput type="text" placeholder="First Name" />
          </div>
          <TextInput type="text" placeholder="Last Name" />
        </EQUALGRID>
        <EQUALGRID>
          <TextInput type="email" placeholder="email" />
          <TextInput type="text" placeholder="Phone No" />
        </EQUALGRID>
        <div className="social">
          <EQUALGRID>
            <TextInput type="text" placeholder="LinkedIn" />
            <TextInput type="text" placeholder="Website" />
          </EQUALGRID>
        </div>
      </div>
      <HireLink>Submit</HireLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact {
    margin: 3rem 0 5rem;
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

export default BePartner;
