import styled from 'styled-components';
import { useState } from 'react';
import { PrimButton } from '../buttons';

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
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: (e.target.type !== 'checkbox') ? e.target.value : e.target.checked
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name *

        <input type="text" onChange={handleOnChange} name="fullName" value={form.fullName} placeholder="Your name" required/>
      </label>

      <label>
        E-mail *
        <input type="text" onChange={handleOnChange} name="email" value={form.email} placeholder="Your e-mail" required/>
      </label>

      <label>
        Message *
        <textarea onChange={handleOnChange} name="message" value={form.message} placeholder="Your message ..." required/>
      </label>
      <PrimButton type="submit" />
    </Form>
  )
}

export default ContactForm
