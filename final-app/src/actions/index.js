// export const menuError = (err) => {
//     const num = `${err}`.replace(/[^(\d\d\d)]/g, '');
//     return {
//         type: 'MENU_ERROR',
//         errorMessage: num
//     }
// }

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
