import { useSelector } from "react-redux";

export const Pokemon = ({ setFlag }) => {
    const data = useSelector((state) => state.data);
    return (
        data.sprites && (
            <>
                <img
                    src={data.sprites.front_default}
                    alt={data.name}
                    width="150px"
                    onLoad={() => setFlag(true)}
                />
            </>
        )
    );
};
