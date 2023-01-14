import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RafalamaoSvg = styled(motion.svg)`

  position: relative;
  display: block;
  margin: auto;

  padding-top: 1%;

  /* Se accede a una etiqueta hijo */
  & path {
    /* stroke: #ffffff;
    fill: #000000; */
    /* stroke-width: 8px; */
  }

  &:hover path {
    stroke: red;
    fill: green;
  }
`

export const Path = styled(motion.path)`

`

export default styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
})``