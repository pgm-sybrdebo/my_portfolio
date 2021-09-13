import styled from 'styled-components';
import { Footer, Header } from '../components/layout';


const Container = styled.div`
  max-width: ${props => props.theme.width.elarge};
  margin: 0 auto;
`;
const MainLayout = styled.main`
  // max-width: ${props => props.theme.width.elarge};
  // margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: ${props => props.theme.width.medium}) {
    padding: 0 3rem;
  }
`;

const BaseLayout = ({children}) => {
  return (
    <Container>
      <Header />
      <MainLayout>
        { children }
      </MainLayout>
      <Footer />
    </Container>
  )
};

export default BaseLayout;