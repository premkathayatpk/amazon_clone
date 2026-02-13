import { CiLocationOn } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";

const TopNav = () => {
  return (
    <div className="bg-[#131921] h-15 flex flex-wrap items-center text-white justify-evenly ">
      <div className="h-12 hover:border rounded-xs flex items-end px-2 ">
        <img
          className="h-10 "
          src="https://www.pngmart.com/files/23/Amazon-White-Logo-PNG-Pic.png"
          alt="Logo"
        />
      </div>
      <div className="hover:border h-12 rounded-xs flex  items-center px-2  ">
        <p>
          <CiLocationOn size={25} />
        </p>
        <p className="flex flex-col leading-4">
          <span className="text-sm text-gray-300 ">Deliver to</span>
          <span className="text-xsl font-bold ">Nepal</span>
        </p>
      </div>
      <div className="flex items-center rounded-sm bg-white text-black w-[60vw]">
        <select className="w-[10%] rounded-l-sm  py-2 px-2 bg-gray-200  text-black">
          <option value="">All</option>
          <option value="">Arts & Craft</option>
          <option value="">B</option>
          <option value="">B</option>
        </select>

        <input
          className=" py-1.5 px-3 w-[84%] font-semibold border-none"
          type="text"
          placeholder="Search Amazon"
        />
        <button className="bg-[#febd69]  items-center w-[6%] h-[100%] py-1 rounded-r-sm  px-2 text-gray-800">
          <IoMdSearch size={31} />
        </button>
      </div>
      <div className="hover:border rounded-xs px-2 h-12 leading-4 flex flex-col justify-center ">
        <p className="text-sm text-gray-200 ">Hello, sign in</p>
        <h3 className="text-xsl font-bold ">Account & Lists</h3>
      </div>
      <div className="hover:border rounded-xs px-2 h-12 flex flex-col justify-center leading-4 ">
        <p className="text-sm text-gray-200 ">Returns</p>
        <h3 className="text-xsl font-bold ">& Orders</h3>
      </div>
      <div className="hover:border rounded-xs flex  items-end px-2 py-0.5 ">
        <BiCart size={35} />
        <p className="text-xsl font-bold ">Cart</p>
      </div>
    </div>
  );
};

export default TopNav;
