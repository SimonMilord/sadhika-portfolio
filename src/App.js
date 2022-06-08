import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import IntroPage from "./pages/Intro/IntroPage";
import ContactPage from "./pages/Contact/ContactPage";
// import FunPage from "./pages/Fun/FunPage";
import WorkPage from "./pages/Work/WorkPage";
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
          <Route path="/intro" exact element={<IntroPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
          <Route path="/work" exact element={<WorkPage />} />
          {/* <Route path="/fun" exact element={<FunPage />} /> */}
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
