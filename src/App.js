import Parallax from "./components/parallax";
import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import "./App.css"
const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  const [showParallax, setShowParallax] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParallax(false); // Hide Parallax after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {showParallax && (
        <div className="parallax-wrapper">
          <Parallax />
        </div>
      )}
      {!showParallax && (
        <Suspense fallback={null}>
          <GlobalStyle />
          <ScrollToTop />
          <Header />
          <Home />
          <Footer />
        </Suspense>
      )}
    </>
  );
}
export default App;
