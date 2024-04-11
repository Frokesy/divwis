import OrderHistory from "./OrderHistory";
import { useState } from "react";
import ViewOrderDetails from "./ViewOrderDetails";
import TrackOrder from "./TrackOrder";

const Orders = () => {
  const [activePage, setActivePage] = useState<string>("index");
  return (
    <div>
      {activePage === "index" && <OrderHistory setActivePage={setActivePage} />}
      {activePage === "viewOrder" && (
        <ViewOrderDetails setActivePage={setActivePage} />
      )}
      {activePage === "trackOrder" && (
        <TrackOrder setActivePage={setActivePage} />
      )}
    </div>
  );
};

export default Orders;
