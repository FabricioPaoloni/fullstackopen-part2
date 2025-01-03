const Notification = ({ message, style }) => {
    const successStyle = {
        'fontSize': 24,
        'borderStyle': 'solid',
        'borderRadius': 5,
        'backgroundColor': 'lightgreen',
        'color': 'darkgreen'
    }
    const errorStyle = {
        'fontSize': 24,
        'borderStyle': 'solid',
        'borderRadius': 5,
        'backgroundColor': '#FFCCCB',
        'color': 'darkred'
    }
    let styleMessage = style === 'success' ? successStyle : errorStyle 

    if (message === null) {
        return null
    }

    return (
        <div style={styleMessage}>
            {message}
        </div>
    )
}

export default Notification