import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { Eye, Heart, MessageCircle } from 'lucide-react';
import { cn } from '@lib/cn';

interface PostCardProps {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  author?: string;
  createdAt?: Date | string;
  views?: number;
  likes?: number;
  comments?: number;
  className?: string;
}

export function PostCard({
  id,
  title,
  excerpt,
  content,
  author,
  createdAt,
  views = 0,
  likes = 0,
  comments = 0,
  className,
}: PostCardProps) {
  const displayContent = excerpt || content?.slice(0, 100);
  const date = createdAt ? new Date(createdAt) : new Date();
  const timeAgo = formatDistanceToNow(date, { locale: zhCN, addSuffix: true });

  return (
    <Link
      href={`/posts/${id}`}
      className={cn(
        'group block rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600',
        className,
      )}
    >
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {title}
      </h3>

      {displayContent && (
        <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {displayContent}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
        <div className="space-x-4">
          {author && <span>{author}</span>}
          <span>{timeAgo}</span>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}