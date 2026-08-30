import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Landing } from "./sections/Landing";
import { Services } from "./sections/Services";
import { Gallery } from "./sections/Gallery";
import { WhyUs } from "./sections/WhyUs";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Services />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
