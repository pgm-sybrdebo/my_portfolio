import styled from 'styled-components';
import { Footer, Header } from '../components/layout';


const Container = styled.div`
  // max-width: ${props => props.theme.width.elarge};
  // margin: 0 auto;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;
const MainLayout = styled.main`
  max-width: ${props => props.theme.width.elarge};
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

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