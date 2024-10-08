import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { FaEdit, FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import AddNewAddress from "../address/AddNewAddress";
import Spinner from "../../defaults/Spinner";
import { UserProps } from ".";
import { pb } from "../../../../utils/pocketbaseClient";

interface ProfileProps {
  editStatus: boolean;
  setEditStatus: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserProps | null;
}

interface AddressProps {
  city: string;
  created_at: string;
  default: boolean;
  deliveryAddress: string;
  id: number;
  name: string;
  mobileNumber: string;
  region: string;
  userId: string;
}

const AccountOverview: FC<ProfileProps> = ({
  editStatus,
  setEditStatus,
  userData,
}) => {
  const [editAddress, setEditAddress] = useState<boolean>(false);
  const [addresses, setAddresses] = useState<AddressProps[]>([]);
  const id = localStorage.getItem("id");

  const fetchAddresses = async () => {
    try {
      const records = await pb.collection('address').getFullList({
        filter: `userId = '${id}'`,
      });
  
      setAddresses(records as unknown as AddressProps[]);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };
  

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {editAddress ? (
        <AddNewAddress
          editAddress={editAddress}
          setEditAddress={setEditAddress}
          userData={userData}
        />
      ) : (
        <div>
          {userData ? (
            <div>
              <div className="">
                <div className="flex lg:items-center space-x-6 pb-10">
                  <h2 className="lg:text-[26px] text-[18px] font-bold font-mono lg:text-[#808080]">
                    Personal Information
                  </h2>
                  <FaEdit
                    fill="#6eb356"
                    className="mt-0.5 block lg:hidden"
                    onClick={() => setEditStatus(!editStatus)}
                  />
                  <p
                    className="text-[#6eb356] text-[15px] font-semibold cursor-pointer lg:block hidden"
                    onClick={() => setEditStatus(!editStatus)}
                  >
                    Edit
                  </p>
                </div>
                <div className="flex lg:items-center space-y-6 lg:space-y-0 lg:flex-row flex-col lg:space-x-6">
                  <div className="text-[#ccc] bg-[#f1f1f1] w-[8rem] flex items-center justify-center py-6 rounded-full">
                    <FaUser size={80} />
                  </div>
                  <div className="space-y-1">
                    <h2 className="lg:text-[24px] text-[18px] mb-3 font-semibold">
                      {userData.name}
                    </h2>
                    <div className="flex items-center text-[14px] space-x-2 text-[#404040]">
                      <FaLocationPin />
                      {addresses
                        .filter((address) => address.default)
                        .map((data) => (
                          <div key={data.id}>
                            <p>
                              {data.deliveryAddress
                                ? data.deliveryAddress
                                : "not set"}
                            </p>
                          </div>
                        ))}
                    </div>
                    <div className="flex items-center text-[14px] space-x-2 text-[#404040]">
                      <FaPhoneAlt />
                      <p>{userData.phone ? userData.phone : "null"}</p>
                    </div>
                    <div className="flex items-center text-[14px] space-x-2 text-[#404040]">
                      <FaEnvelope />
                      <p>{userData.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 lg:w-[80%] w-[100%]">
                <div className="flex justify-between items-center lg:mb-4 mb-6">
                  <h2 className="lg:text-[26px] text-[20px] font-bold font-mono lg:text-[#808080]">
                    Address Book
                  </h2>
                  <button
                    onClick={() => setEditAddress(true)}
                    className="bg-[#6eb356] text-[#fff] h-[40px] lg:w-[200px] w-[140px] lg:text-[14px] text-[13px] font-semibold rounded-md"
                  >
                    Add New Address
                  </button>
                </div>
                {addresses.length > 0 ? (
                  <div className="lg:space-y-0 space-y-6">
                    <h2 className="font-mono text-[#808080] uppercase font-semibold">
                      delivery addresses
                    </h2>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-[10vw] gap-[5vh]">
                      {addresses.map((address) => (
                        <div key={address.id} className="space-y-2">
                          <p className="font-semibold mt-2">{address.name}</p>
                          <p className="text-[#404040] text-[13px]">
                            {`${address.deliveryAddress}, ${address.region}. ${address.city}`}
                          </p>
                          <p className="text-[#404040] text-[14px]">
                            {address.mobileNumber}
                          </p>

                          {address.default && (
                            <p className="text-[#6eb356] font-bold">
                              Default address
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center mt-20 text-[#808080] font-semibold">
                    <h2>No addresses found</h2>
                  </div>
                )}
              </div>

              <div className="my-20">
                <h2 className="text-[26px] font-bold font-mono text-[#808080] pb-2">
                  Account Summary
                </h2>

                <div className="grid lg:grid-cols-4 grid-cols-2 gap-y-10 lg:pr-6 mx-auto">
                  <div className="flex flex-col items-center">
                    <span className="text-[34px] font-bold text-[#21b169]">
                      10
                    </span>
                    <p className="text-[14px]">Total Orders Completed</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[34px] font-bold text-[#fcb221]">
                      3
                    </span>
                    <p className="text-[14px]">Pending Orders</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[34px] font-bold text-[#44c3f7]">
                      7
                    </span>
                    <p className="text-[14px]">Delivered Orders</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[34px] font-bold text-[#a158ff]">
                      $2k+
                    </span>
                    <p className="text-[14px]">Total Amount Spent</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-[70vh] flex items-center justify-center">
              <Spinner />
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default AccountOverview;
