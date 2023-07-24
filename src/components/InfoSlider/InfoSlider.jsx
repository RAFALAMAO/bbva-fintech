import React, { useRef } from 'react'
import Carousel, {consts} from 'react-elastic-carousel'
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

// Assests
import SombreroImg from "../../assets/imgs/sombrero_papel.png";
import WebImg from "../../assets/imgs/web.png";
import ChicaCelImg1 from "../../assets/imgs/chica_usando_celular.png";
import ChicaCelImg2 from "../../assets/imgs/mujer_con_lente_usando_celular.png";

// Styles
import './infoSlider.css'

export default function InfoSlider() {
  const carrusel = [
    {
      id: 1,
      img: SombreroImg,
      title: 'INTRODUCCIÓN',
      text: `Sabemos lo complicado que es desarrollarte en el ambiente académico en cuanto al patrocinio de propuestas novedosas, por lo tanto, te proponemos algo que te podría interesar.`
    },
    {
      id: 2,
      img: ChicaCelImg1,
      title: 'PROPUESTA',
      text: `Realizar una convocatoria para que los alumnos de bachillerato, posgrado, etc. puedan darse a conocer con su mejor trabajo, con el fin de que se realice una selección de los mejores y estos puedan ser patrocinados para poder publicarse en alguna revista de interés.`
    },
    {
      id: 3,
      img: WebImg,
      title: 'PLATAFORMA',
      text: `En esta plataforma los interesados en participar se pueden registrar y a su vez subir el documento del artículo que competirá durante el plazo de selección a los 3 mejores trabajos. Además, existe el login por medio de roles para que un administrador pueda ver todos los documentos que se hayan registrado, así como información de cada uno de los trabajos.`
    },
    {
      id: 4,
      img: ChicaCelImg2,
      title: 'BENEFICIOS',
      text: `Interés de los estudiantes por BBVA, aumentar el semillero de posible talento a reclutar, dar a conocer el interés de la empresa por los estudiantes, incentivar a los alumnos a continuar con sus estudios.`
    },
  ]

  const orderCarousel = (item) => {
    if( item.id%2 === 0 ){
      return (
        <div className='home-carousel-content'>
          <div className='home-carousel-text'>
            <h1>{item.title}</h1>
            <h2>{item.text}</h2>
          </div>
          <div className='.home-carousel-content-img'>
            <img src={item.img} alt="" />
          </div>
        </div>
      )
    }else{
      return (
        <div className='home-carousel-content'>
          <div className='.home-carousel-content-img'>
            <img src={item.img} alt="" />
          </div>
          <div className='home-carousel-text'>
            <h1>{item.title}</h1>
            <h2>{item.text}</h2>
          </div>
        </div>
      )
    }
  }

  const myArrow = ({ type, onClick, isEdge }) => {
    const arrow = type === consts.PREV ? <BsArrowLeftCircle size={30}/> : <BsArrowRightCircle size={30}/>
    return (
      <button className={`home-carousel-arrow`} onClick={onClick} disabled={isEdge}>
        {arrow}
      </button>
    )
  }

  const carouselRef = useRef(null);
  let resetTimeout;

  return (
    <div>
      <Carousel
        enableAutoPlay
        autoPlaySpeed={2500}
        ref={carouselRef}
        enableMouseSwipe={true}
        itemsToShow={1}
        renderArrow={myArrow}
        pagination={false}
        onNextEnd={({ index }) => {
          if(index===carrusel.length-1){
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 2500); // same time
          }
        }}
      >
        {carrusel.map(item => orderCarousel(item))}
      </Carousel>
    </div>
  )
}
