import React from "react";
import { Link } from "react-router-dom";
import logo5 from "../logo5.png";
import styles from "../styles/styles";
import { solarProducts } from "../static/data";
import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
// import { useSelector } from "react-redux";
import { BiMenuAltLeft } from "react-icons/bi";
// import DropDown from "./DropDown";
import Navbar from "./NavBar";
import { CgProfile } from "react-icons/cg";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [loginDropDown, setLoginDropDown] = useState(false);

  //   const { cart } = useSelector((state) => state.cart);
  //   const { isVendor } = useSelector((state) => state.seller);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      solarProducts &&
      solarProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <div
      className={"z-10"}
      style={{
        width: "100%",
      }}
    >
      <div
        className="hidden 800px:h-[100px] 800px:my-[20px] 800px:flex items-center justify-between"
        style={{ margin: 0 }}
      >
        <div>
          <Link to="/">
            <img
              src={logo5}
              alt="logo"
              style={{
                height: "100px",
                width: "150px",
                marginTop: "-10px",
              }}
            />
          </Link>
        </div>
        {/* search box */}
        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="Search Product..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="h-[40px] w-full px-2 border-[#051d40] border-[2px] rounded-md"
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-6 top-1.5 cursor-pointer"
          />

          {searchData && searchData.length !== 0 ? (
            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
              {searchData &&
                searchData.map((i, index) => {
                  return (
                    <Link to={`/product/${i.id}`}>
                      <div className="w-full flex items-start-py-3">
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>

        <div className="flex w-[170px] bg-black h-[50px]   items-center justify-center rounded-xl cursor-pointer">
          <div
            className="relative cursor-pointer mr-[15px] "
            onClick={() => setLoginDropDown(!loginDropDown)}
          >
            <div className=" text-white py-4 px-4 cursor-pointer ">Login </div>

            {loginDropDown && (
              <div
                className="absolute top-full left-0 bg-white w-36 py-2 rounded-md shadow-md z-20"
                onMouseLeave={() => setLoginDropDown(false)}
              >
                <Link to="/LoginPage" className="block px-2 py-2 text-black">
                  Login as User
                </Link>
                <Link to="/LoginPage" className="block px-2 py-2 text-black">
                  Login as Vendor
                </Link>
              </div>
            )}
          </div>

          <div className="  relative cursor-pointer ">
            <Link to="/Signup">
              <div className=" text-white py-4 px-4  cursor-pointer">
                Register
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`${styles.button} `}
          style={{ width: "170px", marginRight: "20px" }}
        >
          <Link to="/vendor">
            <h1 className="text-[#fff] flex items-center">
              Become a Vendor <IoIosArrowForward className="ml-1" />
            </h1>
          </Link>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#051d40] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          {/* categories */}
          <div>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>

              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
            </div>
          </div>

          {/* navigation items */}
          <div className={`${styles.normalFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#FFA500] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#FFA500] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  1 {/* Display cart count here */}
                </span>
              </div>
            </div>

            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <Link to="/">
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
