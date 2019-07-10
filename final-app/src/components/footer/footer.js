import React from 'react';

import NavBar from '../nav-bar';
import beansLogoDark from '../../logo/Beans_logo_dark.svg';
import { Container, Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={{ size: 7, offset: 3 }}>
                        <NavBar place="footer" />
                    </Col>
                </Row>
                <img className="beanslogo" src={beansLogoDark} alt="Beans logo"></img>
            </Container>
        </footer>
    )
};

export default Footer;