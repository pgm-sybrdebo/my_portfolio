import styled, { keyframes } from 'styled-components';
import { useRef, useState } from 'react';
import { PrimButton } from '../buttons';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { formConfig } from '../../config';

init(formConfig.userId);

const rotating = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;



const Form = styled.form`
  margin-top: 1.5rem;
  
  label {
    display: block;
    font-weight: ${props => props.theme.fontWeights.bold};
    margin-top: 1.5rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0rem;
      left: 0;
      width: 0;
      height: 3px;
      background-color: ${props => props.theme.colors.secondaryAccentColor};
      transition: all 0.5s ease;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0rem;
      right: 0;
      width: 0;
      height: 3px;
      background-color: ${props => props.theme.colors.primaryAccentColor};
      transition: all 0.5s ease;
    }
    
    &:hover {
      cursor: pointer;
      &::before {
        width: 100%;
      }
      
      &::after {
        width: 100%
      }
    }
  }

  input, textarea {
    display: block;
    width: 100%;
    margin-top: 1rem;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 3px solid ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.white};
  }

  textarea {
    height: 8rem;
  }
`;

const Loading = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 3rem auto 0 auto;
  background-color: transparent;
  border: 8px solid ${props => props.theme.colors.grey};
  border-radius: 100%;
  font-size: 0;
  border-left-color: ${props => props.theme.colors.secondaryAccentColor};
  animation: ${rotating} 2s linear infinite;
`;

const Validate = styled.div`
  color: ${props => props.theme.colors.secondaryAccentColor};
  font-size: 3rem;
  text-align: center;
  margin-top: 3rem;

  &:after {
    content:"\u2713";
  }
`;

const Error = styled.div`
  color: ${props => props.theme.colors.secondaryAccentColor};
  font-size: 3rem;
  text-align: center;
  margin-top: 3rem;

  &:after {
    content:"\u26A0";
  }
`;


const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [error, setError] = useState(false);
  
  const sendEmail = (e) => {
    setIsLoading(true);
    e.preventDefault();
    emailjs.sendForm(formConfig.serviceId, formConfig.templateId, form.current, formConfig.userId)
      .then((result) => {
          setIsValidated(true);
          time();
          setIsLoading(false);
          console.log(result.text);
      }, (error) => {
          setError(true);
          time();
          console.log(error.text);
          setIsLoading(false);
      });
      e.target.reset();
  };
  
  const time = () => {
    setTimeout(() => {
      setIsValidated(false);
      setError(false);
    }, 2000);
  } 

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <label>
        Name *

        <input type="text" name="name" placeholder="Your name" required/>
      </label>

      <label>
        E-mail *
        <input type="text" name="mail" placeholder="Your e-mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
      </label>

      <label>
        Message *
        <textarea name="message" placeholder="Your message ..." required/>
      </label>
      { !isLoading && !isValidated && <PrimButton type="submit" text={"Send message"} /> }

      { isLoading && <Loading /> }

      { isValidated && <Validate /> }

      { error && <Error /> }
    </Form>
  )
}

export default ContactForm
