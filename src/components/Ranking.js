import "../App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RankTable } from "./RankTable";
import { saveRanking } from "../store/actions";

export const Ranking = ({ username }) => {
    const dispatch = useDispatch();
    const score = useSelector((state) => state.score);
    const register = localStorage.getItem("register");
    const parsedRegister = JSON.parse(register);

    useEffect(() => {
        const date = new Date().toLocaleString();
        const newRegister = {
            username: username,
            date: date,
            score: score,
        };

        const rankingList = () => {
            let arr = [];
            let inserted = false;
            for (let i = 0; i < arr.length; i++) {
                inserted = false;
                for (let j = 0; j < arr.length; j++) {
                    if (arr[i].score > arr[j].score) {
                        inserted = true;
                        arr.splice(j, 0, arr[j]);
                        break;
                    }
                }
                if (!inserted) {
                    arr.push(arr[i]);
                }
            }
        }

        if (!localStorage.getItem("register")) {
            localStorage.setItem("register", JSON.stringify([newRegister]));
            dispatch(saveRanking(newRegister));
        } else {
            parsedRegister.push(newRegister);
            localStorage.setItem("register", JSON.stringify(parsedRegister));
            dispatch(saveRanking(parsedRegister));
        }
        rankingList();
    }, [username]);

    return (
        <>
            <RankTable />
        </>
    )
};
