import React from "react";
import { Switch, Route } from "react-router-dom";

import route from "../constant/routes";
import homepage from "./Homepage/HomePage";
import ProfilePage from "./ProfilePage/ProfilePage";

export default (
  <Switch>
    <Route exact path={route.homepage} component={homepage} />
    <Route exact path={route.profile} component={ProfilePage} />
  </Switch>
);
