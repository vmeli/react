import React, { Component } from 'react';
import Curso from './Curso';
import axios from "axios";
import withLoader from './HOC/withLoader';

class GridCurso extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lista : []
        }
    }

    componentDidMount() {
        const url = 'http://my-json-server.typicode.com/vmeli/json-db/lista';
        axios.get(url)
        .then(response => this.setState({
            lista: response.data
        }))
    }

    render () {
        const { lista } = this.state;
        return <>
            <h1>Ejemplos de card</h1>
            {
                lista.length === 0
                ? <h2 className="ta-c">Cargando...</h2>
                :   lista.map((item, key) => (
                        <div className="wrapper-card" key={key}>
                            <Curso id={item.id}
                                title={item.title}
                                image={item.image}
                                categoria={item.categoria}
                            />
                        </div>
                ))
            }
            {/* <Curso 
                    title="Cachorro"
                    image="https://picsum.photos/id/237/200/300"
                    categoria="mascotas"
                /> 
            */}
        </> 
    } 

}

export default GridCurso;
