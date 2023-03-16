import { useSelector } from 'react-redux';

export const RankTable = () => {
    const score = useSelector((state) => state.score);
    const ranking = useSelector((state) => state.ranking);

    return (
        <div className="App">
            <h2>Your final score is: {score}</h2>
            {ranking && (
                <>
                    <h3>Ranking</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>TOP</th>
                                <th>Date</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ranking.map(r => (
                                    <tr key={r.date}>
                                        <th>{r.username}</th>
                                        <td>| {r.date} |</td>
                                        <td>{r.score}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </>
            )}
            <button
                onClick={() => {
                    window.location.reload(false);
                }}
            >
                Click to reload!
            </button>
        </div>
    );
}
