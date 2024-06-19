import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Input from "../../defaults/Input";
import { supabase } from "../../../../utils/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../defaults/Loader";

interface EditAddressProps {
  editAddress: boolean;
  setEditAddress: React.Dispatch<React.SetStateAction<boolean>>;
  clickedAddress: AddressProps | undefined;
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

const EditAddress: FC<EditAddressProps> = ({
  editAddress,
  setEditAddress,
  clickedAddress,
}) => {
  const [addressBook, setAddressBook] = useState({
    name: clickedAddress?.name,
    mobileNumber: clickedAddress?.mobileNumber,
    deliveryAddress: clickedAddress?.deliveryAddress,
    region: clickedAddress?.region,
    city: clickedAddress?.city,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleEditAddress = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("address")
        .update({
          name: addressBook.name,
          mobileNumber: addressBook.mobileNumber,
          deliveryAddress: addressBook.deliveryAddress,
          region: addressBook.region,
          city: addressBook.city,
        })
        .eq("id", clickedAddress?.id);

      if (error) {
        throw error.message;
      } else {
        setLoading(false);
        toast.success("Address Updated!", {
          position: "top-center",
          theme: "light",
          autoClose: 1000,
          hideProgressBar: true,
          draggable: true,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2500);
        return data;
      }
    } catch (error) {
      toast.error(error as string, {
        position: "top-center",
        theme: "light",
        autoClose: 1000,
        hideProgressBar: true,
        draggable: true,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <ToastContainer />
      <div className="flex lg:block space-x-3 items-center">
        <button
          className="block lg:hidden"
          onClick={() => setEditAddress(!editAddress)}
        >
          <FaArrowLeft />
        </button>
        <h2 className="lg:text-[22px] text-[20px] font-bold font-mono lg:text-[#808080] lg:pb-6">
          Edit Address
        </h2>
        <button
          className="lg:block hidden"
          onClick={() => setEditAddress(!editAddress)}
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="lg:w-[70%]">
        <div className="flex justify-between mb-14 space-x-10">
          <Input
            type="text"
            label="Full Name"
            fullBorder
            value={addressBook.name}
            onChange={(e) =>
              setAddressBook({ ...addressBook, name: e.target.value })
            }
          />
          <Input
            type="text"
            label="Mobile Number"
            fullBorder
            value={addressBook.mobileNumber}
            onChange={(e) =>
              setAddressBook({ ...addressBook, mobileNumber: e.target.value })
            }
          />
        </div>
        <Input
          type="text"
          label="Delivery Address"
          fullBorder
          value={addressBook.deliveryAddress}
          onChange={(e) =>
            setAddressBook({ ...addressBook, deliveryAddress: e.target.value })
          }
        />
        <div className="flex justify-between space-x-10 mt-7">
          <Input
            type="text"
            label="Region"
            fullBorder
            value={addressBook.region}
            onChange={(e) =>
              setAddressBook({ ...addressBook, region: e.target.value })
            }
          />
          <Input
            type="text"
            label="City"
            fullBorder
            value={addressBook.city}
            onChange={(e) =>
              setAddressBook({ ...addressBook, city: e.target.value })
            }
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleEditAddress}
            className="bg-[#6eb356] mt-6 hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] flex items-center justify-center h-[40px] w-[140px] font-semibold rounded-lg"
          >
            {loading ? <Loader /> : "Save"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EditAddress;
