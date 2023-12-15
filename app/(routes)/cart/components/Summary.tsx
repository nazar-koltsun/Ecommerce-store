import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import useCartStore from '@/hooks/use-cart-store';

import Currency from '@/components/ui/Currency';
import Button from '@/components/ui/Button';

interface SummaryProps {
  className?: string;
}

const Summary: React.FC<SummaryProps> = ({ className }) => {
  const { items: cartItems } = useCartStore();
  const router = useRouter();

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  return (
    <div
      className={cn(
        className,
        'w-full md:min-w-[200px] md:w-auto md:max-w-[40%] py-6 px-4 bg-gray-50 rounded-md'
      )}
    >
      <h2 className="pb-1 text-lg font-bold border-b-[1px] border-gray-300">
        Summary
      </h2>
      <div className="flex justify-between mt-8">
        <span className="text-md font-bold">Total:</span>
        <Currency value={totalPrice} />
      </div>
      <Button
        className="mt-8 w-full"
        disabled={cartItems.length === 0}
        onClick={() => router.push(process.env.NEXT_PUBLIC_ADMIN_ROOT_URL + '/checkout')}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
