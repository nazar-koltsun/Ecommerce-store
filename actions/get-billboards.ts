import { Billboard } from "@/types";

const getBillboard =  async (id: string): Promise<Billboard> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/billboards/' + id);
  const data = await res.json();
 
  return data;
}

export default getBillboard;