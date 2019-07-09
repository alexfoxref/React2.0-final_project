import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import breakfast from '../../logo/breakfast.svg';
import arrow from '../../logo/back-arrow.svg';

const Success = () => {
    return (
        <Container className="success-block">
            <Row>
                <Col>
                    <p>
                        Thank you so much <br/>
                        We contact you as soon as posible
                    </p>
                    <img src={breakfast} width="100" height="100" alt="breakfast"></img>
                    <button className="form__btn">
                        Another ?
                        <img src={arrow} width="15" height="15" alt="arrow"></img>
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default Success;