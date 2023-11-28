import { Product } from '@/types';
import Currency from '@/components/ui/Currency';
import Button from '@/components/ui/Button';

import { ShoppingCart } from 'lucide-react';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="text-xl font-bold">
        <Currency value={product.price} />
      </div>
      <hr className="my-4" />
      <div className="flex gap-2">
        <h3 className="font-bold">Size:</h3>
        {product.size.name}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <h3 className="font-bold">Color:</h3>
        <div
          className="w-9 h-9 rounded-full border border-gray-200"
          style={{ backgroundColor: product.color.value }}
        ></div>
      </div>
      <Button className="flex items-center gap-2 mt-8">
        <span className="text-white">Add to Cart</span>
        <ShoppingCart size={18} color="white" />
      </Button>
    </div>
  );
};

export default ProductInfo;
