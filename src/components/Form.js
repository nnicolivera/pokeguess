import React, { useState, useEffect, useRef } from "react";
import { useCompare } from "../hooks/useCompare";
import { useSelector, useDispatch } from "react-redux";
import { setTime, setFlag, randomId } from "../store/actions";

export const Form = ({ titleRef }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    const { guess, fail } = useCompare();

    const name = useSelector((state) => state.data.name);
    const score = useSelector((state) => state.score);
    const lifes = useSelector((state) => state.lifes);
    const flag = useSelector((state) => state.flag);
    const newId = Math.floor(Math.random() * 100) + 1;

    useEffect(() => {
        inputRef.current.focus();
    }, [flag]);

    const reset = () => {
        dispatch(setTime(10));
        dispatch(setFlag(false));
        setValue("");
        dispatch(randomId(newId));
    };

    const compare = (e) => {
        e.preventDefault();
        if (!value) {
            alert("Must write something!");
        } else if (name === value.toLowerCase()) {
            guess(titleRef);
            reset();
        } else if (lifes.length > 0) {
            fail(titleRef);
            reset();
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        titleRef.current.style = "color: black";
    };

    return (
        <>
            <form onSubmit={(e) => compare(e)}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    ref={inputRef}
                    disabled={!flag}
                />
                <button type="submit" disabled={!flag}>
                    Compare
                </button>
            </form>
            <h3>Your score is: {score}</h3>
        </>
    );
};
