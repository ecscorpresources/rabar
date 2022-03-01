import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BtnLink, HireLink } from '../../components/styledComponents';
import colors from '../../config/colors';
import Categories from '../../globals/toolbar/Categories';

import { SupportHero } from './Support';

function Article() {
  return (
    <Wrapper>
      <Categories />
      <SupportHero />
      <section className="indexSection row">
        <p>Support Center</p>
        <div className="dot"></div>
        <p>Raising funds for a project</p>
        <div className="dot"></div>
        <p>Article Topic One Here</p>
      </section>
      <section className="secondSection">
        <article className="related">
          <h1>Related Topics</h1>
          <ul>
            <li>
              <Link>Article topic one is here</Link>
            </li>
            <li>
              <Link>Article topic two is here</Link>
            </li>
            <li>
              <Link>Article topic three is here</Link>
            </li>
            <li>
              <Link>Article topic four is here</Link>
            </li>
          </ul>
        </article>
        <article className="article">
          <h1>Article Topic One Is Here</h1>
          <div className="txt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores voluptas in dolorem consequatur laudantium libero saepe
              blanditiis labore, mollitia velit unde veniam repellat inventore
              placeat harum totam culpa. Iste, possimus.
            </p>
          </div>
          <div className="txt">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              delectus corrupti eius aliquam aspernatur ullam eos suscipit
              accusantium quae voluptatum? Minus vitae voluptas ratione, vero
              sint ex porro accusamus illum!
            </p>
          </div>
          <div className="txt">
            <ul>
              <li>Fueling business growth is one of the main far</li>
              <li>Fueling business growth is one of the main far</li>
              <li>Fueling business growth is one of the main far</li>
              <li>Fueling business growth is one of the main far</li>
              <li>Fueling business growth is one of the main far</li>
            </ul>
          </div>
          <div className="txt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              nobis odio perferendis, voluptas vel sint autem, eius molestias ea
              cupiditate dolor ex esse incidunt eos vero, ipsum illo. Sint,
              ipsam!Commodi, quasi blanditiis molestias iusto deleniti inventore
              placeat dolorem facilis eos, quod aperiam quia, consequatur minima
              reiciendis eius nihil enim excepturi. Explicabo, autem et. Ullam
              explicabo molestiae sapiente placeat facilis?
            </p>
          </div>
        </article>
      </section>
      <section className="thirdSection">
        <h1>Was the article helpful?</h1>
        <div className="button">
          <BtnLink>No it wasn't</BtnLink>
          <BtnLink>it kind of</BtnLink>
          <HireLink>Yes it was</HireLink>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  color: ${colors.navBarBlue};
  font-size: 1.4em;
  .indexSection {
    align-items: center;
    padding: 2rem 0;
    padding-left: 350px;
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background-color: ${colors.colorGrey};
      margin: 0 2rem;
    }
  }
  .secondSection {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
    padding-left: 350px;
    margin: 1rem 0 3rem;
    .related {
      background-color: ${colors.primaryColor};
      padding: 2rem 2rem 4rem;
      height: 23rem;
      h1 {
        margin-bottom: 3rem;
      }
    }
    .article {
      padding: 3rem 5rem;
      background-color: ${colors.primaryColor};

      .txt {
        margin-bottom: 2rem;
        ul {
          padding-left: 5rem;
          li {
            list-style: disc;
          }
        }
      }

      h1 {
        font-size: 1.4em;
        margin-bottom: 4rem;
      }
    }
  }
  .thirdSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5rem 0;

    h1 {
      margin-bottom: 3rem;
    }
    a {
      font-weight: bold;
      color: ${colors.navBarBlue};
      border-radius: 0;
    }
    a:not(:last-child) {
      margin-right: 3rem;
    }
  }
`;

export default Article;
