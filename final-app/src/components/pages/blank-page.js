import React from 'react';


import { Container, Row, Col } from 'reactstrap';
import coffeeCup from '../../img/coffee_cup.jpg';
import coffeeGirl from '../../img/coffee_girl.jpg';
import beansLogoDark from '../../logo/Beans_logo_dark.svg';
import AppHeader from '../app-header';
import CardPanel from '../card-panel';

const Filters = () => {
    return (
        <Row>
            <Col lg={{ size: 4, offset: 2 }}>
                <form action="#" className="shop__search">
                    <label className="shop__search-label" htmlFor="filter">Looking for</label>
                    <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"></input>
                </form>
            </Col>
            <Col lg='4'>
                <div className="shop__filter">
                    <div className="shop__filter-label">
                        Or filter
                    </div>
                    <div className="shop__filter-group">
                        <button className="shop__filter-btn">Brazil</button>
                        <button className="shop__filter-btn">Kenya</button>
                        <button className="shop__filter-btn">Columbia</button>
                    </div>
                </div>
            </Col>
        </Row>
    )
};

const BlankPage = ({pageName}) => {

    let initialPage = {
        image : null,
        title : '',
        text :  <div className="shop__text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/><br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                    so questions. <br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                    met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                    is song that held help face.
                </div>,
        filters : null,
        funcName: 'getCoffeeItems'
    };
    let page = initialPage;

    switch (pageName) {
        case 'coffee':
            page = {
                ...initialPage,
                image : coffeeGirl,
                title : 'About our beans',
                filters : (<Filters />)
            };
            break;
        case 'pleasure':
            page = {
                ...initialPage,
                image : coffeeCup,
                title : 'About our goods',
                funcName: 'getGoodsItems'
            };
            break;
        default:
            break;
    };

    const {image, title, text, filters, funcName} = page;

    return (
        <>
            <AppHeader 
                pageName={pageName} />

            <section className="shop">
                <Container>
                    <Row>
                        <Col lg={{ size: 4, offset: 2 }}>
                            <img className="shop__girl" src={image} alt="girl"></img>
                        </Col>
                        <Col lg='4'>
                            <div className="title">{title}</div>
                            <img className="beanslogo" src={beansLogoDark} alt="Beans logo"></img>
                            <div className="shop__text">
                                {text}
                            </div>
                        </Col>
                    </Row>
                    <div className="line"></div>

                    {filters}

                    <Row>
                        <Col lg={{ size: 10, offset: 1 }}>
                            <CardPanel 
                                funcName={funcName}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlankPage;