import React, { Component } from 'react';
import Course from './Course';
import axios from "axios";

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
            <Course data={lista}/>
        </> 
    } 

}

export default GridCurso;
