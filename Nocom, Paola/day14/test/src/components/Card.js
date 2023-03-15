const Card = ({ name, desc }) => {
    return (
        <div>
            <h3>{ name }</h3>
            <p>{ desc }</p>
        </div>
    )
}

Card.defaultProps = {
    name: 'New Product'
}
export default Card;