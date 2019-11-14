import React from 'react';

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

const Card = ({ match }) => {
    
    const currentList = lista.filter(item => item.id === parseInt(match.params.slug))[0]
    
    return (
        currentList 
        ?
        <div className="card">
            <h3>{currentList.title || ""}</h3>
            <img src={currentList.image || ""} alt={currentList.title || ""} />
            <p>{currentList.categoria || ""}</p>     
        </div>
        : null
    )
}

export default Card;