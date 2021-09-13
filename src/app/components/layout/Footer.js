import styled from 'styled-components';

const FooterStyle = styled.footer`
  margin-top: 3rem;
  padding: 1.5rem;
`;

const Creator = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
`;


const Footer = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <FooterStyle>
      <Creator>© Sybren De Boever - {currentYear}</Creator> 
    </FooterStyle>
  )
}

export default Footer
