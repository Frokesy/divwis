import OrderHistory from "./OrderHistory";
import { useState } from "react";
import ViewOrderDetails from "./ViewOrderDetails";

const Orders = () => {
  const [viewOrder, setViewOrder] = useState(false);
  return (
    <div>
      {viewOrder ? (
        <ViewOrderDetails viewOrder={viewOrder} setViewOrder={setViewOrder} />
      ) : (
        <OrderHistory viewOrder={viewOrder} setViewOrder={setViewOrder} />
      )}
    </div>
  );
};

export default Orders;
