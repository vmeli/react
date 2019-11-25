// El attribute component puede ser un component o un callback q retorna un component
// El attribute exact es recomendable solo en el path del home
import React from 'react';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
// Provider ---> conecta el state global con la aplicación
import store from './redux/store';

import './styles/app.scss';


const App = () => (
  <Provider store={store}> 
    <AppRoutes />
  </Provider>
)

export default App;
