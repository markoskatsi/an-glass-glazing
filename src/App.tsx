import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Landing } from "./sections/Landing";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
      </main>
      <Footer />
    </>
  );
}

export default App;
