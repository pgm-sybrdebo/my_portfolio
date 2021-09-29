import styled from 'styled-components';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useView from '../hooks/useView';
import { BaseLayout } from '../layouts';
import { ContactDetails, ContactForm } from '../components/contact';

const Contact = styled.div`
  margin-top: 3rem;

  @media (min-width: ${props => props.theme.width.medium}) {
    display: flex;
    justify-content: space-between;
  }
`;

const ContactDetailsContainer = styled.div`
  @media (min-width: ${props => props.theme.width.medium}) {
    width: 48%;
  }
`;

const ContactFormContainer = styled(motion.div)`
  margin-top: 5rem;

  @media (min-width: ${props => props.theme.width.medium}) {
    margin-top: 0;
    width: 48%;
  }

`;

const Accent = styled.span`
  color: ${props => props.theme.colors.primaryAccentColor};
  font-size: ${props => props.theme.fontSizes.emedium};

    @media (min-width: ${props => props.theme.width.medium}) {
      font-size: ${props => props.theme.fontSizes.large};
    }
`;

const ContactPage = () => {

  const { ref, inView }=  useInView();
  const animation = useView(inView);
  
  return (
    <BaseLayout>
      <h1>Get in <Accent>touch</Accent> — let’s work together.</h1>
      <Contact>
        <ContactDetailsContainer>
          <h2>Contact details</h2>

          <ContactDetails />
        </ContactDetailsContainer>

        <ContactFormContainer ref={ref} animate={animation} >
          <h2>Send me a message</h2>

          <ContactForm />
        </ContactFormContainer>
      </Contact>
      
      
    </BaseLayout>
  )
}

export default ContactPage;

