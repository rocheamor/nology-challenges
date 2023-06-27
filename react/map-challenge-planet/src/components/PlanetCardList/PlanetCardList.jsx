import style from './PlanetCardList.module.scss';
import PlanetCard from '../PlanetCard/PlanetCard';

const PlanetCardList = ({ planets }) => {

  const sortedPlanets = planets.slice().sort((planet1, planet2) => planet1.diameterInKm - planet2.diameterInKm);

  return (
    <section className={style.list}>
      {sortedPlanets.map((planet, index) => (
      <PlanetCard key={index} planet={planet} />
       ))}
 
    </section>
  )
}

export default PlanetCardList;


// In this code, the sortedPlanets variable is created by making a copy of the planets array using the slice() method, and then applying the sort() method to sort the planets based on their diameterInKm property.

// The sorted sortedPlanets array is then mapped and rendered in the JSX, ensuring that the PlanetCard components are displayed in the desired order.

// Now, when you use the PlanetCardList component and pass the planets array as a prop, it will display the planets sorted based on their distance from the Sun.