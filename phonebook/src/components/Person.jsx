import { useState } from "react"


const Person = (props) => {
    const [confirmDelete, setConfirmDelete] = useState(false)
    return(
        <li>{props.person.name}: {props.person.number} -
            { 
            confirmDelete ? 
            <button onClick={()=>props.handleDeletePerson(props.person.id)}>confirm delete</button> :
            <button onClick={() => setConfirmDelete(true)}>delete</button> 
            }
        </li>
    )
}

export default Person