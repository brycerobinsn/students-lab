export default function Score({scores}){
    return(
        <>
            <h3>Scores</h3>
            {scores.map(score => (
                <>
                <div>Date: {score.date}</div>
                <div>Score: {score.score}</div>
                </>
            ))}
        </>
    )
}