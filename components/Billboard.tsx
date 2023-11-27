import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
};

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div 
      className='flex items-center justify-center aspect-[4/1] max-md:aspect-video bg-cover rounded-[20px]'
      style={{ backgroundImage: `url(${data.imageUrl})` }}
    >
      <div className="p-5 bg-white rounded-full shadow-md">
        <h1 className='text-3xl font-bold'>{data.label}</h1>
      </div>
    </div>
  )
};

export default Billboard;