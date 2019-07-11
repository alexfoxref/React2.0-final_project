import React, { Component } from 'react';
import WithCoffeeService from '../hoc';
import {connect} from 'react-redux';
import {cardsLoaded, cardsRequested, cardsError, searchCard, filterSelect} from '../../actions';
import CardItem from '../card-item';
import Spinner from '../spinner';
import Error from '../error';
import {withRouter} from 'react-router-dom';


class CardPanel extends Component {

    componentDidMount() {
        const {CoffeeService, cardsLoaded, cardsRequested, cardsError, funcName} = this.props;

        cardsRequested(true);

        for (let key in CoffeeService) {
            if (key === funcName) {
                CoffeeService[key]()
                    .then(res => cardsLoaded(res))
                    .catch(err => cardsError(err));
                break;
            }
        }
    }

    componentWillUnmount() {
        const {cardsLoaded, searchCard, filterSelect} = this.props;

        cardsLoaded([]);
        searchCard('');
        filterSelect('All');
    }

    cardsList = () => {
        const {cards, funcName, search, filterCountry} = this.props;
        const term = new RegExp(search, 'ig');
        const wrapperClass = (funcName === 'getBestsellersItems') ? 'best' : 'shop';
        let id = 1;

        return (
            <ul className={`${wrapperClass}__wrapper`}>
                {
                    cards
                        .map(cardItem => {

                            const cardId = `${funcName.slice(3, -5).toLowerCase()}${id++}`;

                            if (term.test(cardItem.name) && 
                                (cardItem.country === filterCountry || filterCountry === 'All')) {
                                return  <CardItem 
                                        key={cardId}
                                        id={cardId}
                                        cardItem={cardItem}
                                        funcName={funcName}
                                        onItemSelected={(itemId) => {
                                            const page = itemId.replace(/\d/g, '');
                                            this.props.history.push(`/${page}/${itemId}`)
                                        }}
                                        />
                            } else {
                                return ''
                            }
                            
                        })
                }
            </ul>
        )
    }

    render() {
        const {loading, errorMessage} = this.props;
        
        return (
            <View 
                success={this.cardsList}
                loading={loading}
                error={errorMessage} />
        )
    }
}

export const View = ({success, loading, error}) => {

    if (loading) {
        return <Spinner />
    }
    
    if (error) {
        return <Error errorMessage={error} />
    }

    return success()
}

const mapStateToProps = (state) => {
    const {cards, loading, errorMessage, search, filterCountry} = state;

    return {
        cards,
        loading,
        errorMessage,
        search,
        filterCountry
    }
};

const mapDispatchToProps = {
    cardsLoaded,
    cardsRequested,
    cardsError,
    searchCard,
    filterSelect
};

export default withRouter(WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CardPanel)));