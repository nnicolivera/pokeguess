import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementLifes, setTime, setFlag, randomId } from "../store/actions";

export const Timer = ({ titleRef }) => {
    const dispatch = useDispatch();
    const lifes = useSelector((state) => state.lifes);
    const time = useSelector((state) => state.time);
    const flag = useSelector((state) => state.flag);
    const newId = Math.floor(Math.random() * 100) + 1;

    useEffect(() => {
        if (flag) {
            const timeout = setInterval(() => {
                if (time > 1) {
                    dispatch(setTime(time - 1));
                } else if (lifes.length > 0) {
                    dispatch(setTime(10));
                    dispatch(setFlag(false));
                    dispatch(randomId(newId));
                    //limpiar input value
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
