import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Div = styled(motion.div)`
  color: ${(props) => (props.home ? ' red' : 'aliceblue')};
  text-align: center;
  font-size: 50px;
  padding-bottom: 500px;
  position: ${(props) => (props.home ? 'absolute' : 'relative')};
  top: 10px;
  /* position: relative;
  bottom: -50%;
  left: 50%;
  width: 100%; */
`

export const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`