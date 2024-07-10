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
  products: ProductProps
}

interface ProductProps {
  id: string;
  name: string;
  priceId: string;
  price: string;
  productImg: string;
  quantity: number
}


const Orders = () => {
  const [activePage, setActivePage] = useState<string>("index");
  const [orders, setOrders] = useState<OrderProps[]>([])

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

  return (
    <div>
      {activePage === "index" && <OrderHistory orders={orders} setActivePage={setActivePage} />}
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
