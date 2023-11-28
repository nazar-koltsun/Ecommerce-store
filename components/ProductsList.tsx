import { Product } from '../types';
import ProductCard from '@/components/ui/ProductCard';

interface ProductsListProps {
  title: string;
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ title, products }) => {
  return (
    <div className="pt-10">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="flex flex-wrap gap-8 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
