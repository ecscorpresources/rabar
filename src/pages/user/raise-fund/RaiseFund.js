import React from 'react';
import styled from 'styled-components';

import colors from '../../../config/colors';
import company from '../../../assets/img/60.png';
import project from '../../../assets/img/61.png';
import team from '../../../assets/img/62.png';
import fund from '../../../assets/img/63.png';
import ProjectDetails from './forms/ProjectDetails';
import CompanyDetails from './forms/CompanyDetails';
import Team from './forms/Team';
import Funding from './forms/Funding';
import Congratulations from './forms/Congratulations';
import useActive from '../../../hooks/useActive';
function RaiseFund() {
  const [active, changeActive] = useActive([
    'company',
    'project',
    'team',
    'fund',
  ]);
  return (
    <Wrapper>
      <section className="indexSection">
        <div className="heading">
          <h1>Upload an Idea & Start a Campaign</h1>
        </div>
      </section>
      <section className="secondSection">
        <nav>
          <div className="cont row">
            <div className="row" onClick={() => changeActive('company')}>
              <img src={company} alt="img" />
              <p> Company Details</p>
            </div>
            <div className="row" onClick={() => changeActive('project')}>
              <img src={project} alt="img" />
              <p>Project Details</p>
            </div>
            <div className="row" onClick={() => changeActive('team')}>
              <img src={team} alt="img" />
              <p>Company Team</p>
            </div>
            <div className="row" onClick={() => changeActive('fund')}>
              <img src={fund} alt="img" />
              <p>Funding</p>
            </div>
          </div>
          <div className="progress-bar row">
            <div
              className={
                typeof active !== 'undefined' && active.company
                  ? 'progress active'
                  : 'progress completed'
              }
            ></div>
            <div
              className={
                typeof active !== 'undefined' && active.project
                  ? 'progress active'
                  : typeof active !== 'undefined' && active.company
                  ? 'progress'
                  : 'progress completed'
              }
            ></div>
            <div
              className={
                typeof active !== 'undefined' && active.team
                  ? 'progress active'
                  : typeof active !== 'undefined' &&
                    (active.company || active.project)
                  ? 'progress'
                  : 'progress completed'
              }
            ></div>
            <div
              className={
                typeof active !== 'undefined' && active.fund
                  ? 'progress active'
                  : typeof active !== 'undefined' &&
                    (active.company || active.project || active.team)
                  ? 'progress'
                  : 'progress completed'
              }
            ></div>
          </div>
        </nav>
      </section>
      <section className="thirdSection">
        {typeof active !== 'undefined' && active.company ? (
          <CompanyDetails changeActive={changeActive} />
        ) : typeof active !== 'undefined' && active.project ? (
          <ProjectDetails changeActive={changeActive} />
        ) : typeof active !== 'undefined' && active.team ? (
          <Team changeActive={changeActive} />
        ) : typeof active !== 'undefined' && active.fund ? (
          <Funding changeActive={changeActive} />
        ) : (
          <Congratulations />
        )}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.4em;
  color: ${colors.navBarBlue};
  .indexSection {
    background-color: ${colors.primaryColor};
    margin-bottom: 4rem;
    .heading {
      width: 60%;
      margin: 0 auto;
      display: flex;
      align-items: flex-end;
      height: 24vh;
      padding-bottom: 1rem;
      h1 {
        font-size: 1.8em;
      }
    }
  }
  .secondSection {
    width: 60%;
    margin: 0 auto;
    nav {
      align-items: center;
      border: 1px solid ${colors.colorGreenGrey};
      margin: 0rem 0 4rem;
    }

    .cont {
      padding: 2rem 0;
      justify-content: space-evenly;
      .row {
        align-items: center;
        cursor: pointer;
      }
    }
    .progress-bar {
      .progress {
        background-color: ${colors.colorWhite};
        width: 25%;
        height: 4px;
      }
      .progress:nth-child(1) {
        width: 29%;
      }
      .progress:nth-child(4) {
        width: 21%;
      }
      .completed {
        background-color: ${colors.colorGreen};
      }
      .active {
        background-color: ${colors.buttonBackground};
      }
    }
  }
  .thirdSection {
    width: 60%;
    margin: 0 auto;
    .button {
      margin: 5rem 0;
      a {
        background-color: ${colors.navBarBlue};
        border-radius: 0;
      }
    }
    .heading {
      margin: 3rem 0 4rem;
      h1 {
        font-size: 1.5em;
        font-family: 'OpenSans-Light';
        margin-bottom: 1rem;
      }
    }
    form {
      background-color: ${colors.primaryColor};
      padding: 3rem 5rem;
      margin: 0 auto;
      h1 {
        font-size: 1.1em;
        margin-bottom: 0.8rem;
      }
    }
  }
`;

export default RaiseFund;
