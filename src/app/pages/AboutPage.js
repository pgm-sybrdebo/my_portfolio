import { BaseLayout } from '../layouts';
import { Hero, Work, Education, Technology } from '../components/about';

const AboutPage = () => {
  
  return (
    <BaseLayout>
      <Hero />

      <Work />

      <Education />

      <Technology />
      
    </BaseLayout>
  )
}

export default AboutPage;

