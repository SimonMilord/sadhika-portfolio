import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import MainPage from "./pages/Main/MainPage";
import ContactPage from "./pages/Contact/ContactPage";
import FunPage from "./pages/Fun/FunPage";
import WorkPage from "./pages/Work/WorkPage";

export default function App() {

  const handleTheme = (value) => {

  }

  return (
    <Router>
      <div className="App">
        <Header getTheme={handleTheme}/>
        <Routes>
          <Route
            path="/"
            exact
            element={<MainPage/>}
          />
          <Route
            path="/contact"
            exact
            element={<ContactPage/>}
          />
          <Route
            path="/work"
            exact
            element={<WorkPage/>}
          />
          <Route
            path="/fun"
            exact
            element={<FunPage/>}
          />
          <Route
            path="*"
            element={<MainPage/>}
          />
        </Routes>
      </div>
    </Router>
  );
}
