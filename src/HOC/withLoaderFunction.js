//Nos permite reutilizar lógica a lo largo de la aplicación en diversos componentes
//HOC es una function que tiene como parametro un componente que procesa una lógica, devolviendo devuelve un componente 
import React, { Component } from 'react';

const withLoader = (propsValue) => (WrappedComponent) => {
    return class WithLoader extends Component {
        constructor(props) {
            super(props)
        }
        render() {
            console.log("this.props", this.props[propsValue].length);
            return this.props[propsValue].length === 0
                    ?   <h2 className="ta-c"> Cargando... </h2> 
                    :   <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader;