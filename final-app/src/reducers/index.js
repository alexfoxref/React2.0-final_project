const initialState = {
    cards: [],
    loading: true,
    errorMessage: null,
    checkedDescr: false,
    success: false,
    search: '',
    filterCountry: 'All'
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
        
        case 'TOGGLE_DESCR':
            return {
                ...state,
                checkedDescr: !state.checkedDescr
            }
        case 'TOGGLE_SUCCESS':
            return {
                ...state,
                success: payload
            }

        case 'SEARCH_CARD':
            return {
                ...state,
                search: payload
            }
        case 'FILTER_CARDS':
            return {
                ...state,
                filterCountry: payload
            }
        default:
            return state
    }
};

export default reducer;