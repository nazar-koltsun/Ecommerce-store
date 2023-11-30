import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import getSizes from '@/actions/get-sizes';
import getColors from '@/actions/get-colors';
import Billboard from '@/components/Billboard';
import Filter from '@/components/Filter';
import ProductsList from '@/components/ProductsList';

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const { categoryId } = params;
  const products = await getProducts({
    categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    isFeatured: true,
  });
  const sizes = await getSizes();
  const colors = await getColors();

  const category = await getCategory(categoryId);

  return (
    <div>
      <Billboard data={category.billboard} />
      <div className='flex gap-20'>
        {/* Mobile Filter */}

        {/* Mobile Filter */}
        
        {/* Desktop Filter */}
        <div className='hidden lg:block'>
          <div className='mt-4'>
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
          </div>
          <div className='mt-6'>
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
        </div> 
        {/* Desktop Filter */}

        <ProductsList title='Featured Products' products={products} />
      </div>
    </div>
  );
};

export default CategoryPage;
