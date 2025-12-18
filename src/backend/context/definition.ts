export interface AppCtx {
  userId?: string;
  role?: 'user' | 'admin';
  email?: string;
  requestId: string;
  timestamp: Date;
}