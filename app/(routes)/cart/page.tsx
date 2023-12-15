'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import CartItemsList from './components/CartItemsList';
import Summary from './components/Summary';
import toast from 'react-hot-toast';

import useCartStore from '@/hooks/use-cart-store';

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { items: cartItems, removeAll } = useCartStore();
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (params.get('success')) {
      removeAll();
      toast.success('Order placed successfully!');

      router.push('/');
    }
  }, [params, removeAll]);

  const mainContent = isMounted ? (
    <div>
      {cartItems.length === 0 && (
        <p className="mt-4 text-gray-500">Your cart is empty.</p>
      )}
      {cartItems.length > 0 && (
        <div className="block md:flex items-start md:gap-10 mt-6">
          <div className="grow-[1]">
            <CartItemsList />
          </div>
          <Summary className="grow-0" />
        </div>
      )}
    </div>
  ) : null;

  return (
    <div>
      <h1 className="text-2xl font-bold">Cart</h1>
      {mainContent}
    </div>
  );
};

export default CartPage;
