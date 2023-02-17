import React from "react";
import { CssBaseline } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import { Actors, MovieInformation, Movies, Navbar, Profile } from "./index";
import { styled } from "@mui/system";

const App = () => {
  const RootComp = styled("div")({
    display: "flex",
    height: "100%",
  });

  const Toolbar = styled("div")({
    height: "70px",
  });

  const Content = styled("main")({
    flexGrow: "1",
    padding: "2em",
  });

  return (
    <RootComp>
      <CssBaseline />
      <Navbar />
      <Content>
        <Toolbar />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </Content>
    </RootComp>
  );
};

export default App;
