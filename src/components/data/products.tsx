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

async function fetchProducts(): Promise<ProductsProps[]> {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error);
    return [];
  }

  return data as ProductsProps[];
}

export async function getProducts(): Promise<ProductsProps[]> {
  const products = await fetchProducts();
  return products;
}
