import './Card.css'

function Card(props) {

     const classes = 'card ' + props.className; //didnt understood

     return <div className={classes}>{props.children}</div>

}

export default Card