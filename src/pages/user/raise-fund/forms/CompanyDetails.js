import React from 'react';
import styled from 'styled-components';

import {
  EQUALGRID,
  GRID,
  HireLink,
  Select,
  Social,
  TextInput,
} from '../../../../components/styledComponents';
import colors from '../../../../config/colors';

function CompanyDetails({ changeActive }) {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Wrapper>
      <section className="heading">
        <h1>Input company basic details</h1>
        <div className="txt">
          <p>Provide the most recent details of your company</p>
          <p>investors will like to put a face where there money is going to</p>
        </div>
      </section>
      <form>
        <div className="row cont">
          <div className="logo">+</div>
          <h3>
            Add <br /> Company <br /> Logo
          </h3>
        </div>
        <EQUALGRID>
          <TextInput type="text" placeholder="Company Name" />
          <Social type="text" placeholder="Website" web={true} />
        </EQUALGRID>
        <EQUALGRID>
          <TextInput type="text" placeholder="Reg ID" />
          <TextInput type="text" placeholder="dATE of Incorporation" />
        </EQUALGRID>
        <EQUALGRID>
          <TextInput type="email" placeholder="Company Email" />
          <TextInput type="text" placeholder="+234 123 456 7819" />
        </EQUALGRID>
        <div className="location">
          <h1>Current Company Location</h1>
          <EQUALGRID>
            <Select>
              <option value="">Country</option>
            </Select>
            <TextInput type="text" placeholder="State/Province" />
          </EQUALGRID>
          <GRID>
            <TextInput type="text" placeholder="Address" />
          </GRID>
        </div>
        <div className="social">
          <h1>Company Media Pages</h1>
          <EQUALGRID>
            <Social type="text" placeholder="Facebook URL" facebook={true} />
            <Social type="text" placeholder="Youtube URL" facebook={false} />
          </EQUALGRID>
          <EQUALGRID>
            <Social type="text" placeholder="Twitter URL" twitter={true} />
            <Social type="text" placeholder="Instagram URL" instagram={true} />
          </EQUALGRID>
        </div>
      </form>
      <div className="button">
        <HireLink
          onClick={() => {
            changeActive('project');
          }}
        >
          Proceed
        </HireLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  form {
    .location {
      margin: 3rem 0;
    }
  }
  .cont {
    align-items: center;
    margin-bottom: 3rem;
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4rem;
      border: 1px solid ${colors.colorGreenGrey};
      font-size: 2rem;
      color: ${colors.colorLightGreen};
      border-radius: 8px;
      margin-right: 2rem;
      cursor: pointer;
    }
  }
`;

export default CompanyDetails;
