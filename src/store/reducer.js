import * as actions from "./actionTypes";

export const reducer = (
    state = { data: [], lifes: [0, 1, 2, 3, 4], score: 0 },
    action
) => {
    switch (action.type) {
        case actions.SET_DATA:
            return {
                ...state,
                data: action.payload,
            };

        case actions.SET_LIFES:
            return {
                ...state,
                lifes: action.payload,
            };

        case actions.INCREMENT_LIFES:
            return {
                ...state,
                lifes: [...state.lifes, 1],
            };

        case actions.DECREMENT_LIFES:
            return {
                ...state,
                lifes: state.lifes.filter(
                    (x) => x !== state.lifes[state.lifes.length - 1]
                ),
            };

        case actions.RESET_SCORE:
            return {
                ...state,
            };

        case actions.INCREMENT_SCORE:
            return {
                ...state,
                score: state.score + 1,
            };

        default:
            return state;
    }
};
