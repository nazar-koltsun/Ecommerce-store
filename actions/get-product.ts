import { Product } from '@/types';

const getProduct = async (id: string): Promise<Product> => {
  const url = process.env.NEXT_PUBLIC_API_URL + '/products/' + id;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default getProduct;