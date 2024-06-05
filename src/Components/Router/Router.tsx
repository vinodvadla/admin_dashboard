// Router.js
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Layout from "../Layout/Layout";
function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default Router;
