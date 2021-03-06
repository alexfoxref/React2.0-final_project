import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';


import NavBar from '../nav-bar';
import beansLogo from '../../logo/Beans_logo.svg';
import previewBanner from '../../img/Main_bg.jpg';
import coffeeBanner from '../../img/Coffee_bg.jpg';
import pleasureBanner from '../../img/Pleasure_bg.jpg';
import contactBanner from '../../img/Contact_bg.jpg';


const MainBanner = ({title}) => {
    return (
        <Row>
            <Col lg={{size: 10, offset: 1}}>
                <h1 className="title-big">{title}</h1>
                <img className="beanslogo" src={beansLogo} alt="Beans logo"></img>
                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                <div className="preview__subtitle">Want to try our beans?</div>
                <Link to="/coffee/" className="preview__btn">More</Link>
            </Col>
        </Row>
    )
}

const AppHeader = ({pageName}) => {

    let initialHeader = {
        style : 'banner', 
        headerBanner : null, 
        mainBanner : null, 
        secondaryBanner : null
    };
    let header = initialHeader;

    switch (pageName) {
        case 'main':
            header = {
                ...initialHeader,
                style : 'preview',
                headerBanner : previewBanner,
                mainBanner : <MainBanner title="Everything You Love About Coffee" />
            };
            break;
        case 'coffee':
            header = {
                ...initialHeader,
                headerBanner : coffeeBanner,
                secondaryBanner : <h1 className="title-big">Our Coffee</h1>
            };
            break;
        case 'pleasure':
            header = {
                ...initialHeader,
                headerBanner : pleasureBanner,
                secondaryBanner : <h1 className="title-big">For your pleasure</h1>
            };
            break;
        case 'contact':
            header = {
                ...initialHeader,
                headerBanner : contactBanner,
                secondaryBanner : <h1 className="title-big">Contact us</h1>
            };
            break;
        default:
            break;
    };

    const {style, headerBanner, mainBanner, secondaryBanner} = header;

    return (
        <div className={style} style={{background: `url(${headerBanner}) center center no-repeat`}}>
            <Container>
                <Row>
                    <Col lg='6'>
                        <header>
                            <NavBar place="header" />
                        </header>
                    </Col>
                </Row>
                {mainBanner}
                {secondaryBanner}
            </Container>
        </div>
    )
};

export default AppHeader;