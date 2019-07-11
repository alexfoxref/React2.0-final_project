export const cardsLoaded = (newCards) => {
    return {
        type: 'CARDS_LOADED',
        payload: newCards
    }
}

export const cardsRequested = (bool) => {
    return {
        type: 'CARDS_REQUESTED',
        payload: bool
    }
}

export const cardsError = (err) => {
    console.log(err);
    return {
        type: 'CARDS_ERROR',
        errorMessage: err
    }
}

export const toggleDescr = () => {
    return {
        type: 'TOGGLE_DESCR',
    }
}

export const toggleSuccess = (bool) => {
    return {
        type: 'TOGGLE_SUCCESS',
        payload: bool
    }
}

export const postContacts = (data, CoffeeService) => {
    return (dispatch) => {
        dispatch(cardsRequested(true));

        CoffeeService.postContacts(data)
            .then(() => {
                dispatch(cardsRequested(false));
            })
            .catch(err => dispatch(cardsError(err)));
    }
}

export const searchCard = (term) => {
    return {
        type: 'SEARCH_CARD',
        payload: term
    }
}

export const filterSelect = (name) => {
    return {
        type: 'FILTER_CARDS',
        payload: name
    }
}