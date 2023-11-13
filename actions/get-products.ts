import { Product } from '@/types';

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/products');
  const data = await response.json();

  return data;
}

export default getProducts;