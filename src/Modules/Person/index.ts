// src/Modules/Person/index.ts
import { Type } from 'class-transformer';
import { System } from '../Systems'

export enum SexHormone {
  ESTROGEN,
  TESTOSTERONE
}

export class Person {
  @Type(() => System)
  public system: System | System[]

  public primarySexHormone: SexHormone;

  public name: string;

  public Pronouns: string;
}