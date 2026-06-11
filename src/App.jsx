import { useState } from "react";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkSection from "./components/WorkSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const isHome = currentPage === "home";

  return (
    <>
      <Cursor />
      <Nav currentPage={currentPage} onNavigate={navigate} />
      {isHome && (
        <>
          <Hero onNavigate={navigate} />
          <About />
          <WorkSection onNavigate={navigate} />
          <Contact />
          <Footer />
        </>
      )}
      {!isHome && (
        <CaseStudy projectId={currentPage} onNavigate={navigate} />
      )}
    </>
  );
}