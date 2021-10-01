import styled from 'styled-components';
import { useRef } from 'react';
import { PrimButton } from '../buttons';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { formConfig } from '../../config';

init(formConfig.userId);

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


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(formConfig.serviceId, formConfig.templateId, form.current, formConfig.userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <label>
        Name *

        <input type="text" name="name" placeholder="Your name" required/>
      </label>

      <label>
        E-mail *
        <input type="text" name="mail" placeholder="Your e-mail" required/>
      </label>

      <label>
        Message *
        <textarea name="message" placeholder="Your message ..." required/>
      </label>
      <PrimButton type="submit" text={"Send message"} />
    </Form>
  )
}

export default ContactForm
