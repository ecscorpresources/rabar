import React from 'react';
import styled from 'styled-components';

import colors from '../../config/colors';
import {
  EQUALGRID,
  GRID,
  HireLink,
  Select,
  Social,
  TextInput,
} from '../styledComponents';
import add from '../../assets/img/72.png';

function CompleteReg() {
  return (
    <Wrapper>
      <section className="indexSection">
        <div className="heading">
          <h1>Upload an Idea & Start a Campaign</h1>
        </div>
      </section>
      <section className="secondSection">
        <form action="">
          <h1>Complete the registration process</h1>
          <div className="nick">
            <EQUALGRID>
              <TextInput type="text" placeholder="Write a nick name" />
              <div className="row">
                <div className="box">
                  <p>Name Available</p>
                  <p>Name Unavailable</p>
                </div>
                <div className="box">
                  <p>Suggested Name</p>
                  <p>Name023</p>
                </div>
              </div>
            </EQUALGRID>
          </div>
          <EQUALGRID>
            <TextInput
              type="text"
              placeholder="First
              Name"
            />
            <TextInput
              type="text"
              placeholder="Last
              Name"
            />
          </EQUALGRID>
          <EQUALGRID>
            <Select>
              <option value="">Gender</option>
            </Select>
            <TextInput type="text" placeholder="Date Of Birth" />
          </EQUALGRID>
          <EQUALGRID>
            <TextInput type="email" placeholder="Email" />
            <Social type="text" placeholder="+234" phone={true} />
          </EQUALGRID>
          <EQUALGRID>
            <Select>
              <option value="">Country</option>
            </Select>
            <TextInput type="text" placeholder="State/Province" />
          </EQUALGRID>
          <GRID>
            <TextInput type="text" placeholder="Address" />
          </GRID>
          <div className="work row">
            <div className="row">
              <input type="radio" name="work" id="" />
              <label>I work for someone</label>
            </div>
            <div className="row">
              <input type="radio" name="work" id="" />
              <label>I work for myself</label>
            </div>
          </div>
          <div className="occupation">
            <EQUALGRID>
              <div className="box">
                <label htmlFor="occupation">State Occupation/Business</label>
                <TextInput type="text" placeholder="Occupation" />
              </div>
              <div className="box">
                <label htmlFor="range">State Income Range Annually</label>
                <Select>
                  <option value="">Less than $5000</option>
                </Select>
              </div>
            </EQUALGRID>
            <EQUALGRID>
              <div className="upload row">
                <p>Upload Govt. Approved Valid ID</p>
                <img src={add} alt="add button png" />
              </div>
              <TextInput type="text" placeholder="Enter ID No." />
            </EQUALGRID>
          </div>
          <div className="button">
            <HireLink>Upload Profile</HireLink>
          </div>
        </form>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.4em;
  color: ${colors.navBarBlue};

  .indexSection {
    background-color: ${colors.colorDarkBlue};
    margin-bottom: 4rem;
    .heading {
      width: 60%;
      margin: 0 auto;
      display: flex;
      align-items: flex-end;
      height: 24vh;
      padding-bottom: 1rem;
      color: ${colors.colorWhite};
      h1 {
        font-size: 1.8em;
      }
    }
  }
  .secondSection {
    form {
      width: 60%;
      background-color: ${colors.primaryColor};
      padding: 3rem 5rem;
      margin: 0 auto 6rem;
      .button {
        margin: 5rem 0;
        a {
          border-radius: 0;
        }
      }
      h1 {
        font-size: 1.2em;
        margin-bottom: 1.5rem;
      }
      label {
        font-weight: bold;
        margin-bottom: 0.8rem;
      }
      .nick {
        align-items: center;
        .row {
          margin-bottom: 0.5rem;
          p {
            font-style: italic;
            font-size: 0.9em;
          }
          .box:nth-child(1) {
            margin-right: 3rem;
            p:nth-child(1) {
              color: ${colors.colorGreen};
            }
            p:nth-child(2) {
              color: ${colors.colorRed};
            }
          }
        }
      }
      .upload {
        align-items: center;
        justify-content: space-between;
        border: 1px dashed ${colors.colorLightGreen};
        padding: 1.5rem 1rem;
        margin-right: 1rem;
        border-radius: 6px;
        cursor: pointer;
      }
      .work {
        padding: 3rem 2rem;
        .row {
          align-items: center;
          label {
            margin-bottom: 0;
          }
          input {
            margin-right: 1rem;
          }
        }
        .row:not(:last-child) {
          margin-right: 2rem;
        }
      }
    }
  }
`;

export default CompleteReg;
