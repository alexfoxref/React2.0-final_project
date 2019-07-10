import React, {Component} from 'react';
import WithCoffeeService from '../hoc';
import {connect} from 'react-redux';
import {cardsLoaded, cardsRequested, cardsError} from '../../actions';
import { View } from '../card-panel';

import { Container, Row, Col } from 'reactstrap';
import beansLogoDark from '../../logo/Beans_logo_dark.svg';
import AppHeader from '../app-header';


class ItemPage extends Component {

    componentDidMount() {
        const {CoffeeService, cardsLoaded, cardsRequested, cardsError, cards, selectedItem} = this.props;

        const pageName = selectedItem.replace(/\d/g, '');
        const funcName = (pageName === 'coffee') ? 'getCoffeeItems' : 'getBestsellersItems';


        if (cards.length === 0) {
            cardsRequested(true);

            for (let key in CoffeeService) {
                if (key === funcName) {
                    CoffeeService[key]()
                        .then(res => cardsLoaded(res))
                        .catch(err => cardsError(err));
                    break;
                }
            }

        } else {
            cardsLoaded(cards)
        }
    }

    itemPage = () => {
        const {selectedItem, cards} = this.props;
        const index = +selectedItem.replace(/[^\d]/g, '') - 1;

        let card = {
            name : '',
            country : '',
            url : '',
            price : '',
            description : ''
        };
        if (cards[index]) {
            const {name, country, url, price, description} = cards[index];
            card = {name, country, url, price, description};
        }
        const {name, country, url, price, description} = card;

        return (
            <section className="shop">
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 1 }}>
                            <img className="shop__girl" src={url} alt={name}></img>
                        </Col>
                        <Col lg="4">
                            <div className="title">About it</div>
                            <img className="beanslogo" src={beansLogoDark} alt="Beans logo"></img>
                            <div className="shop__point">
                                <span>Country:</span>
                                {country}
                            </div>
                            <div className="shop__point">
                                <span>Description:</span>
                                {description}
                            </div>
                            <div className="shop__point">
                                <span>Price:</span>
                                <span className="shop__point-price">{price}$</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

    render() {

        const {loading, errorMessage} = this.props;

        return (
            <>
                <AppHeader 
                    pageName="coffee" />

                <View 
                    success={this.itemPage}
                    loading={loading}
                    error={errorMessage} />
            </>
        )
    }
}



const mapStateToProps = ({cards, loading, errorMessage}) => {
    return {
        cards,
        loading,
        errorMessage
    }
};

const mapDispatchToProps = {
    cardsLoaded, 
    cardsRequested, 
    cardsError
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));