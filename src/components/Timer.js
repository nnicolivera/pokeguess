import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementLifes } from "../store/actions";

export const Timer = ({ time, setTime, randomId, titleRef, flag, setFlag }) => {
    const dispatch = useDispatch();
    const lifes = useSelector((state) => state.lifes);

    useEffect(() => {
        if (flag) {
            const timeout = setInterval(() => {
                if (time > 1) {
                    setTime(time - 1);
                } else if (lifes.length > 0) {
                    setTime(10);
                    setFlag(false);
                    randomId();
                    dispatch(decrementLifes(lifes));
                    titleRef.current.style = "color: black";
                }
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [time, flag]);

    return (
        <>
            {lifes.length > 0 && (
                <p>
                    time remaining: <strong>{time}!</strong>
                </p>
            )}
        </>
    );
};
