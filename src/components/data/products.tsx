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
  desc: string;
}


const { data, error } = await supabase.from("products").select("*");

if (error) {
  console.log(error);
}
export const products: ProductsProps[] = data as ProductsProps[];
