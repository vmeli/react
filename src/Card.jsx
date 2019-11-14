import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Los HOOK ---> react 16.8
// useState es una function q recibe como parameter el state que queremos utilizar
// devuelve un array de dos elementos, el 1ero ---> state y el 2do ---> un callback que se puede utilizar para modificar el state nuevamente

// useEffect es una function que recibe como 1er parameter un callback ---> se va ejecutar cada vez q el componente se renderice(cuando recibe nuevas propiedades o el state cambia)
// useEffect({}, []) se agrega el 2do parameter([]) para q sea llamado a cada rato el useEffect,solo una vez para emular componentDidMount()
const Card = ({ match }) => {

    const [thumbnails, setThumbnails] = useState({}); // setThumbnails ---> function que actualiza el state(thumbnails)
    const [comment, setCommet] = useState("Sin comentario"); // setCommet ---> function que actualiza el state(comment)

    const myComment = e => {
        setCommet(e.target.value);
    }

    useEffect(() => {
        // console.log("Sandor1"); para verificar cuantas veces es llamado useEffect
        const url = `http://my-json-server.typicode.com/vmeli/json-db/lista/${match.params.slug}`;
        axios.get(url)
            .then(response => setThumbnails(response.data))
    }, [])

    //{ console.log("useEffect", state) }
    
    return (
        thumbnails
            ?
            <>
                <div className="card">
                    <h3>{thumbnails.title || ""}</h3>
                    <img src={thumbnails.image || ""} alt={thumbnails.title || ""} />
                    <p>{thumbnails.categoria || ""}</p>
                </div>
                <div className="card">
                    <h2>Escribe tu comentario</h2>
                    <input className="inputComment" type="text" placeholder="Escribe ..." onChange={myComment.bind(this)}/>
                    <p>{comment}</p>
                </div>
            </>
            : null
    )
}

export default Card;