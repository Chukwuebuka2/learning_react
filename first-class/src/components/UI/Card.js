import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className; // understood the reason. That's to have more tyhan one class.
    return <div className={classes}>{props.children}</div>
}

export default Card;

/* Use this type of wrapper when you notice that there is repetition of css code */