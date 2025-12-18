import { ReactNode } from 'react';
import { cn } from '@lib/cn';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
};

export function ResponsiveContainer({
  children,
  className,
  size = 'lg',
}: ResponsiveContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
}