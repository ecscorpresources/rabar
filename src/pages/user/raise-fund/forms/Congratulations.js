import React from 'react';
import styled from 'styled-components';

import { HireLink } from '../../../../components/styledComponents';
import colors from '../../../../config/colors';

function Congratulations() {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Wrapper>
      <section className="heading">
        <h1>Congratulations</h1>
        <div className="txt">
          <p>You are closer to that dream being realized more than ever</p>
          <p>
            Your campaign has been successfully uploaded and will be published
            as soon as <br /> all checks are completed
          </p>
        </div>
      </section>
      <div className="button">
        <HireLink to="supports">How can I run a successful campaign</HireLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .heading {
    padding-left: 5rem;
    h1 {
      margin-bottom: 0.3rem !important;
    }
    p:nth-child(1) {
      font-weight: bolder;
      margin-bottom: 1rem;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    margin-top: 6rem !important;
    margin-bottom: 6rem !important;
    a {
      background-color: ${colors.buttonBackground} !important;
      width: 50%;
    }
  }
`;

export default Congratulations;
