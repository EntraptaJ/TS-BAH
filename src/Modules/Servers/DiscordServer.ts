// src/Modules/Servers/index.ts
import { Type } from 'class-transformer';

export class DiscordSever {
  @Type(() => String)
  public serverID: string;
}