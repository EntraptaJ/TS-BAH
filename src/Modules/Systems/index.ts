// src/Modules/Systems/index.ts
import { Type } from 'class-transformer'
import { User } from '../Users'

export class System {
  @Type(() => User)
  public users: User[];
}