//Packages
import React from "react";
import { Switch, Route } from "react-router-dom";
//Constant
import route from "../constant/routes";
//Page
import homepage from "./Homepage/HomePage";
import ProfilePage from "./ProfilePage/ProfilePage";
import CreatePost from "./CreatePost/CreatePost";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Pass from "./Pass/Pass";
import detailpost from "./DetalPost/DetailPost";
export default (
  <Switch>
    <Route exact path={route.homepage} component={homepage} />
    <Route exact path={route.profile} component={ProfilePage} />
    <Route exact path={route.createpost} component={CreatePost} />
    <Route exact path={route.homepage} component={homepage} />
    <Route exact path={route.Login} component={Login} />
    <Route exact path={route.Register} component={Register} />
    <Route exact path={route.Pass} component={Pass} />
    <Route exact path={route.detailpost} component={detailpost} />
  </Switch>
);
