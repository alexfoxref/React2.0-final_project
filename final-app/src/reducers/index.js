const initialState = {
    cards: [],
    loading: true,
    errorMessage: null
};

const reducer = (state = initialState, action) => {
    const {type, payload, errorMessage} = action;

    switch (type) {
        case 'CARDS_LOADED':
            return {
                ...state,
                cards: payload,
                loading: false
            };
        case 'CARDS_REQUESTED':
            return {
                ...state,
                loading: payload,
            };
        case 'CARDS_ERROR':
            return {
                ...state,
                loading: false,
                errorMessage
            };
        

        default:
            return state
    }
};

export default reducer;