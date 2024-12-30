import Person from "./Person"

const PersonsList = (props) => {
    return (
        <ul>
            {props.personsToShow.map(person => <Person key={person.name} person={person} handleDeletePerson={props.handleDeletePerson}/>
            )}
        </ul>
    )
}

export default PersonsList