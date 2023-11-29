import { Color } from '@/types';

const getColors = async (): Promise<Color[]> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/colors');
  const data = await response.json();

  return data;
}

export default getColors;