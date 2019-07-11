import React, {Component} from 'react';
import AppHeader from '../app-header';
import ContactForm from '../contact-form';
import beansLogoDark from '../../logo/Beans_logo_dark.svg';
import { Container, Row, Col } from 'reactstrap';
import Success from '../success';
import {connect} from 'react-redux';
import {toggleSuccess, cardsRequested} from '../../actions';
import {View} from '../card-panel';


class ContactPage extends Component {

    componentDidMount() {
        const {cardsRequested} = this.props;

        cardsRequested(false);
    }

    

    content = () => {
        const {success, toggleSuccess} = this.props;

        const contactForm = !success ? <ContactForm /> : null;
        const successForm = success ? <Success onReturn={() => toggleSuccess(false)}/> : null;

        return (
            <>
                <Col lg={{ size: 6, offset: 3 }}>
                    <div className="title">Tell us about your tastes</div>
                    <img className="beanslogo" src={beansLogoDark} alt="Beans logo"></img>
                    {contactForm}
                </Col>
                {successForm}
            </>
        )   
    }

    render() {
        const {loading, errorMessage} = this.props;
        console.log(errorMessage)

        return (
            <>
                <AppHeader pageName="contact" />
                <Container style={{padding:'70px 0 0'}}>
                    <Row>
                        <View 
                            success={this.content}
                            loading={loading}
                            error={errorMessage} />
                        
                    </Row>
                </Container>
            </>
        )

    }
}


const mapStateToProps = ({loading, errorMessage, success}) => {
    return {
        loading,
        errorMessage,
        success
    }
};

const mapDispatchToProps = {
    toggleSuccess,
    cardsRequested
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);