import React from 'react';
import life from '../../src/life.png';

export const Lifes = ({ lifes }) => {
    return (
        <>
            {lifes.map(n => (<img key={n} src={life} alt="pokemon" width="20px" />))}
            <hr />
        </>
    )
}
