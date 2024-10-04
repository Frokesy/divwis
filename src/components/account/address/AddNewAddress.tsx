import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Input from "../../defaults/Input";
import { supabase } from "../../../../utils/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../defaults/Loader";
import { UserProps } from "../profile";


interface AddressProps {
  editAddress: boolean;
  setEditAddress: React.Dispatch<React.SetStateAction<boolean>>;
  userData?: UserProps | null;
}

const AddNewAddress: FC<AddressProps> = ({
  editAddress,
  setEditAddress,
  userData,
}) => {
  const [addressBook, setAddressBook] = useState({
    name: "",
    mobileNumber: "",
    deliveryAddress: "",
    region: "",
    city: "",
  });

  const [error, setError] = useState({
    name: "",
    mobileNumber: "",
    deliveryAddress: "",
    region: "",
    city: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const validateField = (value: string) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };

  const saveAddress = async () => {
    setLoading(true);
    const isNameValid = validateField(addressBook.name);
    const isMobileNumberValid = validateField(addressBook.mobileNumber);
    const isDeliveryAddressValid = validateField(addressBook.deliveryAddress);
    const isRegionValid = validateField(addressBook.region);
    const isCityValid = validateField(addressBook.city);

    setError({
      name: isNameValid ? "" : "name is required",
      mobileNumber: isMobileNumberValid ? "" : "mobile number is required",
      deliveryAddress: isDeliveryAddressValid ? "" : "an address is required",
      region: isRegionValid ? "" : "region must be set",
      city: isCityValid ? "" : "city must be set",
    });

    if (
      isNameValid &&
      isMobileNumberValid &&
      isDeliveryAddressValid &&
      isRegionValid &&
      isCityValid
    ) {
      try {
        const { data: existingAddresses, error: fetchError } = await supabase
          .from("address")
          .select("*")
          .eq("userId", userData?.id);

        if (fetchError) {
          throw fetchError;
        }

        const isDefault = existingAddresses.length === 0;

        const { data, error } = await supabase.from("address").insert([
          {
            userId: userData?.id,
            name: addressBook.name,
            mobileNumber: addressBook.mobileNumber,
            deliveryAddress: addressBook.deliveryAddress,
            region: addressBook.region,
            city: addressBook.city,
            default: isDefault,
          },
        ]);

        if (error) {
          throw error.message;
        } else {
          setLoading(false);
          toast.success("Address Registered!", {
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
          autoClose: 2000,
          hideProgressBar: true,
          draggable: true,
        });
        setLoading(false);
      }
    } else {
      setLoading(false);
      if (!isNameValid) {
        setTimeout(() => {
          setError((prevState) => ({ ...prevState, name: "" }));
        }, 3000);
      }
      if (!isMobileNumberValid) {
        setTimeout(() => {
          setError((prevState) => ({ ...prevState, mobileNumber: "" }));
        }, 3000);
      }
      if (!isDeliveryAddressValid) {
        setTimeout(() => {
          setError((prevState) => ({ ...prevState, deliveryAddress: "" }));
        }, 3000);
      }
      if (!isRegionValid) {
        setTimeout(() => {
          setError((prevState) => ({ ...prevState, region: "" }));
        }, 3000);
      }
      if (!isCityValid) {
        setTimeout(() => {
          setError((prevState) => ({ ...prevState, city: "" }));
        }, 3000);
      }
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
          Add new Address
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
            nameErr={error.name}
          />
          <Input
            type="text"
            label="Mobile Number"
            fullBorder
            value={addressBook.mobileNumber}
            onChange={(e) =>
              setAddressBook({ ...addressBook, mobileNumber: e.target.value })
            }
            mobileNumbErr={error.mobileNumber}
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
          deliveryAddressErr={error.deliveryAddress}
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
            regionErr={error.region}
          />
          <Input
            type="text"
            label="City"
            fullBorder
            value={addressBook.city}
            onChange={(e) =>
              setAddressBook({ ...addressBook, city: e.target.value })
            }
            cityErr={error.city}
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={saveAddress}
            className="bg-[#6eb356] mt-6 hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] flex items-center justify-center h-[40px] w-[140px] font-semibold rounded-lg"
          >
            {loading ? <Loader /> : "Register"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AddNewAddress;
