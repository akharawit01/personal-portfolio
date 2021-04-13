import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import lozad from "lozad";
import Helmet from "react-helmet";

import Router from "./Router";

import me from "./assets/me.jpg";

function App() {
  const observer = lozad();
  observer.observe();

  return (
    <>
      <Helmet>
        <title>Akharawit, Personal Portfolio.</title>
        <meta name="title" content="Akharawit, Personal Portfolio." />
        <meta
          name="description"
          content="Akharawit, A Front End developer, Love to travel."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://akharawit-personal-portfolio.herokuapp.com/"
        />
        <meta property="og:title" content="Akharawit, Personal Portfolio." />
        <meta
          property="og:description"
          content="Akharawit, A Front End developer, Love to travel."
        />
        <meta property="og:image" content={me} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://akharawit-personal-portfolio.herokuapp.com/"
        />
        <meta
          property="twitter:title"
          content="Akharawit, Personal Portfolio."
        />
        <meta
          property="twitter:description"
          content="Akharawit, A Front End developer, Love to travel."
        />
        <meta property="twitter:image" content={me} />
      </Helmet>
      <BrowserRouter>
        <ParallaxProvider>
          <Router />
        </ParallaxProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
