'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import { cn } from '@lib/cn';

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  onRowClick?: (row: T) => void;
  className?: string;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  isLoading = false,
  onRowClick,
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn('overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700', className)}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={String(column.key)}
                style={{ width: column.width }}
                className={cn(column.sortable && 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800')}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center py-8">
                加载中...
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center py-8 text-gray-500">
                暂无数据
              </TableCell>
            </TableRow>
          ) : (
            data.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => onRowClick?.(row)}
                className={cn(onRowClick && 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800')}
              >
                {columns.map((column) => (
                  <TableCell key={String(column.key)}>
                    {column.render ? column.render(row[column.key], row) : String(row[column.key])}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}