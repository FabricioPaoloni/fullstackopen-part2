const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = ({ part }) => {
    return (
            <p>
                {part.name} {part.exercises}
            </p>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part => <Part key={part.id} part={part} /> )} 
        </>
    )
}

const Total = ({ parts }) => {
    let total = 0;
    parts.map(part => total += part.exercises);
    return (
            <p>
                Total number of exercises {total}
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