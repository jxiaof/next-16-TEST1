import { formatDistanceToNow, format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, 'yyyy-MM-dd HH:mm', { locale: zhCN });
}

export function formatDateShort(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, 'MM-dd', { locale: zhCN });
}

export function formatTimeAgo(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return formatDistanceToNow(d, { locale: zhCN, addSuffix: true });
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('zh-CN').format(num);
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}