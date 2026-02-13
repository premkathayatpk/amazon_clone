import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router";

const BottomNav = () => {
  return (
    <div className="bg-[#232f3e] flex items-center text-white px-8 py-1.5 gap-8">
      <div className="flex items-center font-bold">
        <MdOutlineMenu size={28} />
        All
      </div>
      <NavLink to="/todayDeals">Today's Deals</NavLink>
      <NavLink to="/primeVideo">Prime Video</NavLink>
      <NavLink to="/giftCards">Gift Cards</NavLink>
      <NavLink to="/customerService">Customer Service</NavLink>
      <NavLink to="/sell">Sell</NavLink>
    </div>
  );
};

export default BottomNav;
