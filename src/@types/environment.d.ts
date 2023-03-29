// src/@types/environment.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LOG_MODE?: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

      NODE_ENV: 'development' | 'production';
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
