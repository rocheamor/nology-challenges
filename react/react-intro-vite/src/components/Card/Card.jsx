import styles from './Card.module.scss';

const Card = ({ image, heading, subheading, content, button }) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={image} />
      <h3>{heading}</h3>
      <h4>{subheading}</h4>
      <p>{content}</p>
      <button>{button}</button>
    </article>
  );
};

export default Card;