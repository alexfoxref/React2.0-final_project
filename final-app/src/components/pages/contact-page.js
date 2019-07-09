import React from 'react';
import AppHeader from '../app-header';
import ContactForm from '../contact-form';
import beansLogoDark from '../../logo/Beans_logo_dark.svg';
import { Container, Row, Col } from 'reactstrap';
import Success from '../success';



const ContactPage = () => {
    return (
        <>
            <AppHeader pageName="contact" />
            <Container style={{padding:'70px 0 0'}}>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }}>
                        <div className="title">Tell us about your tastes</div>
                        <img className="beanslogo" src={beansLogoDark} alt="Beans logo"></img>
                        <ContactForm />
                    </Col>
                    <Success />
                </Row>
            </Container>

        </>
    )
};

export default ContactPage;