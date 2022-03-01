import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import add from '../../../../assets/img/72.png';
import {
  EQUALGRID,
  GRID,
  HireLink,
  Select,
  Social,
  TextArea,
  TextInput,
} from '../../../../components/styledComponents';
import colors from '../../../../config/colors';

function Team({ changeActive }) {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Wrapper>
      <section className="heading">
        <h1>Who is running the game?</h1>
        <div className="txt">
          <p>Let investors know who is behind the project</p>
          <p>this help them know that their funds are well managed</p>
        </div>
      </section>
      <form>
        <div className="add-member">
          <Link>
            <img src={add} alt="add button png" />
            Add Team Member
          </Link>
        </div>
        <div className="row cont">
          <div className="logo">+</div>
          <h3>
            Add <br /> Company <br /> Logo
          </h3>
        </div>
        <EQUALGRID>
          <TextInput type="text" placeholder="First Name" />
          <TextInput type="text" placeholder="Last Name" />
        </EQUALGRID>
        <EQUALGRID>
          <Select>
            <option value="">Position</option>
          </Select>
          <Social type="text" placeholder="LinkedIn URL" linkedin={true} />
        </EQUALGRID>
        <EQUALGRID>
          <Social type="text" placeholder="Facebook URL" facebook={true} />
          <Social type="text" placeholder="Youtube URL" facebook={false} />
        </EQUALGRID>
        <EQUALGRID>
          <Social type="text" placeholder="Twitter URL" twitter={true} />
          <Social type="text" placeholder="Instagram URL" instagram={true} />
        </EQUALGRID>
        <GRID>
          <TextArea
            col="30"
            rows="6"
            placeholder="write a little bio/profile about this team member"
          />
        </GRID>
        <div className="right">
          <p>Max 250 characters</p>
        </div>
        <div className="members">
          <div className="right">
            <p>Added Successfully</p>
          </div>
          <div className="added">
            <h1>Teams Added</h1>
            <div className="box">
              <h3>Executive 1</h3>
              <h3>#FIrst Name #Last Name</h3>
              <p>Bio or profile is added in theis position</p>
            </div>
            <div className="box">
              <h3>Executive 2</h3>
              <h3>#FIrst Name #Last Name</h3>
              <p>Bio or profile is added in theis position</p>
            </div>
          </div>
        </div>
      </form>
      <div className="button">
        <HireLink
          onClick={() => {
            changeActive('fund');
          }}
        >
          Proceed
        </HireLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
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
  form {
    .add-member {
      display: flex;
      justify-content: flex-end;
      a {
        text-decoration: none;
        padding: 1rem;
        background-color: ${colors.colorLightGreen};
        display: flex;
        align-items: center;
        color: ${colors.navBarBlue};
        font-weight: bold;
        img {
          margin-right: 0.6rem;
        }
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
    }
    .members {
      .right {
        color: ${colors.colorGreen};
        margin-top: 1rem;
      }
      .added {
        padding: 4rem 2rem;
        background-color: ${colors.colorLightGreen};
        margin: 3rem 0;
        border: 1px solid ${colors.navBarBlue};
        border-radius: 3px;
        .box:not(:last-child) {
          margin-bottom: 3rem;
        }
      }
    }
  }
`;

export default Team;
