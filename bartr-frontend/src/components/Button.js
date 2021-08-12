const buttonStyle = {
    margin: '10px 10px 10px 0'
};

const Button = (props) => {
    return (
        <button
            className="button"
            style = {buttonStyle}
            onClick={props.handleClick}>{props.label}
            </button>
    )
}

export default Button
