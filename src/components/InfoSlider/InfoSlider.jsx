import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel'

// Assests
import ChicaCelImg1 from "../../assets/imgs/chica_usando_celular.png";
import HombreDelImg from "../../assets/imgs/hombre_con_delantal.png";
import ChicaCelImg2 from "../../assets/imgs/mujer_con_lente_usando_celular.png";

export default function InfoSlider() {
  const carrusel = [
    {id: 1, img: ChicaCelImg1},
    {id: 2, img: HombreDelImg},
    {id: 3, img: ChicaCelImg2},
  ]

  return (
    <div>
      <Carousel
        enableAutoPlay
        autoPlaySpeed={3000}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={1000}
      >
        {carrusel.map(item => <div
          key={item.id}
        >
          <img src={item.img} alt="" />
        </div>)}
      </Carousel>
    </div>
  )
}
