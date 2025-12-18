export interface ApiResponse<T = void> {
  code: number;
  message: string;
  data?: T;
  timestamp: string;
}

export interface PaginatedData<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}