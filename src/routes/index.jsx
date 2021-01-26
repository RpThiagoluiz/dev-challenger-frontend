import { BrowserRouter } from "react-router-dom";
//Routes
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
//AuthHook
const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
export default Routes;
