import Billboard from '@/components/Billboard';
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductsList from '@/components/ProductsList';

const Homepage = async () => {
  const billboard = await getBillboard('44099da6-98ca-4055-a0a8-d4695d4fc0d4');
  const products = await getProducts({ isFeatured: true });

  return (
    <>
      <div className="pb-10">
        <Billboard data={billboard} />
      </div>
      <div>
        <ProductsList title='Featured Products' products={products} />
      </div>
    </>
  );
};

export default Homepage;
