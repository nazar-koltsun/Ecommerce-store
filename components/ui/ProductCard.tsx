'use client';

import { Product } from '@/types';
import Image from 'next/image';
import IconButton from '@/components/ui/IconButton';
import Currency from '@/components/ui/Currency';
import { Expand, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col p-4 border-dashed border-2 border-gray-100 rounded-md relative">
      <Image
        src={product.images[0].url}
        alt={product.name}
        width={200}
        height={200}
      />
      <div className="flex gap-3 w-full place-content-center absolute opacity-0 left-0 bottom-6 pointer-events-none transition group-hover:opacity-100 group-hover:pointer-events-auto">
        <IconButton icon={<Expand size={18} />} onClick={() => {}} />
        <IconButton icon={<ShoppingCart size={18} />} onClick={() => {}} />
      </div>
      <div>
        <p className='font-bold'>{product.name}</p>
        <p className='font-semibold'>{product.category.name}</p>
      </div>
      <div className='pt-4'>
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
