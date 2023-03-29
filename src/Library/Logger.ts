// src/Library/Logger.ts
export enum LogMode {
  DEBUG,
  INFO,
  WARN,
  ERROR,
}

/**
 * Return the Enum variant of the LogMode enum
 * @param value LogMode value string 'DEBUG' | 'INFO' | 'WARN' | 'ERROR'
 *
 * @returns equivalent LogMode Enum value
 */
function getLogMode(value?: string | LogMode): LogMode {
  switch (value) {
    case 'DEBUG':
      return LogMode.DEBUG;
    case 'INFO':
      return LogMode.INFO;
    case 'WARN':
      return LogMode.WARN;
    case 'ERROR':
      return LogMode.ERROR;
    default:
      return process.env.NODE_ENV === 'production'
        ? LogMode.WARN
        : LogMode.INFO;
  }
}

export class Logger {
  public logMode: LogMode;

  public constructor() {
    this.logMode = getLogMode(process.env.LOG_MODE);
  }

  /**
   * Log to console if minimum log mode is met
   * @param mode Minimum log mode to print to console
   * @param msg String message to log to console
   * @param args Extra varaibles and values
   *
   */
  public log(mode: LogMode, msg: string, ...args: unknown[]): void {
    if (mode < this.logMode) {
      return;
    }

    switch (mode) {
      case LogMode.DEBUG:
        console.debug(msg, ...args);
        break;
      case LogMode.INFO:
        console.info(msg, ...args);
        break;
      case LogMode.WARN:
        console.warn(msg, ...args);
        break;
      case LogMode.ERROR:
        console.error(msg, ...args);
        break;
    }
  }
}

export const logger = new Logger();
