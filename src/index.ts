// src/index.ts
import { logger, LogMode } from './Library/Logger';
import { sayHello } from './Utils/sayHello';

logger.log(LogMode.INFO, `Starting TS-Core`);

await sayHello('K-FOSS');

export {};
