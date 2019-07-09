import React from 'react';

import logoBlack from '../../logo/Logo_black.svg';
import beansLogoDark from '../../logo/Beans_logo_dark.svg';
import { Container, Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={{ size: 7, offset: 3 }}>
                        <ul className="footer">
                            <li className="footer__item">
                                <a href="#">
                                    <img src={logoBlack} alt="logo"></img>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#">Our coffee</a>
                            </li>
                            <li className="footer__item">
                                <a href="#">For your pleasure</a>
                            </li>
                            <li className="footer__item">
                                <a href="#">Contact us</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <img className="beanslogo" src={beansLogoDark} alt="Beans logo"></img>
            </Container>
        </footer>
    )
};

export default Footer;