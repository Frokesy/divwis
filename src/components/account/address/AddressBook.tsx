import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { supabase } from "../../../../utils/supabaseClient";
import Spinner from "../../defaults/Spinner";

interface AddressBookProps {
  editAddress: boolean;
  setEditAddress: React.Dispatch<React.SetStateAction<boolean>>;
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

const AddressBook: FC<AddressBookProps> = ({ editAddress, setEditAddress }) => {
  const [addresses, setAddresses] = useState<AddressProps[]>([]);

  const fetchAddresses = async () => {
    const { data: address, error } = await supabase.from("address").select("*");
    if (error) {
      console.log(error);
      return [];
    }
    setAddresses(address as AddressProps[]);
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
      {addresses.length === 0 ? (
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
                        : "text-[#808080] italic font-semibold"
                    }`}
                  >
                    {address.default ? "default address." : "set as default"}
                  </p>

                  <div className="flex items-center space-x-6">
                    <FaPen
                      fill="#6eb356"
                      className="cursor-pointer"
                      onClick={() => setEditAddress(!editAddress)}
                    />
                    <FaTrash fill="#ff0406" className="cursor-pointer" />
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
