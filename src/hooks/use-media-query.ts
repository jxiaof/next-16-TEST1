import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  // 使用初始值函数获取初始匹配状态
  const [matches, setMatches] = useState(() => {
    // 在服务端返回 false，防止 hydration 不匹配
    if (typeof window === 'undefined') {
      return false;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // 添加监听器
    mediaQuery.addEventListener('change', handleChange);

    // 清理函数
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}
