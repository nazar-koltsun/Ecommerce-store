import { Category } from '@/types';

const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/categories/' + id);
  const data = await response.json();

  return data;
}

export default getCategory;