import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  height: 100hv;
  padding-top: 1%;
`
export const H1 = styled.h1`
  text-align: center;
  font-size: 50px;
  font-family: ${(props) => (props.theme.fonts.menInBlack)};
  @media ${(props) => (props.theme.breakpoints.sm)} {
    font-size: 40px;
  }
  @media ${(props) => (props.theme.breakpoints.md)} {
    font-size: 45px;
  }
`
export const Desc = styled.div`
  width: 90%;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 auto;
`

export const P = styled.p`
  line-height: 1.5;
  font-size: 15px;
  width: 80%;
  text-align: justify;
  font-family: ${(props) => (props.theme.fonts.mono)};

  @media ${(props) => (props.theme.breakpoints.md)} {
    font-size: 12px;
  }

  @media ${(props) => (props.theme.breakpoints.sm)} {
    font-size: 8px;
  }
`