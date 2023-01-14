import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RIcon from '../components/RIcon'
import { Rafalamao } from '../components/Rafalamao'
import { HomeContainer } from './HomeStyles'

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

export default class Home extends Component {
  render() {
    return (
      <HomeContainer variants={containerVariants} initial='hidden' animate='show'>
        <a href="/">
          <RIcon/>
        </a>
        <Link to={'/about'}>
          <Rafalamao/>
        </Link>
      </HomeContainer>
    )
  }
}
