// this is a wrapper function in react.
// Main things are that you need to add in props.children and also addon classnames passes to it
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
