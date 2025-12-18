import { db } from '@backend/pkg/db';
import { AppCtx } from '@backend/context/definition';

export class BaseDAO {
  protected ctx: AppCtx;

  constructor(ctx: AppCtx) {
    this.ctx = ctx;
  }

  protected getDB() {
    return db;
  }

  protected getCurrentUserId(): string {
    if (!this.ctx.userId) {
      throw new Error('Unauthorized');
    }
    return this.ctx.userId;
  }
}