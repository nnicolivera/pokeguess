import React, { useState, useRef } from 'react';

export const Form = ({ name, lifes, setLifes, nextPokemon, titleRef }) => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const compare = (e) => {
        e.preventDefault();
        if (!value) {
            alert("Must write something!");
        } else {
            if (name === value.toLowerCase()) {
                titleRef.current.style = "color: green";
                alert("Perfect!");
                setValue("");
                const copy = [...lifes];
                copy.push(lifes.length + 1);
                setLifes(copy);
                nextPokemon();
            } else if (lifes.length > 0) {
                titleRef.current.style = "color: red";
                inputRef.current.focus();
                const copy = [...lifes];
                copy.pop();
                setLifes(copy);
                console.log(`Wrong! ${lifes.length - 1} lifes remaining...`)
            } else {
                alert("You failed...");
            }
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
        titleRef.current.style = "color: black";
    }

    return (
        <form onSubmit={(e) => compare(e)}>
            <input type="text" value={value} onChange={handleChange} ref={inputRef} />
            <button type='submit'>Comparar</button>
        </form>
    )
}
