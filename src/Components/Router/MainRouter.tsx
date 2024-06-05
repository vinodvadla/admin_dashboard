import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Router from "./Router";
import AuthRoutes from "../Auth/AuthRoutes";
import { useAuth } from "../../Contexts/Authcontext";
import App from "../../App";
function MainRouter() {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {currentUser ? (
            <>
              <Route path="auth/*" element={<AuthRoutes />} />
              <Route index element={<Navigate to="/auth/login" />} />
            </>
          ) : (
            <>
              <Route path="/*" element={<Router />} />
              <Route index element={<Navigate to="/dashboard" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
