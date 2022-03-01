import React from 'react';
import styled from 'styled-components';

import {
  EQUALGRID,
  HALFGRID,
  HireLink,
  Select,
  TextArea,
  TextInput,
} from '../../../../components/styledComponents';
import colors from '../../../../config/colors';
import add from '../../../../assets/img/72.png';

function Funding({ changeActive }) {
     React.useEffect(() => {
       window.scroll(0, 0);
     }, []);
  return (
    <Wrapper>
      <section className="heading">
        <h1>Let us Know how much you need</h1>
        <div className="txt">
          <p>
            Input the amount of funds you need for this project as well as any
          </p>
          <p>
            key information you think will assist investors in the right
            decision
          </p>
        </div>
      </section>
      <form action="">
        <div className="row amt">
          <Select>
            <option value="dollar">$</option>
          </Select>
          <div className="box">
            <TextInput type="text" placeholder="100,000" />
            <p>N30,000,000(N300/$1)</p>
          </div>
        </div>
        <div className="duration">
          <h1>Set Duration</h1>
          <HALFGRID>
            <Select>
              <option value="">30Days</option>
            </Select>
          </HALFGRID>
        </div>
        <div className="info">
          <h1>
            Is there any information about the project or the company that
          </h1>
          <h1>you will like to let the investors know</h1>
          <TextArea
            col="30"
            rows="7"
            placeholder="Other Important Information"
          />
        </div>
        <div className="market">
          <div className="row">
            <TextInput type="checkbox" />
            <h1>I will like the fund raising to end once the target is hit</h1>
          </div>
          <div className="row">
            <TextInput type="checkbox" />
            <h1>I want us listed on Secondary Market</h1>
          </div>
        </div>
      </form>
      <div className="legal">
        <h1>
          Add every legal & necessary document that proves the company is
          registered and <br /> worthy to carry out the business or project in
          which it is embarking on
        </h1>
      </div>
      <form>
        <EQUALGRID>
          <TextInput type="text" placeholder="Document Title" />
          <div className="document">
            <div className="upload row">
              <div className="upload-box row">
                <p>Upload</p>
                <img src={add} alt="add button png" />
              </div>
              <HireLink>Add Document</HireLink>
            </div>
          </div>
        </EQUALGRID>
        <div className="uploaded">
          <p>Document 1 successfully added</p>
          <p>Document 2 successfully added</p>
        </div>
      </form>
      <div className="agreement row">
        <TextInput type="checkbox" />
        <label>
          I agree to the Terms & Conditions regarding Starting a Campaign and
          ascertain that <br /> the information provided are genuine
        </label>
      </div>
      <div className="submit row">
        <HireLink
          hallwidth="15rem"
          onClick={() => {
            changeActive('');
          }}
        >
          Start Campaign
        </HireLink>
        <div className="txt">
          <p>
            Your campaign will take a period of xx days to review the documents
            and project of which
          </p>
          <p>
            thereafter, once approved will be published and notification will be
            sent to your mail
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  input[type='checkbox'] {
    width: 5%;
  }
  .right {
    display: flex;
    justify-content: flex-end;
  }
  .amt {
    align-items: flex-start;
    select {
      width: 10%;
      margin-right: 1rem;
    }
    input {
      width: 24rem;
    }
    .box {
      p {
        font-size: 0.8em;
        margin-left: auto;
        color: ${colors.colorBlue};
        margin-top: 0.5rem;
      }
    }
  }
  .info {
    h1:first-of-type {
      margin-bottom: 0;
    }
  }
  .market {
    .row {
      align-items: center;
      margin-top: 1.5rem;
      h1 {
        margin-bottom: 0;
      }
    }
  }
  .legal {
    padding: 2rem;
  }
  .uploaded {
    color: ${colors.colorGreen};
    p {
      font-style: italic;
      margin-bottom: 0.3rem;
    }
  }
  .upload {
    align-items: center;
    margin-bottom: 1rem;
    a {
      padding: 1.5rem 0.5rem;
      width: 38%;
      background-color: ${colors.colorLightGreen};
      border-radius: 0;
    }
    .upload-box {
      align-items: center;
      justify-content: space-between;
      border: 1px dashed ${colors.colorLightGreen};
      padding: 1.5rem 1rem;
      width: 56%;
      margin-right: 1rem;
      cursor: pointer;
    }
  }
  .agreement {
    padding: 2rem;
  }
  .submit {
    margin: 2rem 0 6rem;
    align-items: center;
    a {
      padding: 1rem 0.5rem;
      border-radius: 0;
      margin-right: 1rem;
    }
    p {
      font-size: 0.85em;
    }
  }
`;

export default Funding;
