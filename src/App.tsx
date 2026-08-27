import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Landing } from "./sections/Landing";
import { Services } from "./sections/Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
