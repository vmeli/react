//componentes de clase
import React, {Component} from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: ""
        }

        // Enlazamos el this de la clase con el método
        this.updateName = this.updateName.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
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

    render() {
        return (
            <div className="grid">
                <h3>Formulario</h3>
                <form>
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
}

export default Formulario;
