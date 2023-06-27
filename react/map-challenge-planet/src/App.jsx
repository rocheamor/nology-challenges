import planets from "./data.json";
import PlanetCardList from './components/PlanetCardList/PlanetCardList'

function App() {
  return (
    <>
      <PlanetCardList planets={planets} />
    </>
  );
}

export default App;