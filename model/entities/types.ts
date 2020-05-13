import { Entity } from './Entity';

export type GetEntityName<E extends Entity<any>> = E['name'];
