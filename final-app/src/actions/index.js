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
    const num = `${err}`.replace(/[^(\d\d\d)]/g, '');
    return {
        type: 'CARDS_ERROR',
        errorMessage: num
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
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Could not fetch, received ${res.status}`)
                }
                dispatch(cardsRequested(false));
            })
            .catch(err => dispatch(cardsError(err)));
    }
}