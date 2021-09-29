import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useView from '../../hooks/useView';

const Text = ({text}) => {
  const { ref, inView }=  useInView();
  const animation = useView(inView);

  return (
    <motion.p ref={ref} animate={animation}>{text}</motion.p>
  )
}

export default Text
