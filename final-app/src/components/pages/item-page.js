import React from 'react';


import { Container, Row, Col } from 'reactstrap';
import beansLogoDark from '../../logo/Beans_logo_dark.svg';
import AppHeader from '../app-header';
import coffeeItem from '../../img/coffee_item.jpg';



const ItemPage = () => {
    return (
        <>
            <AppHeader 
                pageName="coffee" />

            <section className="shop">
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 1 }}>
                            <img className="shop__girl" src={coffeeItem} alt="coffee_item"></img>
                        </Col>
                        <Col lg="4">
                            <div className="title">About it</div>
                            <img className="beanslogo" src={beansLogoDark} alt="Beans logo"></img>
                            <div className="shop__point">
                                <span>Country:</span>
                                Brazil
                            </div>
                            <div className="shop__point">
                                <span>Description:</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className="shop__point">
                                <span>Price:</span>
                                <span className="shop__point-price">16.99$</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
        
    )
}

export default ItemPage;