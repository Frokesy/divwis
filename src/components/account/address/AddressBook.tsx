import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { supabase } from "../../../../utils/supabaseClient";
import Spinner from "../../defaults/Spinner";
import { ToastContainer, toast } from "react-toastify";

interface AddressBookProps {
  getClickedAddress: (address: AddressProps) => void;
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

const AddressBook: FC<AddressBookProps> = ({ getClickedAddress }) => {
  const [addresses, setAddresses] = useState<AddressProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAddresses = async () => {
    setLoading(true);
    const { data: address, error } = await supabase.from("address").select("*");
    if (error) {
      console.log(error);
      setLoading(false);
      return [];
    }
    setAddresses(address as AddressProps[]);
    setLoading(false);
  };

  const deleteAddress = async (address: AddressProps) => {
    const { error } = await supabase
      .from("address")
      .delete()
      .eq("id", address.id);

    if (error) {
      console.log(error.message);
    }
    toast.success("Address Deleted!", {
      position: "top-center",
      theme: "light",
      autoClose: 1000,
      hideProgressBar: true,
      draggable: true,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  const setAsDefault = async (address: AddressProps) => {
    setLoading(true);
    try {
      const { error: resetError } = await supabase
        .from("address")
        .update({ default: false })
        .eq("userId", address.userId)
        .eq("default", true);

      if (resetError) {
        throw resetError;
      }

      const { error: updateError } = await supabase
        .from("address")
        .update({ default: true })
        .eq("id", address.id);

      if (updateError) {
        throw updateError;
      }

      toast.success("Address set as default!", {
        position: "top-center",
        theme: "light",
        autoClose: 1000,
        hideProgressBar: true,
        draggable: true,
      });

      fetchAddresses();
    } catch (error) {
      console.log(error);
      toast.error("Error setting default address", {
        position: "top-center",
        theme: "light",
        autoClose: 2000,
        hideProgressBar: true,
        draggable: true,
      });
    }
    setLoading(false);
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
      <ToastContainer />
      {loading ? (
        <div className="h-[70vh] flex items-center justify-center">
          <Spinner />
        </div>
      ) : addresses.length === 0 ? (
        <div className="h-[70vh] flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <h2 className="lg:text-[22px] text-[18px] font-bold font-mono lg:text-[#808080]">
            Addresses ({addresses.length})
          </h2>
          <div className="grid lg:grid-cols-2 lg:w-[80%] gap-y-6 gap-x-10 mt-6">
            {addresses.map((address) => (
              <div
                key={address.id}
                className="border border-[#ccc] hover:shadow-lg transition-shadow flex flex-col justify-between duration-300 ease-in-out"
              >
                <div className="p-3 space-y-2">
                  <p className="font-semibold mt-2 text-[18px]">
                    {address.name}
                  </p>
                  <p className="text-[#404040] text-[14px] mt-1">
                    {`${address.deliveryAddress}, ${address.region}. ${address.city}`}
                  </p>
                  <p className="text-[#404040] text-[14px]">
                    {address.mobileNumber}
                  </p>
                </div>
                <div className="border-t border-[#ccc] p-3 flex justify-between">
                  <p
                    className={`text-[13px] ${
                      address.default
                        ? "uppercase text-[#6eb356] font-bold"
                        : "text-[#808080] italic font-semibold cursor-pointer"
                    }`}
                    onClick={() => !address.default && setAsDefault(address)}
                  >
                    {address.default ? "default address." : "set as default"}
                  </p>

                  <div className="flex items-center space-x-6">
                    <FaPen
                      fill="#6eb356"
                      className="cursor-pointer"
                      onClick={() => getClickedAddress(address)}
                    />
                    <FaTrash
                      onClick={() => deleteAddress(address)}
                      fill="#ff0406"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AddressBook;
