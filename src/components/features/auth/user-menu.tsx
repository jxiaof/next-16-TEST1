'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { cn } from '@lib/cn';

interface UserMenuProps {
  userName?: string;
  userEmail?: string;
  onLogout?: () => void;
}

export function UserMenu({ userName = 'User', userEmail, onLogout }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
          <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </div>
        <span className="hidden sm:inline">{userName}</span>
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          {userEmail && (
            <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-700">
              <p className="text-xs text-gray-600 dark:text-gray-400">邮箱</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {userEmail}
              </p>
            </div>
          )}

          <nav className="space-y-1 p-2">
            <Link
              href="/settings/profile"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <User className="h-4 w-4" />
              个人资料
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Settings className="h-4 w-4" />
              设置
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
                onLogout?.();
              }}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              <LogOut className="h-4 w-4" />
              退出登录
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}