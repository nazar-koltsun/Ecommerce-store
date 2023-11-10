"use client";

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { ShoppingCart } from 'lucide-react';

const NavBarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center space-x-4">
      <Button className={'flex items-center px-4 py-2 space-x-1'}>
        <ShoppingCart size={18} color="white" />
        <span className="text-[var(--link-color)]">0</span>
      </Button>
    </div>
  );
};

export default NavBarActions;
