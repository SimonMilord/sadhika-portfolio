import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import AboutPage from "./pages/About/AboutPage";
import Balance from "./pages/Projects/Balance/Balance";
import Billing from "./pages/Projects/Billing/Billing";
import SalesTax from "./pages/Projects/SalesTax/SalesTax";
import TaxLiab from "./pages/Projects/TaxLiab/TaxLiab";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/intro" exact element={<AboutPage />} />
          <Route path="/taxliab" exact element={<TaxLiab />} />
          <Route path="/salesTax" exact element={<SalesTax />} />
          <Route path="/billing" exact element={<Billing />} />
          <Route path="/balance" exact element={<Balance />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}
