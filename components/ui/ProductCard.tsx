'use client';

import usePreviewModal from '@/hooks/use-preview-modal';
import { Product } from '@/types';
import Image from 'next/image';
import IconButton from '@/components/ui/IconButton';
import Currency from '@/components/ui/Currency';
import { Expand, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const { onOpen } = usePreviewModal();

  const opPreviewOpen = (event: MouseEvent) => {
    event.stopPropagation();
    onOpen(product);
  };

  const onCardClick = () => {
    router.push(process.env.NEXT_PUBLIC_ROOT_URL + '/products/' + product.id);
  };

  return (
    <div
      onClick={onCardClick}
      className="group flex items-center max-[600px]:grow flex-col p-4 border-dashed border-2 border-gray-100 rounded-md relative"
    >
      <div>
        <Image
          src={product.images[0].url}
          alt={product.name}
          width={200}
          height={200}
        />
        <div className="flex gap-3 w-full place-content-center absolute opacity-0 left-0 bottom-6 pointer-events-none transition group-hover:opacity-100 group-hover:pointer-events-auto">
          <IconButton
            icon={<Expand size={18} />}
            onClick={opPreviewOpen as () => void}
          />
          <IconButton icon={<ShoppingCart size={18} />} onClick={() => toast.success('Here is your toast.')} />
        </div>
        <div>
          <p className="font-bold">{product.name}</p>
          <p className="font-semibold">{product.category.name}</p>
        </div>
        <div className="pt-4">
          <Currency value={product.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
