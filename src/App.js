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
        {/* <!-- HTML Meta Tags --> */}
        <title>Akharawit.A, A Front End developer, Love to travel</title>
        <meta
          name="description"
          content="Akharawit.A, A Front End developer, Love to travel"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Akharawit.A Personal Portfolio" />
        <meta
          itemprop="description"
          content="Akharawit.A, A Front End developer, Love to travel"
        />
        <meta itemprop="image" content={me} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://akharawit-personal-portfolio.herokuapp.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Akharawit.A Personal Portfolio" />
        <meta
          property="og:description"
          content="Akharawit.A, A Front End developer, Love to travel"
        />
        <meta property="og:image" content={me} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akharawit.A Personal Portfolio" />
        <meta
          name="twitter:description"
          content="Akharawit.A, A Front End developer, Love to travel"
        />
        <meta name="twitter:image" content={me} />
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
