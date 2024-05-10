import Person from "./Person"

const PersonsList = (props) => {
    return (
        <ul>
            {props.personsToShow.map(person => <Person key={person.name} person={person} />
            )}
        </ul>
    )
}

export default PersonsList