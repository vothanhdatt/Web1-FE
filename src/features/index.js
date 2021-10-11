import React from "react";
import { Switch, Route } from "react-router-dom";

import route from "../constant/routes";
import homepage from "./Homepage/HomePage";

export default (
  <Switch>
    <Route exact path={route.homepage} component={homepage} />
  </Switch>
);
