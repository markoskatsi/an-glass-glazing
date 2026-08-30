import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhyUs } from "../sections/WhyUs";
import { Contact } from "../sections/Contact";

function Layout(props: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>
        {props.children}
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
