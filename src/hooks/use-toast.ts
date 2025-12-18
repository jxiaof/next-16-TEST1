import { useState, useCallback } from 'react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (
      toast: Omit<Toast, 'id'> & { id?: string },
      duration = 3000,
    ) => {
      const id = toast.id || `toast-${Date.now()}`;
      const newToast = { ...toast, id, duration };
      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }

      return id;
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const success = useCallback(
    (title: string, description?: string) => {
      return addToast({ title, description, type: 'success' });
    },
    [addToast],
  );

  const error = useCallback(
    (title: string, description?: string) => {
      return addToast({ title, description, type: 'error' });
    },
    [addToast],
  );

  const info = useCallback(
    (title: string, description?: string) => {
      return addToast({ title, description, type: 'info' });
    },
    [addToast],
  );

  const warning = useCallback(
    (title: string, description?: string) => {
      return addToast({ title, description, type: 'warning' });
    },
    [addToast],
  );

  return { toasts, addToast, removeToast, success, error, info, warning };
}