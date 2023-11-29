import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, type = 'button', children, onClick, ...props }, ref) => {
    return (
      <button
        className={cn(
          'w-auto, rounded-full bg-black border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-400 disabled:text-gray-700 hover:bg-gray-700 hover:text-white transition-colors',
          className
        )}
        ref={ref}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

export default Button;
