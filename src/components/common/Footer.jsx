import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#232f3e] text-white">
        <div className="py-10 flex flex-wrap justify-center gap-20  ">
          <div className="">
            <h3 className="text-xl font-semibold">Get to Know Us</h3>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div>
            <h3>Make Money with Us</h3>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>See More Make Money with Us</li>
            </ul>
          </div>
          <div>
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>
          <div>
            <h3>Let Us Halpe You</h3>
            <ul>
              <li>Amazon ANd COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices </li>
              <li>Help </li>
            </ul>
          </div>
        </div>

        <div className="h-12 border-t border-gray-500 flex justify-center items-center py-12 ">
          <img
            className="h-8 "
            src="https://www.pngmart.com/files/23/Amazon-White-Logo-PNG-Pic.png"
            alt="Logo"
          />
        </div>
      </div>

      <div className="bg-[#131a22]  text-white py-8 flex flex-col items-center gap-10">
        <div className="flex w-[70vw]  flex-wrap gap-8  justify-center  ">
          <div className="text-sm w-30">
            <p className="">Amazon Music</p>
            <p className="text-gray-400 ">Stream millions of songs</p>
          </div>
          <div className="text-sm w-30">
            <p className="">Amazon Ads</p>
            <p className="text-gray-400 ">
              Reach customers wherever they spand their time
            </p>
          </div>
          <div className="text-sm w-30">
            <p className="">6pm</p>
            <p className="text-gray-400 ">Score deals on fashion brands</p>
          </div>
          <div className="text-sm w-30">
            <p className="">AbeBooks</p>
            <p className="text-gray-400 ">Books, art & collectibles</p>
          </div>
          <div className="text-sm w-30">
            <p className="">ACX</p>
            <p className="text-gray-400 ">Audiobook Publishing Made Easy</p>
          </div>
          <div className="text-sm w-30">
            <p className="">Sell on Amazon</p>
            <p className="text-gray-400 ">Staet a Selling Account</p>
          </div>
          <div className="text-sm w-30">
            <p className="">Veeqo</p>
            <p className="text-gray-400 ">
              Shipping Software Incentory Management
            </p>
          </div>
          <div className="text-sm w-30">
            <p className="">Amazon Business</p>
            <p className="text-gray-400 ">Everything for Your Business</p>
          </div>
          <div className="text-sm w-30">
            <p className="">AmazonGlobal</p>
            <p className="text-gray-400 ">Ship orders Internationally</p>
          </div>
          <div className="text-sm w-30">
            <p className="">6pm</p>
            <p className="text-gray-400 ">Score deals on fashion brands</p>
          </div>
          <div className="text-sm w-30">
            <p className="">Amazon Web Services</p>
            <p className="text-gray-400 ">Scalable Cloud Computing Service</p>
          </div>
          <div className="text-sm w-30">
            <p className="">Audible</p>
            <p className="text-gray-400 ">
              Listen to Books & Original Audio Performances
            </p>
          </div>
          <div className="text-sm w-30">
            <p className="">Box Office Mojo</p>
            <p className="text-gray-400 ">Find Movie BBox Office Data</p>
          </div>
          <div className="text-sm w-30">
            <p className="">Goodreads</p>
            <p className="text-gray-400 ">Book reviews & recommendations</p>
          </div>
          <div className="text-sm w-30">
            <p className="">IMDb</p>
            <p className="text-gray-400 ">Movies, TV & Celebrities</p>
          </div>
          <div className="text-sm w-30">
            <p className="">IMDbPro</p>
            <p className="text-gray-400 ">
              Get Info Entertainment Professionals Need
            </p>
          </div>
          <div className="text-sm w-30">
            <p className="">Kindle Direct Publishing</p>
            <p className="text-gray-400 ">
              Indie Digital & Print Publishing Made Easy
            </p>
          </div>
          <div className="text-sm w-30">
            <p className="">Prime Video Direct </p>
            <p className="text-gray-400 ">Video Distribution Made Easy</p>
          </div>
          <div className="text-sm w-30">
            <p className="">Shopbop</p>
            <p className="text-gray-400 ">Designer Fashon Brands</p>
          </div>
        </div>
        <div className="text-center text-[13px] ">
          <p className="flex gap-5">
            <span>Conditions of Use</span> <span>Privacy Notice</span>{" "}
            <span>Consumer Health Data Privacy Disclosure</span>{" "}
            <span>Your Ads Privacy Choices</span>
          </p>
          <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
