import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Rounds, Round } from "./components/index";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
import EventListeners from "./utils/EventListeners";

function App() {
  return (
    <Router>
      <AuthProvider>
        <EventListeners />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Rounds />} />
            <Route path="/round/:id" element={<Round />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
