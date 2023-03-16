import * as actions from "./actionTypes";

export const setData = (data) => ({
    type: actions.SET_DATA,
    payload: data,
});

export const randomId = (id) => ({
    type: actions.RANDOM_ID,
    payload: id,
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

export const saveRanking = (score) => ({
    type: actions.SET_RANKING,
    payload: score,
});

export const setTime = (time) => ({
    type: actions.SET_TIME,
    payload: time,
});

export const setFlag = (boolean) => ({
    type: actions.SET_FLAG,
    payload: boolean,
});

export const addUsername = (username) => ({
    type: actions.ADD_USERNAME,
    payload: username,
});
