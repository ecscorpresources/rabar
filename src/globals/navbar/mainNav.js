import React from 'react';
import styled from 'styled-components';

import Toolbar from '../toolbar/Toolbar';
import SideNav from '../sideBar/SideNav';

function Navbar() {
  return (
    <Wrapper>
      <SideNav />
      <Toolbar />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  z-index: 3333;
  position: relative;
`;

export default Navbar;
