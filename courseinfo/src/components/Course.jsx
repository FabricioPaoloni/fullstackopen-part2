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
    let total = parts.reduce((accumulator, currentPart) => accumulator + currentPart.exercises,
    0 ) ;
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