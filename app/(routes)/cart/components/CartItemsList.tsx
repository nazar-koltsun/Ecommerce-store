'use client';

import useCartStore from '@/hooks/use-cart-store';

import CartItem from './CartItem';

const CartItemsList = () => {
  const { items: cartItems } = useCartStore();

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} data={item} />
      ))}
    </div>
  )
}

export default CartItemsList;