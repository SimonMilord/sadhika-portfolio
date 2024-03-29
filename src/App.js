import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import Balance from "./pages/Projects/Balance/Balance";
import SalesTax from "./pages/Projects/SalesTax/SalesTax";
import TaxLiab from "./pages/Projects/TaxLiab/TaxLiab";
import MCCY from "./pages/Projects/MCCY/Mccy";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="App__mobileMsg">Hi! Please see this site on a larger screen for a better experience</h1>
        <div className="App__core">
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/taxliab" exact element={<TaxLiab />} />
            <Route path="/salesTax" exact element={<SalesTax />} />
            <Route path="/balance" exact element={<Balance />} />
            <Route path="/mccy" exact element={<MCCY />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
