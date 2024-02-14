import CardStyle from './Card.module.css';

function Card({children}) {
    return (
        <div className={CardStyle.card}>{children}</div>
    )
}
export default Card;