import React from 'react';
import Curso from './Curso';
import Formulario from './Formulario';
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
      lista.map( item => <Curso title={item.title}
                                image={item.image}
                                categoria={item.categoria}
                          />
      )
    }
    {/* <Curso 
      title="Cachorro"
      image="https://picsum.photos/id/237/200/300"
      categoria="mascotas"
    /> */}
    <Formulario/>
  </>
)

export default App;
