// src/Modules/Users/index.ts

import { Type } from 'class-transformer';

export class User {
  @Type(() => String)
  public name: string;

  @Type(() => String)
  public pronouns: string;

  @Type(() => String)
  public description: string;

  @Type(() => Boolean)
  public isActive: boolean;
}