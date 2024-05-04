const Header = (props) => {
    return (
        <>
            <h2>{props.courseName}</h2>
        </>
    )
}

const Part = ({ part }) => {
    return (
            <p>
                {part.name} - {part.exercises} exercises
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
            <h4>
                Total number of exercises: {total}
            </h4>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )

}

export default Course