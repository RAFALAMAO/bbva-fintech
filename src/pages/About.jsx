import React, { Component } from 'react'
import { Arrow } from '../components/Arrow'
import ReactIcon from '../components/ReactIcon'
import Upiita from '../components/Upiita'
import { Container, Desc, H1, P } from './AboutStyles'

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "50vh"
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40
    }
  }
}

export default class About extends Component {
  render() {
    return (
      <Container variants={containerVariants} initial="hidden" animate="show">
        <H1>About</H1>
        <Desc>
          <P>
          I’m a Mechatronic Engineer at UPIITA from México, I love development, music and graphical design :3.

          <br/><br/>I worked one year and a half at Intevolution developing intelligent bots with Javascript, Azure and programing simple front-end interfaces. I made my social service and engineering final work at CINVESTAV Zacatenco developing with ROS some computer vision and mobile robot control nodes.

          <br/><br/>I started with C / C ++, then Matlab, LabView, JavaScript, Python, C #, Java. Currently I am programming mainly in React technology.
          </P>
          <div>
            <a href="https://www.upiita.ipn.mx/" target="_blank" rel="noreferrer">
              <Upiita/>
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <ReactIcon/>
            </a>
          </div>
        </Desc>
        <Arrow linkPath='extras'/>
      </Container>
    )
  }
}
