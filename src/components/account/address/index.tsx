import { useState } from "react";
import AddressBook from "./AddressBook";
import EditAddress from "./EditAddress";

const Address = () => {
  const [editAddress, setEditAddress] = useState<boolean>(false);
  return (
    <div>
      {editAddress ? (
        <EditAddress
          editAddress={editAddress}
          setEditAddress={setEditAddress}
        />
      ) : (
        <AddressBook
          editAddress={editAddress}
          setEditAddress={setEditAddress}
        />
      )}
    </div>
  );
};

export default Address;
