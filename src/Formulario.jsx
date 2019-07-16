//componentes de clase
import React, {Component} from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

        // Enlazamos el this de la clase con el método
        this.updateName  = this.updateName.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updateDate  = this.updateDate.bind(this)
    }
    
    updateName (e) {
        this.setState({
            nombre: e.target.value
        })
    }
    
    updateEmail (e) {
        this.setState({
            correo: e.target.value
        })
    }

    updateDate () {
        this.setState({
            fecha: new Date()
        })
    }
    
    render() {
        return (
            <div className="grid">
                <h3>Formulario {this.props.name}</h3>
                <div>Fecha actual: {Math.ceil(this.state.fecha/1000)}</div>
                <form id="elemento">
                    <div className="form__item">
                        <label>Nombre completo</label>
                        <input 
                            type="text" 
                            onChange={this.updateName}
                            />
                    </div>
                    <div className="form__item">
                        <label>Correo Electrónico</label>
                        <input 
                            type="email" 
                            onChange={this.updateEmail}
                            />
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }
    //Montaje
    componentDidMount() {
        console.log("Saa",document.getElementById("elemento"))
        // this.interval = setInterval(() => {
        //     this.updateDate()
        // }, 1000);
    }
    //Actualización
    componentDidUpdate(prevProps,prevstate) {
        console.log("prevProps", prevProps)
        console.log("prevstate", prevstate)
    }
    //Desmontaje
    componentWillUnmount() {
        console.log("Sandor");
    }
}

export default Formulario;
