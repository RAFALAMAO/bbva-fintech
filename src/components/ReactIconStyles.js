import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Svg = styled(motion.svg)`

  /* position: relative;
  display: block;
  margin: auto;

  padding-top: 1%; */
  width: 45%;

  @media ${(props) => (props.theme.breakpoints.md)} {
    width: 90%;
    padding-top: 10%;
    /* padding-bottom: -20%; */
  }

  @media ${(props) => (props.theme.breakpoints.sm)} {
    width: 85%;
    padding-top: 10%;
    /* padding-bottom: -20%; */
  }

  /* Se accede a una etiqueta hijo */
  & path {
    /* stroke: #ffffff;
    fill: #000000; */
    /* stroke-width: 8px; */
  }

  &:hover circle {
    stroke: red;
    fill: none;
  }

  &:hover g {
    stroke: red;
    /* fill: red; */
  }
`

export const Path = styled(motion.path)`

`

export default styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
})``