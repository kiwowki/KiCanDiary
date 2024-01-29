const SET_LINK = 'link/SET_LINK'

export const setLink = (link) => ({
    type: SET_LINK,
    link,
})

const initialState = {
    link: 'home',
}

function linkReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LINK:
            return {
                ...state,
                link: action.link,
            }
        default:
            return state
    }
}
export default linkReducer
