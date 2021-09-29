import { BaseLayout } from '../layouts';
import { Highlights, Hero } from '../components/home';




const HomePage = () => {

  

  return (
    <BaseLayout>
      <Hero />

      <Highlights />
    </BaseLayout>
    
  )
}

export default HomePage;