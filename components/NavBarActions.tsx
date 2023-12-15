'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button';
import { ShoppingCart } from 'lucide-react';
import useCartStore from '@/hooks/use-cart-store';

const NavBarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const { items: cartItems } = useCartStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center space-x-4">
      <Button
        className={'flex items-center px-4 py-2 space-x-1'}
        onClick={() => {
          router.push('/cart');
        }}
      >
        <ShoppingCart size={18} color="white" />
        <span className="text-[var(--link-color)]">{cartItems.length}</span>
      </Button>
    </div>
  );
};

export default NavBarActions;
