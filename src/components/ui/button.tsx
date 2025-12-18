import * as React from 'react';
import { cn } from '@lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => (
    <button
      className={cn(
        'rounded-lg font-medium transition-colors',
        variant === 'default' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' && 'bg-gray-600 text-white hover:bg-gray-700',
        size === 'sm' && 'px-2 py-1 text-sm',
        size === 'md' && 'px-4 py-2',
        size === 'lg' && 'px-6 py-3 text-lg',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };