import React, { useState } from "react";
import {
  AiOutlineCamera,
  AiOutlineArrowRight,
  AiOutlineDelete,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import styles from "../styles/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { MdOutlineTrackChanges, MdTrackChanges } from "react-icons/md";

import { Link } from "react-router-dom";

const ProfileContent = ({ active, data }) => {
  //   const user = useSelector((state) => state.u
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      {/* profilePage */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src="../dummy.jpeg"
                className="w-[150px] h-[150px]  border-[3px] border-[#3ad132] rounded-full "
              />
              <div
                className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex
            items-center justify-center cursor-pointer absolute bottom-[5px]
            right-[5px]"
              >
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full  800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full 800px:flex block pb-3">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] `}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Enter Password</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full 800px:flex block  pb-3">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Address 1 </label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] `}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>

              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}

      {/* orderPage */}
      {active === 2 && (
        <div>
          <AllOrder />
        </div>
      )}

      {/* Refund Page */}
      {active === 3 && (
        <div>
          <AllRefundsOrder />
        </div>
      )}

      {/* Track order */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}

      {/* Payment methods */}
      {active === 6 && (
        <div>
          <PaymentMethods />
        </div>
      )}

      {/* user Address */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}

      {/* user Address */}
      {active === 8 && <div></div>}
    </div>
  );
};

const AllOrder = () => {
  const orders = [
    {
      _id: "123ab45",
      orderItems: [
        {
          name: "High Solar Panel",
        },
      ],
      totalPrice: 1400,
      orderStatus: "processing",
    },
    {
      _id: "678cd90",
      orderItems: [
        {
          name: "Solar Battery",
        },
        {
          name: "Solar Charger",
        },
      ],
      totalPrice: 800,
      orderStatus: "shipped",
    },
    {
      _id: "456ef12",
      orderItems: [
        {
          name: "Solar Inverter",
        },
      ],
      totalPrice: 600,
      orderStatus: "delivered",
    },
    // Additional orders
    {
      _id: "789gh34",
      orderItems: [
        {
          name: "Solar Panel Mounting Kit",
        },
      ],
      totalPrice: 200,
      orderStatus: "processing",
    },
    {
      _id: "901ij56",
      orderItems: [
        {
          name: "Solar Water Heater",
        },
      ],
      totalPrice: 1200,
      orderStatus: "processing",
    },
    {
      _id: "234kl78",
      orderItems: [
        {
          name: "Solar Lights",
        },
        {
          name: "Solar Fan",
        },
      ],
      totalPrice: 500,
      orderStatus: "shipped",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Items
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Total Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-gray-100 border-b"
                        : "bg-white border-b"
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order._id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {order.orderItems.map((item, idx) => (
                        <span key={idx}>
                          {item.name}
                          {idx !== order.orderItems.length - 1 && ", "}
                        </span>
                      ))}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      ${order.totalPrice}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {order.orderStatus}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Link to={`/order/${order._id}`}>
                        <button className="flex items-center">
                          <AiOutlineArrowRight size={18} />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllRefundsOrder = () => {
  const orders = [
    {
      _id: "678cd90",
      orderItems: [
        {
          name: "Solar Battery",
        },
        {
          name: "Solar Charger",
        },
      ],
      totalPrice: 800,
      orderStatus: "shipped",
    },
    {
      _id: "456ef12",
      orderItems: [
        {
          name: "Solar Inverter",
        },
      ],
      totalPrice: 600,
      orderStatus: "delivered",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Refunded Items
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Total Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-gray-100 border-b"
                        : "bg-white border-b"
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order._id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {order.orderItems.map((item, idx) => (
                        <span key={idx}>
                          {item.name}
                          {idx !== order.orderItems.length - 1 && ", "}
                        </span>
                      ))}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      ${order.totalPrice}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {order.orderStatus}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Link to={`/order/${order._id}`}>
                        <button className="flex items-center">
                          <AiOutlineArrowRight size={18} />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrackOrder = () => {
  const orders = [
    {
      _id: "678cd90",
      orderItems: [
        {
          name: "Solar Battery",
        },
        {
          name: "Solar Charger",
        },
      ],
      totalPrice: 800,
      orderStatus: "shipped",
    },
    {
      _id: "456ef12",
      orderItems: [
        {
          name: "Solar Inverter",
        },
      ],
      totalPrice: 600,
      orderStatus: "delivered",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Refunded Items
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Total Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-gray-100 border-b"
                        : "bg-white border-b"
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order._id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {order.orderItems.map((item, idx) => (
                        <span key={idx}>
                          {item.name}
                          {idx !== order.orderItems.length - 1 && ", "}
                        </span>
                      ))}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      ${order.totalPrice}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {order.orderStatus}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Link to={`/order/${order._id}`}>
                        <button className="flex items-center">
                          <MdOutlineTrackChanges size={18} />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentMethods = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className=" text-[25px] text-center font-[600] text-[#000000ba] pb-2">
          Payment Methods
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-[#fff]">Add new</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img src="../visa.svg" style={{ height: 40, marginTop: 8 }} />
          <h5 className="pl-5 font-[600]">Shah Ali</h5>
        </div>
        <div className=" pl-8 flex items-center">
          <h6>123 **** *** ****</h6>
          <h5 className=" pl-6">05/2025</h5>
        </div>
        <div className=" min-w-[10%] pl-8 flex items-center justify-between">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const Address = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className=" text-[25px] text-center font-[600] text-[#000000ba] pb-2">
          My Address
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-[#fff]">Add new</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <h5 className="pl-5 font-[600]">Default</h5>
        </div>
        <div className=" pl-8 flex items-center">
          <h6>Gulshan , A22 Commercial Street</h6>
        </div>

        <div className=" pl-8 flex items-center">
          <h6>(213)768-5647</h6>
        </div>
        <div className=" min-w-[10%] pl-8 flex items-center justify-between">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
