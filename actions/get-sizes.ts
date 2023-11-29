import { Size } from '@/types';

const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/sizes');
  const data = await response.json();

  return data;
}

export default getSizes;