import { useDispatch, useSelector } from "react-redux";
import {
    decrementLifes,
    incrementLifes,
    incrementScore,
} from "../store/actions";

export const useCompare = () => {
    const dispatch = useDispatch();

    const lifes = useSelector((state) => state.lifes);

    const guess = (titleRef) => {
        if (lifes.length === 1) {
            dispatch(incrementLifes());
        }
        titleRef.current.style = "color: green";
        dispatch(incrementScore());
    };

    const fail = (titleRef) => {
        titleRef.current.style = "color: red";
        dispatch(decrementLifes());
        console.log(`Wrong! ${lifes.length - 1} lifes remaining...`);
    };

    return { guess, fail };
};
