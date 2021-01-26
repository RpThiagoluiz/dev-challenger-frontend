import { Switch, Route } from "react-router-dom";

//Pages

import HomePage from "../pages/Home";
import News from "../pages/News";
import SingIn from "../pages/SingIn";

const AuthRoutes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/classificados" exact component={News} />
    <Route path="/criar/classificados" component={SingIn} />
  </Switch>
);
export default AuthRoutes;
