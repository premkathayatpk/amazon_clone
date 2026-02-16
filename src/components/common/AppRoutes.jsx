import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import TodayDeals from "../../pages/TodayDeals";
import PrimeVideo from "../../pages/PrimeVideo";
import GiftCards from "../../pages/GiftCards";
import CustomerService from "../../pages/CustomerService";
import Sell from "../../pages/Sell";
import ProductDetails from "../../pages/ProductDetails";
import Products from "../../pages/Products";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todayDeals" element={<TodayDeals />} />
        <Route path="/primeVideo" element={<PrimeVideo />} />
        <Route path="/giftCards" element={<GiftCards />} />
        <Route path="/customerService" element={<CustomerService />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
