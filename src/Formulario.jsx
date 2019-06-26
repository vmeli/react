//componentes de clase
import React, {Component} from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="grid">
                <h3>Formulario</h3>
                <form>
                    <div className="form__item">
                        <label>Nombre completo</label>
                        <input type="text"/>
                    </div>
                    <div className="form__item">
                        <label>Correo Electrónico</label>
                        <input type="email" />
                    </div>
                    <div className="form__item">
                        <input className="button fulll" type="submit" value="Enviar"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Formulario;
