'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@components/ui/button';
import { cn } from '@lib/cn';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(
    (page) => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages,
  );

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="gap-1"
      >
        <ChevronLeft className="h-4 w-4" />
        上一页
      </Button>

      <div className="flex gap-1">
        {visiblePages.map((page, i) => {
          const prevPage = visiblePages[i - 1];
          return (
            <div key={page}>
              {prevPage && page - prevPage > 1 && <span className="px-2">...</span>}
              <Button
                variant={page === currentPage ? 'default' : 'outline'}
                size="sm"
                onClick={() => onPageChange(page)}
              >
                {page}
              </Button>
            </div>
          );
        })}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="gap-1"
      >
        下一页
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}