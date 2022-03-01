import React from 'react';
import styled from 'styled-components';

function Modal({ children, showModal, top }) {
  if (!showModal) return null;

  const getHeight = () => {
    let body = document.body,
      html = document.documentElement;
    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  };

  const height = getHeight();

  return (
    <BackDrop height={height} top={top}>
      <div className="modal">{children}</div>
    </BackDrop>
  );
}

const BackDrop = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  /* padding-bottom: 6rem; */
  background: rgba(100, 105, 111, 0.3);
  z-index: 5000;
  .modal {
    margin: 0 auto;
    margin-top: ${(props) => (props.top ? `${props.top}` : '6rem')};
    max-width: ${(props) => (props.width ? '' : '450px')};
  }
`;

export default Modal;
