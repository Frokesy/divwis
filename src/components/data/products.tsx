import { pb } from "../../../utils/pocketbaseClient"; // Ensure you import your PocketBase client

interface ProductsProps {
  id: string;  // PocketBase IDs are strings, not numbers
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
  try {
    const records = await pb.collection("products").getFullList({
      sort: "-created",
    });

    return records.map((record) => ({
      id: record.id,
      name: record.name,
      default_price: record.default_price,
      priceId: record.priceId,
      review: record.review,
      image: record.image,
      category: record.category,
      featured: record.featured,
      desc: record.desc,
    }));
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
}

export async function getProducts(): Promise<ProductsProps[]> {
  const products = await fetchProducts();
  return products;
}
