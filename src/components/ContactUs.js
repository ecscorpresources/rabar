import React from 'react';
import styled from 'styled-components';

import contact from '../assets/img/contact.png';

export default function ContactUs() {
  return (
    <Wrapper>
      <div className="info">
        <div className="img-container">
          <img src={contact} alt="contact" />
        </div>
        <div className="txt">
          <h2>Contact Us</h2>
          <p>
            For enquiry, feel free to contact us. We have our professionals
            always ready to be of assistance
          </p>
        </div>
      </div>
      <form>
        <div className="row">
          <input type="text" name="Firstname" placeholder="First Name" />
          <input type="text" name="" id="Lastname" placeholder="Last Name" />
        </div>
        <div className="row">
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="tel" id="" placeholder="Phone No" />
        </div>
        <textarea
          name="message"
          cols="40"
          rows="6"
          placeholder="What would you like to Know"
        ></textarea>
        <button type="submit">SEND ENQUIRY</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 2rem auto;
  font-size: 1.2em;
  .info {
    display: flex;
    justify-content: center;
    .txt {
      width: 60%;
      margin-left: 1.5rem;
      h2 {
        font-weight: bold;
        margin-bottom: 1rem !important;
        font-size: 1.5em;
      }
      p {
        font-size: 0.9em;
      }
    }
  }
  form {
    flex: 0 0 45%;
    padding: 4rem;
    background-color: #f7f7f7;
    .row {
      display: grid;
      grid-template-columns: 250px 250px;
      grid-gap: 0.2rem;
      margin-bottom: 1rem;
      margin-left: 0.1rem;
      justify-content: center;
    }
    input {
      padding: 1rem 1rem;
      width: 94%;
      border: 1px solid #d8d5a0;
      &:focus {
        outline: none;
      }
    }
    textarea {
      padding: 1rem 2rem;
      display: block;
      width: 100%;
      border: 1px solid #d8d5a0;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem 2rem;
      margin-top: 1rem;
      background-color: #d8d5a0;
      color: #6b7d87;
      border: none;
      font-weight: bold;
    }
    &:focus {
      outline: none;
    }
  }
`;
