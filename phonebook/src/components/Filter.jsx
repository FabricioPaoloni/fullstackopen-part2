const Filter = (props) => {
    return (
        <p>
            filter the list: <input value={props.filterName} onChange={props.handleFilterName} />
        </p>
    )
}

export default Filter