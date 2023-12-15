import { Product } from "@/types";

import useCartStore from '@/hooks/use-cart-store';

import Image from "next/image";
import Button from "@/components/ui/Button";
import Currency from '@/components/ui/Currency';
import { X } from "lucide-react";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { remove } = useCartStore();

  const handleRemoveItem = () => {
    remove(data.id);
  }

  return (
    <div className="flex items-start gap-4 md:gap-8 pt-6 pb-6 first:pt-0 border-b-[1px] last:border-none border-gray-300">
      <div className="shrink-0 w-[150px] h-[150px] relative">
        <Image className="object-cover absolute" src={data.images[0].url} fill alt={data.name} />
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4 grow">
        <h3 className="text-lg font-bold">{data.name}</h3>
        <div className="flex items-center gap-2 text-gray-500">
          <p className="text-sm text-gray-500">{data.color.name}</p>
          |
          <p className="text-sm text-gray-500">{data.size.name}</p>
        </div>
        <Currency value={data.price} />
      </div>
      <Button className="p-1" onClick={handleRemoveItem}>
        <X size={18} />
      </Button>
    </div>
  )
}

export default CartItem;