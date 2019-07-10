import React from 'react';
import AppHeader from '../app-header';
import ContactForm from '../contact-form';
import beansLogoDark from '../../logo/Beans_logo_dark.svg';
import { Container, Row, Col } from 'reactstrap';
import Success from '../success';
import {connect} from 'react-redux';
import {toggleSuccess} from '../../actions';




const ContactPage = ({success, toggleSuccess}) => {

    const contactForm = !success ? <ContactForm /> : null;
    const successForm = success ? <Success onReturn={() => toggleSuccess(false)}/> : null;

    return (
        <>
            <AppHeader pageName="contact" />
            <Container style={{padding:'70px 0 0'}}>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }}>
                        <div className="title">Tell us about your tastes</div>
                        <img className="beanslogo" src={beansLogoDark} alt="Beans logo"></img>
                        {contactForm}
                    </Col>
                    {successForm}
                </Row>
            </Container>

        </>
    )
};

const mapStateToProps = ({success}) => {
    return {success}
};

const mapDispatchToProps = {
    toggleSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);