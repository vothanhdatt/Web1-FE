//Packages
import React from "react";
import { Switch, Route } from "react-router-dom";
//Constant
import route from "../constant/routes";
//Page
import homepage from "./Homepage/HomePage";
import ProfilePage from "./ProfilePage/ProfilePage";
import CreatePost from "./CreatePost/CreatePost";

export default (
  <Switch>
    <Route exact path={route.homepage} component={homepage} />
    <Route exact path={route.profile} component={ProfilePage} />
    <Route exact path={route.createpost} component={CreatePost} />
  </Switch>
);
