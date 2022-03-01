import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../config/colors';

const documents = [
  {
    name: 'Document Name 1',
  },
  {
    name: 'Document Name 2',
  },
  {
    name: 'Document Name 3',
  },
];

function Documents() {
  return (
    <Wrapper>
      {documents.map((doc, index) => (
        <Document data={doc} key={index} />
      ))}
    </Wrapper>
  );
}

const Document = ({ data }) => {
  return (
    <div className="doc">
      <h5>{data.name}</h5>
      <Link>Download Document</Link>
    </div>
  );
};

const Wrapper = styled.section`
  padding: 2.5rem;
  padding-left: 3.5rem;
  .doc {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    h5 {
      margin-right: 2rem;
    }
    a {
      text-decoration: none;
      padding: 0.4rem 2rem;
      background-color: ${colors.tabBorder};
      color: ${colors.navBarBlue};
      font-size: 0.9em;
      font-weight: bold;
    }
  }
`;

export default Documents;
