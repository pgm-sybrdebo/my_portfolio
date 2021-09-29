import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';


const useView = (inView) => {
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 0.8
        }
      });
    }
    if (!inView) {
      animation.start({
          y: 80,
          opacity: 0,
      });
    }
  }, [inView, animation])
  
  return animation;
}

export default useView;
