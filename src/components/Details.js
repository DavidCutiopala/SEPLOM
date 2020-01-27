import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import Product from './Product';
import { Grid, Card } from '@material-ui/core';
import "../App.css";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value)=>{
            const {id, company, img, info, price, title, inCart} = 
            value.detailProduct;

            return (

              <Grid className="grid-details" >
                
                <Card className="card-product">
                <h1>
                      {title}
                 </h1>
                <div className=" text-capitalize">
                        <img src={img} className="img-fluid" alt="product"/>
                    </div>

                </Card>
                <Card className="card-product">
          
                      <h2>Serie: {title}</h2>
                      <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        hecho por : <span className="text-uppercase">{company}</span>
                      </h4>
                      <h4 className="text-blue">
                        <strong>
                          precio: <span>$</span> {price}
                        </strong>
                      </h4>
                      <p className="text-capitalize ">
                          informacion acerca del producto:
                      </p>
                      <p className="text-muted lead">
                        {info}
                      </p>
                      <div>
                        <Link to="/">
                          <ButtonContainer>
                            Regresar a los productos
                          </ButtonContainer>
                        </Link>
                          <ButtonContainer 
                            disabled={inCart?true:false}
                            onClick={()=>{
                              value.addToCart(id);
                              value.openModal(id);
                            }}
                          >
                            {inCart ? "inCart":"Añadir al carrito "}
                          </ButtonContainer>
                      </div>
                 

                </Card>


              </Grid>
      
            );

          }
        }
      </ProductConsumer>
    )
  }
}
