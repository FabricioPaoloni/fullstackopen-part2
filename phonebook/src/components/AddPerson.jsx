const AddPerson = (props) => {
    return (
        <form onSubmit={props.handleSubmitName}>
            <p>
                name: <input value={props.newName} onChange={props.handleInputName} />
            </p>
            <p>
                number: <input value={props.newNumber} onChange={props.handleInputNumber} />
            </p>
            <button type="submit">add</button>
        </form>
    )
}

export default AddPerson