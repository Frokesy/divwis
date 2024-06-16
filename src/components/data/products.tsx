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

async function fetchProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error);
    return [];
  }

  return data as ProductsProps[];
}

const products: ProductsProps[] = await fetchProducts();

export { products };
