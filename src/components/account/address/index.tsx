import { useState } from "react";
import AddressBook from "./AddressBook";
import EditAddress from "./EditAddress";

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

const Address = () => {
  const [editAddress, setEditAddress] = useState<boolean>(false);
  const [clickedAddress, setClickedAddress] = useState<AddressProps | undefined>();

  const getClickedAddress = (address: AddressProps) => {
    setEditAddress(!editAddress)
    setClickedAddress(address)
  }
  return (
    <div>
      {editAddress ? (
        <EditAddress
          editAddress={editAddress}
          setEditAddress={setEditAddress}
          clickedAddress={clickedAddress}
        />
      ) : (
        <AddressBook
          getClickedAddress={getClickedAddress}
        />
      )}
    </div>
  );
};

export default Address;
