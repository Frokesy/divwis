import OrderHistory from "./OrderHistory";
import { useEffect, useState } from "react";
import ViewOrderDetails from "./ViewOrderDetails";
import TrackOrder from "./TrackOrder";
import { pb } from "../../../../utils/pocketbaseClient";

export interface OrderProps {
  id: number;
  created: string;
  user_id: string;
  session_id: string;
  totalCost: string;
  status: string;
  products: ProductProps[];
}

interface ProductProps {
  id: string;
  name: string;
  priceId: string;
  price: string;
  productImg: string;
  quantity: number;
  length: number;
}

const Orders = () => {
  const [activePage, setActivePage] = useState<string>("index");
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<OrderProps>();

  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchData = async () => {
      const records = await pb.collection('orders').getFullList({
        filter: `user_id = '${id}'`,
      });
  

      if (!records) {
        console.log("Error fetching data" );
        return [];
      }
      setOrders(records as unknown as OrderProps[]);
    };

    fetchData();
  }, [id]);

  const getSelectedOrder = (order: OrderProps | undefined) =>
    setSelectedOrder(order);

  return (
    <div>
      {activePage === "index" && (
        <OrderHistory
          getSelectedOrder={getSelectedOrder}
          orders={orders}
          setActivePage={setActivePage}
        />
      )}
      {activePage === "viewOrder" && (
        <ViewOrderDetails
          order={selectedOrder}
          setActivePage={setActivePage}
          getSelectedOrder={function (order: OrderProps | undefined): void {
            throw new Error(`Function not implemented: ${order}`);
          }}
        />
      )}
      {activePage === "trackOrder" && (
        <TrackOrder order={selectedOrder} setActivePage={setActivePage} />
      )}
    </div>
  );
};

export default Orders;
