// AuthRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import AuthLayout from "./AuthLayout";

function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;
