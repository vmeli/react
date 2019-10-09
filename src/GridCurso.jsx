import React from 'react';
import Curso from './Curso';

const lista = [
    {
        id: 1,
        title: 'Cachorro',
        image: 'https://picsum.photos/id/237/200/300',
        categoria: 'mascotas'
    },
    {
        id: 2,
        title: 'Recuerdos',
        image: 'https://picsum.photos/id/320/200/300',
        categoria: 'atardecer'
    },
    {
        id: 3,
        title: 'Infancia',
        image: 'https://picsum.photos/id/820/200/300',
        categoria: 'columpio'
    }
]

const GridCurso = () => (
    <>
        <h1>Ejemplos de card</h1>
        {
            lista.map( ( item, key ) =>
                <div className="wrapper-card" key={key}>
                    <Curso id={item.id} 
                        title={item.title}
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
    </> 
)

export default GridCurso;
