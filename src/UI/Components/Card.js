import CardClasses from './Card.module.css'


const Card = (props) => {
    return (
      <div className={CardClasses.card}>
        {props.children}
      </div>
    );
  }
  
  export default Card;
  