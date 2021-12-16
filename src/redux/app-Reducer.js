import { getAuthUserData } from "./auth-Reducer";
const INITIALIZED_TRUE = "INITIALIZED_TRUE";

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_TRUE:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export let initializedTrue = () => ({ type: INITIALIZED_TRUE });

export let initializeApp = () => {
    return (dispatch) => {
        let dispatchResult = dispatch(getAuthUserData());
        Promise.all([dispatchResult]).then(() => {
            dispatch(initializedTrue());
        });
    };
};

export default appReducer;
