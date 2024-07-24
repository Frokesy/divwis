import OrderHistory from "./OrderHistory";
import { useEffect, useState } from "react";
import ViewOrderDetails from "./ViewOrderDetails";
import TrackOrder from "./TrackOrder";
import { supabase } from "../../../../utils/supabaseClient";


interface OrderProps {
  id: number;
  created_at: string;
  user_id: string;
  session_id: string;
  totalCost: string;
  status: string; 
  products: ProductProps;
  orderNumber: string;
}

interface ProductProps {
  id: string;
  name: string;
  priceId: string;
  price: string;
  productImg: string;
  quantity: number;
  length: number
}


const Orders = () => {
  const [activePage, setActivePage] = useState<string>("index");
  const [orders, setOrders] = useState<OrderProps[]>([])
  const [selectedOrder, setSelectedOrder] = useState<OrderProps>()

  const id = localStorage.getItem("id")

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("orders").select("*").eq("user_id", id);

      if (error) {
        console.log(error);
        return [];
      }

      setOrders(data)

    }

    fetchData()
  }, [id])

  const getSelectedOrder = (order: OrderProps) => (
    setSelectedOrder(order)
  )

  return (
    <div>
      {activePage === "index" && <OrderHistory getSelectedOrder={getSelectedOrder} orders={orders} setActivePage={setActivePage} />}
      {activePage === "viewOrder" && (
        <ViewOrderDetails order={selectedOrder} setActivePage={setActivePage} />
      )}
      {activePage === "trackOrder" && (
        <TrackOrder order={selectedOrder} setActivePage={setActivePage} />
      )}
    </div>
  );
};

export default Orders;
