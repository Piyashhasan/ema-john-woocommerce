import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Shop from "./pages/Shop/Shop";
import NavBar from "./reusable-components/Nav/NavBar";
import Order from "./pages/Order/Order";
import Inventory from "./pages/Inventory/Inventory";
import Registration from "./pages/Registration/Registration";
import RequireAuth from "./reusable-components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" replace></Navigate>}
        ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route
          path="/order"
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
