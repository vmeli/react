import ADD_TO_CART from './actions';
// declara actions del proyecto 
// objetos ---> encapsula el type y la data
const addToCart = id => ({
    type: ADD_TO_CART,
    id // id: id
})

export { addToCart }
// no utlizamos default ps vamos a considerar más funciones