import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import AppLayout from "./AppLayout";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
