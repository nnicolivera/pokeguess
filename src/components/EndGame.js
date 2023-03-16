import { useEffect, useState } from 'react';
import { Ranking } from './Ranking';

export const EndGame = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setUsername(prompt("Set a username: "));
        }, [1000]);
    }, []);

    return (
        <>
            {
                username === "" ? (
                    <h2>You lose...</h2>
                ) : (
                    <Ranking username={username} />
                )
            }
        </>
    )
}
