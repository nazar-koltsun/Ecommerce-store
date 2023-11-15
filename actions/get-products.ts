import qs from 'query-string';
import { Product } from '@/types';

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: process.env.NEXT_PUBLIC_API_URL + '/products',
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default getProducts;