import React, { Fragment, useEffect, useState } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import history from "./history";
import Navbar from "./Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

const routes = [
  { path: "/about", name: "About", Component: About },
  { path: "/projects", name: "Projects", Component: Projects },
  { path: "/contact", name: "Contact", Component: Contact },
];

function NavArrow({ routes, history, type, leftOffset }) {
  let getRoute = ({ type }) => {
    // find current route's index
    let currentRoute = window.location.pathname;
    // set link to index-1 route
    let currentIndex = routes.findIndex((route) => {
      return route.path === currentRoute;
    });
    if (type === "left") {
      if (currentIndex !== 0) {
        return routes[currentIndex - 1].path;
      } else {
        return routes[currentIndex].path;
      }
    } else if (type === "right") {
      if (currentIndex < routes.length - 1) {
        return routes[currentIndex + 1].path;
      } else {
        return routes[currentIndex].path;
      }
    }
  };
  let onClick = (e) => {
    e.preventDefault();
    let path = getRoute({ type });
    return history.push(path);
  };
  return (
    <div
      className={`arrow ${type}Arrow`}
      onClick={onClick}
      style={{
        left: type === "right" ? leftOffset : 0,
      }}
    ></div>
  );
}

export default function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Router history={history}>
      <Navbar width={innerWidth} />
      <NavArrow
        leftOffset={innerWidth}
        routes={routes}
        history={history}
        type="left"
      />
      {routes.map(({ path, Component }, i) => (
        <Route key={path} path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <Fragment>
                <div className="page">
                  <div className="page-container">
                    <div className="content">
                      <Component />
                    </div>
                  </div>
                </div>
              </Fragment>
            </CSSTransition>
          )}
        </Route>
      ))}
      {<Redirect exact from="/" to="about" />}
      <NavArrow
        leftOffset={innerWidth}
        routes={routes}
        history={history}
        type="right"
      />
    </Router>
  );
}
