import Score from'./Score'

export default function Student({students}) {
    return (
        <ul>
            {students.map(student => (
                <li>
                    <h2>{student.name}</h2>
                    <div>Bio: {student.bio}</div>
                    <Score scores={student.scores}/>
                </li>
            ))}
        </ul>
    )
}