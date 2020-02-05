import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Clients from './components/clients/Clients'
import Products from './components/products/Products'
import Orders from './components/orders/Orders'
function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
        <div className="grid contenedor contenido-principal">
          <Nav/>
          <main className="caja-contenido col-9">
            {/* // TODO: Routing a los diferentes componentes */}
            <Switch>
              <Route exact path="/" component={Clients}></Route>
              <Route exact path="/productos" component={Products}></Route>
              <Route exact path="/pedidos" component={Orders}></Route>
            </Switch>
          </main>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
