import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import getSizes from '@/actions/get-sizes';
import getColors from '@/actions/get-colors';
import Billboard from '@/components/Billboard';
import Filter from '@/components/Filter';
import MobileFilter from '@/components/MobileFilter';
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

  const filterData = [
    {
      valueKey: "sizeId",
      name: "Sizes",
      data: sizes
    },
    {
      valueKey: "colorId",
      name: "Colors",
      data: colors
    }
  ];

  return (
    <div>
      <Billboard data={category.billboard} />
      <div className='flex gap-20 mt-8'>
        {/* Mobile Filter */}
        <MobileFilter className='block lg:hidden' filterData={filterData}/>
        {/* Mobile Filter */}

        {/* Desktop Filter */}
        <div className='hidden lg:block space-y-6'>
          {filterData.map((filter) => (
            <div key={filter.name}>
              <Filter {...filter} />
            </div>
          ))}
        </div> 
        {/* Desktop Filter */}

        <ProductsList title='Featured Products' products={products} />
      </div>
    </div>
  );
};

export default CategoryPage;
