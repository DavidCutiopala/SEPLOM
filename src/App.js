import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/";
import Default from "./components/Default";
import Modal from './components/Modal';
import Nosotros from "./components/Cart/Nosotros";
import Footer from "./componentsSeplom/footer/Footer";
import Galery from "./componentsSeplom/Galery/Galery";
import WhatsappBadge from 'react-whatsapp-badge'
import Home from "./componentsSeplom/Home/Home";
import contacto from "./componentsSeplom/Contactos/contacto";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Nosotros} />
          <Route exact path="/servicios" component={Galery} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/contactos" component={contacto} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/productos" component={ProductList} />
          <Route component={Default} />
        </Switch>
        <WhatsappBadge text='Necesito sus servicios' phone='5930999580632' image='./img/whatsapp.png' />
        <Footer></Footer>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
