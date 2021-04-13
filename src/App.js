import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import lozad from "lozad";
import Router from "./Router";

function App() {
  const observer = lozad();
  observer.observe();

  return (
    <BrowserRouter>
      <ParallaxProvider>
        <Router />
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
