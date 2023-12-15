import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import toast from 'react-hot-toast';

import { Product } from '@/types';

interface CartStore {
  items: Product[];
  add: (product: Product) => void;
  remove: (id: string) => void;
  removeAll: () => void;
}

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      add: (product: Product) => {
        const { items } = get();

        if (items.find((item) => item.id === product.id)) {
          toast.error('Already in cart');

          return;
        }

        set({ items: [...items, product] });
        toast.success('Added to cart');
      },
      remove: (id: string) => {
        const { items } = get();
        set({ items: items.filter((item) => item.id !== id) });
        toast.success('Removed from cart');
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    { name: 'cart-storage', storage: createJSONStorage(() => localStorage) }
  )
);

export default useCartStore;
