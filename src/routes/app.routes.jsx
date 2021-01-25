import { Route, Switch } from "react-router-dom";

//Pages
import HomePage from "../pages/Home";
import News from "../pages/News";
import CreateNews from "../pages/CreateNews";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/classificados" exact component={News} />
    <Route path="/criar/classificados" component={CreateNews} />
  </Switch>
);
export default AppRoutes;
