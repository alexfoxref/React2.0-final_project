import React, { Component } from 'react';
import WithCoffeeService from '../hoc';
import {connect} from 'react-redux';
import {cardsLoaded, cardsRequested, cardsError} from '../../actions';
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
        this.props.cardsLoaded([])
    }

    cardsList = () => {
        const {cards, funcName} = this.props;
        const wrapperClass = (funcName === 'getBestsellersItems') ? 'best' : 'shop';
        let id = 1;

        return (
            <ul className={`${wrapperClass}__wrapper`}>
                {
                    cards.map(cardItem => {

                        const cardId = `${funcName.slice(3, -5).toLowerCase()}${id++}`;

                        return  <CardItem 
                                    key={cardId}
                                    id={cardId}
                                    cardItem={cardItem}
                                    funcName={funcName}
                                    onItemSelected={(itemId) => {
                                        this.props.history.push(`/${itemId}`)
                                    }}
                                    />
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
    const {cards, loading, errorMessage} = state;

    return {
        cards,
        loading,
        errorMessage,
    }
};

const mapDispatchToProps = {
    cardsLoaded,
    cardsRequested,
    cardsError
};

export default withRouter(WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CardPanel)));