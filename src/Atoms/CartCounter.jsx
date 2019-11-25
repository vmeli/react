import React from 'react';
import { connect } from 'react-redux';

// connect ---> conecta al componente con el store usando HOC
//             recibe 2 parameter que son callback: mapStateToProps, mapDispatchToProps
// mapStateToProps ---> mapear el state global y pasarle al componente lo que se desea por props.    

// los pros de CartCounter por mapStateToProps ya tiene como  props cartLength, llamando por destructuración
const CartCounter = ({ cartLength }) => (
    <li>
        <button className="btn-cart">{`Carrito: ${cartLength.length}`}</button>
    </li>
)

const mapStateToProps = state => (
    {
        cartLength: state.cart
    }
)
const mapDispatchToProps = () => {}

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);