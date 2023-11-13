import Billboard from '@/components/Billboard';
import getBillboard from "@/actions/get-billboard";

const Homepage = async () => {
  const billboard = await getBillboard('44099da6-98ca-4055-a0a8-d4695d4fc0d4');

  return (
    <Billboard data={billboard} />
  )
};

export default Homepage;