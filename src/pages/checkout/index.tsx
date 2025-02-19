import { useEffect, useState } from "react";
import MainContainer from "../../components/wrappers/MainContainer";
import Loader from "../../components/defaults/Loader";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { pb } from "../../../utils/pocketbaseClient";

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

interface CartProps {
  id: number;
  name: string;
  price: string;
  priceId?: string;
  review: string;
  productImg: string;
  quantity: number;
}

const Checkout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingAddress, setLoadingAddress] = useState<boolean>(false);
  const [addresses, setAddresses] = useState<AddressProps[]>([]);
  const [modifyAddress, setModifyAddress] = useState<boolean>(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
  const [totalCost, setTotalCost] = useState<number>();
  const [data, setData] = useState<CartProps[]>([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;


  const idb = window.indexedDB;
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

  const getAllData = () => {
    const dbPromise = idb.open("divwis", 1);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("cart", "readonly");
      const cart = tx.objectStore("cart");
      const data = cart.getAll();
      data.onsuccess = (query) => {
        if (query.srcElement) {
          setData((query.srcElement as IDBRequest).result);
        }
      };
      tx.oncomplete = function () {
        db.close();
      };
    };
  };

  const getTotalCost = () => {
    const totalCost = data.reduce(
      (acc, item) => acc + parseInt(item.price) * item.quantity,
      0
    );
    setTotalCost(totalCost);
  };

  const updateAddress = async () => {
    setLoadingAddress(true);
    if (selectedAddressId === null) return;
  
    try {
      const updateResult = await pb.collection("address").update(selectedAddressId as unknown as string, { default: true });
  
      if (!updateResult) {
        throw new Error('Failed to set selected address as default.');
      }
  
      const resetResult = await pb.collection("address").getFullList({
        filter: `userId = "${id}"`, 
      });
  
      for (const addr of resetResult) {
        if (addr.id !== selectedAddressId as unknown as string) {
          await pb.collection("address").update(addr.id, { default: false });
        }
      }
  
      fetchAddresses();
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAddress(false);
      setModifyAddress(false);
    }
  };


  const handleCheckout = async () => {
    setLoading(true);
    await fetch(`${backendUrl}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: data, id, totalCost }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  useEffect(() => {
    getAllData();
    fetchAddresses();
  }, [id]);

  useEffect(() => {
    if (addresses.length > 0) {
      const defaultAddress = addresses.find((address) => address.default);
      if (defaultAddress) {
        setSelectedAddressId(defaultAddress.id);
      }
    }
  }, [addresses]);

  useEffect(() => {
    getTotalCost();
  }, [data]);

  const handleAddressChange = (id: number) => {
    setSelectedAddressId(id);
  };

  return (
    <MainContainer active="checkout">
      <div className="min-h-[80vh] py-[10vh] lg:w-[80vw] w-[90vw] mx-auto">
        <h2 className="text-center font-mono text-[#808080] mt-8 lg:mt-0 font-semibold text-[20px]">
          Place your order
        </h2>
        <div className="flex lg:flex-row flex-col justify-between lg:space-x-10 space-y-10 lg:space-y-0 mt-6">
          <div className="lg:w-[70%]">
            <div className="border border-[#f1f1f1] rounded-lg shadow-lg bg-[#fff] p-4">
              <div className="flex justify-between text-[14px] border-b-2 border-[#ccc] pb-2">
                <h2 className="font-semibold uppercase">1. Customer address</h2>
                <p
                  onClick={() => setModifyAddress(true)}
                  className="text-[#0c42a2] font-semibold cursor-pointer"
                >
                  Change {">"}
                </p>
              </div>

              <AnimatePresence>
                {modifyAddress ? (
                  <motion.div
                    key="modifyAddress"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {addresses.map((data) => (
                      <div key={data.id} className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="address"
                          checked={selectedAddressId === data.id}
                          onChange={() => handleAddressChange(data.id)}
                        />
                        <div>
                          <p className="text-[14px] pt-4">{data.name}</p>
                          <span className="text-[13px] text-[#808080]">
                            {data.deliveryAddress} | {data.city} | {data.region} |{" "}
                            {data.mobileNumber}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-end">
                      <button
                        onClick={updateAddress}
                        className="flex items-center justify-center w-[200px] mt-6 text-[#fff] font-semibold h-[40px] rounded-lg bg-[#6eb356] hover:bg-[#ff7c08] transition-colors duration-500 ease-in-out"
                      >
                        {loadingAddress ? <Loader /> : "Confirm Address"}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="defaultAddress"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {addresses
                      .filter((address) => address.default)
                      .map((data) => (
                        <div key={data.id}>
                          <p className="text-[14px] pt-4">{data.name}</p>
                          <span className="text-[13px] text-[#808080]">
                            {data.deliveryAddress} | {data.city} | {data.region} |{" "}
                            {data.mobileNumber}
                          </span>
                        </div>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border border-[#f1f1f1] rounded-lg shadow-lg bg-[#fff] mt-6 p-4">
              <h2 className="font-semibold uppercase text-[14px] border-b-2 border-[#ccc] pb-2">
                2. Delivery Details
              </h2>

              <div className="text-[14px] mt-4">
                <p className="uppercase text-[#404040] text-[13px] font-semibold">
                  Delivery method: Default address
                </p>
                <p className="text-[12px] text-[#808080]">
                  Delivery between{" "}
                  <span className="font-semibold text-[#333]">August 13</span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#333]">August 16</span>{" "}
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-[14px] font-semibold">Shipment</h2>

                <div className="grid grid-cols-1 lg:gap-x-10 gap-y-4">
                  {data.map((shipment, index) => (
                    <motion.div
                      key={shipment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="border border-[#ccc] rounded-lg p-3 space-y-3"
                    >
                      <h2 className="text-[13px] mt-3 mb-1">
                        Item {index + 1}/{data.length}
                      </h2>
                      <p className="text-[12px] text-[#808080]">
                        Delivery between{" "}
                        <span className="font-semibold text-[#333]">August 13</span>{" "}
                        and{" "}
                        <span className="font-semibold text-[#333]">August 16</span>{" "}
                      </p>
                      <div className="flex items-center text-[14px] space-x-2">
                        <img
                          src={shipment.productImg}
                          className="w-[40px] h-[40px] object-cover"
                          alt="img"
                        />
                        <div className="space-y-1">
                          <h2>{shipment.name}</h2>
                          <p className="text-[12px] text-[#808080]">
                            QTY: {shipment.quantity}
                          </p>
                          <p className="text-[11px]">
                            Price of 1 item: ${shipment.price}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="my-10 items-center flex justify-center">
                  <NavLink
                    to="/shops/0"
                    className="uppercase text-[#6eb356] font-semibold"
                  >
                    Modify Cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fff] shadow-lg lg:w-[30%] p-4 rounded-lg border h-[280px] border-[#f1f1f1]">
            <h2 className="text-[15px] font-semibold border-b-2 border-[#ccc] pb-2">
              Order Summary
            </h2>

            <div className="space-y-3">
              <div className="space-y-2 mt-4 text-[14px]">
                <div className="flex justify-between">
                  <p>Total Items ({data.length})</p>
                  <span className="font-semibold">${totalCost}</span>
                </div>

                <div className="flex justify-between">
                  <p>Delivery fees</p>
                  <span className="font-semibold">$5</span>
                </div>
                <hr />
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <span className="font-semibold">
                  ${(totalCost as number) + 5}
                </span>
              </div>

              <div className="pt-10">
                <button
                  onClick={handleCheckout}
                  className="flex items-center justify-center w-[100%] text-[#fff] uppercase font-semibold h-[50px] bg-[#6eb356] hover:bg-[#ff7c08] transition-colors duration-500 ease-in-out"
                >
                  {loading ? <Loader /> : <span>Confirm order</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Checkout;
