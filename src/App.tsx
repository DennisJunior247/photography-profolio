import { Header, Footer } from "./layout";
import { Hero, Featured, Slideshow } from "./components";
import { ladiesCollection, BlackXwhiteCollection } from "./utils/dataHelper";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured collection={ladiesCollection} title="The 1951 Collection" />
      <Slideshow />
      <Featured collection={BlackXwhiteCollection} title="Black X White Collection" />
      <Footer />
    </div>
  );
};

export default App;
