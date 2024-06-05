import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Filter from "./Filter";
import MainPage from "./MainPage";
import SpisannyePage from "./Spisannye";
import AddTovarPage from "./AddTovar";
import Autharization from "./Autharization";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import MainPageUsers from './MainPageUsers';
import MainPageAdmin from "./MainPageAdmin";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route
            path="/autharization"
            element={
              <PublicRoute>
                <Autharization />
              </PublicRoute>
            }
          />

          {/* Routes for all users */}
          <Route path="/" element={<MainPageUsers />} />

          {/* Private Routes for Admin */}
          <Route
            path="/add-tovar"
            element={
              <PrivateRoute roles={["admin"]}>
                <AddTovarPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute roles={["admin"]}>
                <MainPageAdmin />
              </PrivateRoute>
            }
            ></Route>

            {/* Private Routes for Accountant */}
          <Route
            path="/spisannye"
            element={
              <PrivateRoute roles={["accountant"]}>
                <SpisannyePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
