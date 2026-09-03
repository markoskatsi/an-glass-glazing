import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhyUs } from "../sections/WhyUs";
import { Contact } from "../sections/Contact";
import ScrollToTop from "../ui/ScrollToTop";
import { useEffect } from "react";

function Layout(props: { children: React.ReactNode }) {
  
  useEffect(() => {
    const id = window.location.hash.substring(1);

    document.getElementById(id)?.scrollIntoView();
    
  }, []);

  return (
    <div>
      <Header />
      <ScrollToTop />
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
