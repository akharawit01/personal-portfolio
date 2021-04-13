import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { Header, Footer, ScrollToTop } from "../components";
import Contact from "../contents/Contact";

import routes from "./config";
import GlobalStyles from "../globalStyles";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
      <GlobalStyles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer>
        <Contact id="contact" />
      </Footer>
    </Suspense>
  );
};

export default Router;
