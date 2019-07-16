import React from 'react';
import Curso from './Curso';
import Formulario from './Formulario';
import SimpleSlider from './slider'; 
import SimpleSliderLazyload from './sliderLazyload';
import './styles/app.scss';

const lista =[
  {
    title: 'Cachorro',
    image: 'https://picsum.photos/id/237/200/300',
    categoria: 'mascotas'
  },
  {
    title: 'Recuerdos',
    image: 'https://picsum.photos/id/320/200/300',
    categoria: 'atardecer'
  }, 
  {
    title: 'Infancia',
    image: 'https://picsum.photos/id/820/200/300',
    categoria: 'columpio'
  }
]

const App = () => (
  <>
    <h1>Ejemplos de card</h1>
    {
      lista.map( item =>
        <div className="wrapper-card">
          <Curso title={item.title}
                                  image={item.image}
                                  categoria={item.categoria}
                            />
        </div>
      )
    } 
    {/* <Curso 
      title="Cachorro"
      image="https://picsum.photos/id/237/200/300"
      categoria="mascotas"
    /> */}
    {/* <Formulario name="Sandor"/> */}
    <div className="slider-wrapper">
      <SimpleSliderLazyload />
    </div>
     <div className="slider-wrapper">
      <SimpleSlider/>
    </div>
  </>
)

export default App;
