import React, { Fragment, useEffect, useState } from "react";
import { Router, Route, Redirect } from "react-router-dom";
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

function NavArrow({ routes, history, type, leftOffset, setDirection }) {
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
    setDirection(type);
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

function keyPress(event) {
  if (event.which === 37 || event.keyCode === 37) {
    document.querySelector(".leftArrow").click();
  }
  if (event.which === 39 || event.keyCode === 39) {
    document.querySelector(".rightArrow").click();
  }
}

export default function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [direction, setDirection] = useState("right");
  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keyup", keyPress);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("onkeyup", keyPress);
    };
  }, []);
  let allRoutes = routes.map(({ path, Component }, i) => (
    <Route key={path} path={path}>
      <Fragment>
        <div className={`page`}>
          <div className="page-container">
            <div className="content">
              <Component />
            </div>
          </div>
        </div>
      </Fragment>
      {/* {({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={300}
          classNames={`page-${direction}`}
          unmountOnExit
        >
          <Fragment>
            <div className={`page page-${direction}`}>
              <div className="page-container">
                <div className="content">
                  <Component />
                </div>
              </div>
            </div>
          </Fragment>
        </CSSTransition>
      )} */}
    </Route>
  ));
  allRoutes = [
    ...allRoutes,
    <Redirect key={"somekey"} exact from="/" to="about" />,
  ];
  return (
    <Router history={history}>
      <Navbar
        direction={direction}
        width={innerWidth}
        routes={routes}
        setDirection={setDirection}
        history={history}
      />
      <NavArrow
        leftOffset={innerWidth}
        routes={routes}
        history={history}
        setDirection={setDirection}
        type="left"
      />
      <NavArrow
        leftOffset={innerWidth}
        routes={routes}
        history={history}
        setDirection={setDirection}
        type="right"
      />
      {allRoutes}
    </Router>
  );
}
