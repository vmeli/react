// El attribute component puede ser un component o un callback q retorna un component
// El attribute exact es recomendable solo en el path del home
import React from 'react';
import GridCurso from './GridCurso';
import GridSlider from './GridSlider';
import Formulario from './Formulario';
import Card from './Card';
import './styles/app.scss';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/card">Card</Link>
        </li>
        <li>
          <Link to="/slider">Slider</Link>
        </li>
        <li>
          <Link to="/formulario">Formulario</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route path="/" exact component={ () => (
          <div className="wrapper-welcome">Sigue aprendiendo React ^^ !!!</div>
        ) }/>
        <Route path="/card/:slug" component={ Card }/> 
        <Route path="/card" component={ GridCurso }/> 
        <Route path="/slider" component={ GridSlider }/>
        <Route path="/formulario" component={ () => <Formulario name="Sandor"/> }/>
        < Route exact component = {
          () => (
            <div className="error-404">
            <div>Error 404</div>
            <span>Página no encontrada</span> 
            </div>
          )
        }
        />
      </Switch>  
    </div>
  </Router>
)

export default App;
