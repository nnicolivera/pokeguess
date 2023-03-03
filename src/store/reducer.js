import * as actions from "./actionTypes";
const data = [];
const id = Math.floor(Math.random() * 100) + 1;
const lifes = [0, 1, 2, 3, 4];
const score = 0;
const time = 10;
const flag = false;

export const reducer = (
    state = { data: data, id: id, lifes: lifes, score: score, time: time, flag: flag }, action) => {
    switch (action.type) {

        case actions.SET_DATA:
            return {
                ...state,
                data: action.payload,
            };

        case actions.RANDOM_ID:
            return {
                ...state,
                id: action.payload,
            }

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

        case actions.SET_TIME:
            return {
                ...state,
                time: action.payload,
            }

        case actions.SET_FLAG:
            return {
                ...state,
                flag: action.payload,
            }

        default:
            return state;
    }
};
