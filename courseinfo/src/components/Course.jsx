const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = ({ part }) => {
    return (
            <li>
                {part.name} {part.exercises}
            </li>
    )
}

const Content = ({ parts }) => {
    return (
        <ul>
            {parts.map(part => <Part key={part.id} part={part} /> )} 
        </ul>
    )
}

const Total = ({ parts }) => {
    let total = 0;
    parts.map(part => total += part.exercises);
    return (
            <p>
                Number of exercises {total}
            </p>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )

}

export default Course