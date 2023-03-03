import * as actions from "./actionTypes";

export const setData = (data) => ({
    type: actions.SET_DATA,
    payload: data,
});

export const setLifes = (lifes) => ({
    type: actions.SET_LIFES,
    payload: lifes,
});

export const incrementLifes = () => ({
    type: actions.INCREMENT_LIFES,
});

export const decrementLifes = () => ({
    type: actions.DECREMENT_LIFES,
});

export const resetScore = () => ({
    type: actions.RESET_SCORE,
});

export const incrementScore = () => ({
    type: actions.INCREMENT_SCORE,
});
