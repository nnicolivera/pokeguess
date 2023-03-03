import React, { useState, useEffect, useRef } from "react";
import { useCompare } from "../hooks/useCompare";
import { useSelector } from "react-redux";

export const Form = ({ nextPokemon, titleRef, setTime, flag, setFlag }) => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    const { assert, fail } = useCompare();
    const name = useSelector((state) => state.data.name);
    const score = useSelector((state) => state.score);
    const lifes = useSelector((state) => state.lifes);

    useEffect(() => {
        inputRef.current.focus();
    }, [flag]);

    const reset = () => {
        setTime(10);
        setFlag(false);
        setValue("");
        nextPokemon();
    };

    const compare = (e) => {
        e.preventDefault();
        if (!value) {
            alert("Must write something!");
        } else if (name === value.toLowerCase()) {
            assert(titleRef);
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
