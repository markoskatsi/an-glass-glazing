import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Landing } from "./sections/Landing";
import { Services } from "./sections/Services";
import { Gallery } from "./sections/Gallery";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
