'use client';

import { PostCard } from './post-card';
import { EmptyState } from '@components/shared/empty-state';
import { FileText } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  author?: string;
  createdAt?: Date | string;
  views?: number;
  likes?: number;
  comments?: number;
}

interface PostListProps {
  posts: Post[];
  isLoading?: boolean;
  onCreateNew?: () => void;
}

export function PostList({ posts, isLoading, onCreateNew }: PostListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
          />
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <EmptyState
        icon={FileText}
        title="暂无文章"
        description="开始创建你的第一篇文章吧"
        action={onCreateNew ? { label: '新建文章', onClick: onCreateNew } : undefined}
      />
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}