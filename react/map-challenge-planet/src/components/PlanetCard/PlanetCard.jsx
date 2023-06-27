import style from './PlanetCard.module.scss';

const PlanetCard = ({ planet }) => {
  const { image, planetName, diameterInKm, distanceFromSun, numberOfMoons, lengthOfYear } = planet;


  return (
    <article className={style.card}>
      <img src={image} />
      <div className={`${style.text} ${numberOfMoons==="0" ? style.grey__background : ''}`}>
        <h3>{planetName}</h3>
        <p>Diameter: {diameterInKm}</p>
        <p>Distance from the sun: {distanceFromSun}</p>
        <p>Number of moons: {numberOfMoons}</p>
        <p>Length of year: {lengthOfYear}</p>
      </div>
    </article>
  );
};

export default PlanetCard;