import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  height: 100vh;
  /* padding-top: 1%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const H1 = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  font-family: ${(props) => (props.theme.fonts.menInBlack)};

  @media ${(props) => (props.theme.breakpoints.sm)} {
    font-size: 30px;
  }
`

export const Button = styled.button`
  border: none;
  color: white;
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
  display: block;
  font-size: 30px;
  width: 200px;
  margin: 20px 0 20px 0;
  padding: 10px;
  font-family: ${(props) => (props.theme.fonts.menInBlack)};
  cursor: pointer;

  transition: transform .4s;

  &:hover {
    color: #ff0000;

    transform: scale(1.05);
  }

  @media ${(props) => (props.theme.breakpoints.sm)} {
    font-size: 20px;
    width: 150px;
  }
`