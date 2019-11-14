import React, { useState } from 'react';

// Los HOOK ---> react 16.8
// useState es una function q recibe como parameter el state que queremos utilizar
// devuelve un array de dos elementos, el 1ero ---> state y el 2do ---> un callback que se puede utilizar para modificar el state nuevamente

const Card = ({ match }) => {
    
    const [ state , setStatee ] = useState({
            id: 3,
            title: 'Infancia',
            image: 'https://picsum.photos/id/820/200/300',
            categoria: 'columpio'
    })

    const changeTitle = (text) => {
        setStatee({
            ...state,
            title: text
        })
    }

    {console.log("state", state)}
    { console.log("setState", setStatee) }

    //const currentList = lista.filter(item => item.id === parseInt(match.params.slug))[0]
    
    return (
        state 
        ?
        <div className="card">
                <h3>{state.title || ""}</h3>
                <img src={state.image || ""} alt={state.title || ""} />
                <p>{state.categoria || ""}</p>   
                <button onClick={changeTitle.bind(this, "Sandor")}>Cambiar title</button>  
        </div>
        : null
    )
}

export default Card;