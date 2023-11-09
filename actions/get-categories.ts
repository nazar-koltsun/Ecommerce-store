import { Category } from '@/types';

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/categories');
  const data = await response.json();

  return data;
}

export default getCategories;