import { supabase } from "../../../utils/supabaseClient";

interface ProductsProps {
  id: number;
  name: string;
  default_price: string;
  priceId?: string;
  review?: string;
  image: string;
  category: string;
  featured?: boolean;
}


const { data, error } = await supabase.from("products").select("*");

if (error) {
  console.log(error);
}
export const products: ProductsProps[] = data as ProductsProps[];
  // {
  //   id: 1,
  //   name: "Strawberry Fruit",
  //   price: "100.00",
  //   priceId: "",
  //   review: "1",
  //   category: "vegetables",
  //   productImg: "/assets/products/p-sm-1.png",
  // },
  // {
  //   id: 2,
  //   name: "Green Apple",
  //   price: "40.00",
  //   priceId: "price_1PB99sKHDJj1P2VV9LcclVbI",
  //   review: "4",
  //   category: "milk & dairy",
  //   productImg: "/assets/products/p-sm-2.png",
  // },
  // {
  //   id: 3,
  //   name: "Red Apple",
  //   price: "50.00",
  //   priceId: "",
  //   review: "4",
  //   category: "cereals",
  //   productImg: "/assets/products/p-sm-3.png",
  // },
  // {
  //   id: 4,
  //   name: "Banana",
  //   price: "20.00",
  //   priceId: "price_1PB9ACKHDJj1P2VVpvBj9qlH",
  //   review: "5",
  //   category: "meat",
  //   productImg: "/assets/products/p-sm-2.png",
  // },
  // {
  //   id: 5,
  //   name: "Strawberry",
  //   price: "10.00",
  //   priceId: "",
  //   review: "5",
  //   category: "cereals",
  //   productImg: "/assets/products/p-sm-1.png",
  // },
  // {
  //   id: 6,
  //   name: "Watermelon",
  //   price: "10.00",
  //   review: "4",
  //   category: "vegetables",
  //   productImg: "/assets/products/p-sm-4.png",
  // },
  // {
  //   id: 7,
  //   name: "Red Apple",
  //   price: "30.00",
  //   priceId: "",
  //   review: "2",
  //   category: "fruits",
  //   productImg: "/assets/products/p-sm-3.png",
  // },
  // {
  //   id: 8,
  //   name: "Banana",
  //   price: "50.00",
  //   priceId: "price_1PB9ACKHDJj1P2VVpvBj9qlH",
  //   review: "3",
  //   category: "fruits",
  //   productImg: "/assets/products/p-sm-1.png",
  // },
  // {
  //   id: 9,
  //   name: "Blueberries",
  //   price: "80.00",
  //   priceId: "",
  //   review: "3",
  //   category: "vegetables",
  //   productImg: "/assets/products/p-sm-3.png",
  // },
  // {
  //   id: 10,
  //   name: "Watermelon",
  //   price: "60.00",
  //   priceId: "",
  //   review: "2",
  //   category: "cereals",
  //   productImg: "/assets/products/p-sm-1.png",
  // },
  // {
  //   id: 11,
  //   name: "Red Apple",
  //   price: "90.00",
  //   priceId: "",
  //   review: "1",
  //   category: "meat",
  //   productImg: "/assets/products/p-sm-2.png",
  // },
  // {
  //   id: 12,
  //   name: "Tomatoes",
  //   price: "50.00",
  //   priceId: "price_1PB7U1KHDJj1P2VVsL7HGqZ3",
  //   review: "5",
  //   category: "vegetables",
  //   productImg: "/assets/products/p-sm-4.png",
  // },
