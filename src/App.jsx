import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AppRoutes from "./components/common/AppRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <div className="min-h-140 bg-[#e3e6e6]">
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
