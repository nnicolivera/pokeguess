import { useSelector, useDispatch } from "react-redux";
import { setFlag } from "../store/actions";

export const Pokemon = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    return (
        data.sprites && (
            <>
                <img
                    src={data.sprites.front_default}
                    alt={data.name}
                    width="150px"
                    onLoad={() => dispatch(setFlag(true))}
                />
            </>
        )
    );
};
