import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import { Landing } from "./sections/Landing";
import { Services } from "./sections/Services";
import { Gallery } from "./sections/Gallery";
import { About } from "./sections/About";

const home = (
  <>
    <Landing />
    <Services />
    <Gallery />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={home} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={home} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
