import life from "../../src/life.png";
import { useSelector } from "react-redux";

export const Lifes = () => {
    const lifes = useSelector((state) => state.lifes);

    return (
        <>
            {lifes.map((n) => (
                <img key={n} src={life} alt="pokemon" width="20px" />
            ))}
        </>
    );
};
