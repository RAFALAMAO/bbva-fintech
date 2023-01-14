import React from 'react'
import { Svg } from './ReactIconStyles';
import { motion } from 'framer-motion';

const svgVariants = {
    hidden: {
        x: '100px',
        y: '-100px',
        opacity: 0
    },
    show: {
        x: '0px',
        y: '0px',
        opacity: 1,
        transition: {
            delay: .5,
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

const reactScale = 0.5;

export default function ReactIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      viewBox="-10 -6 23 20.46348"

      variants={svgVariants}
      initial='hidden'
      animate='show'
    >
      <title>React Logo</title>
      <motion.circle
        variants={svgVariants}
        initial='hidden'
        animate='show'
        cx="0" cy="0" r={String(2.05*reactScale)} fill="none" stroke="#61dafb" stroke-width=".2px"/>
      <motion.g
        variants={{
          hidden: {
              rotate: 0
          },
          show: {
              rotate: -360,
              transition: {
                  delay: .5,
                  duration: 10,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop'
              }
          }
        }}
        initial='hidden'
        animate='show'
        stroke="#61dafb" stroke-width={String(.5*reactScale)} fill="none">
        <ellipse rx={String(11*reactScale)} ry={String(4.2*reactScale)} />
        <ellipse rx={String(11*reactScale)} ry={String(4.2*reactScale)} transform="rotate(60)" />
        <ellipse rx={String(11*reactScale)} ry={String(4.2*reactScale)} transform="rotate(120)" />
      </motion.g>
    </Svg>
  );
}
