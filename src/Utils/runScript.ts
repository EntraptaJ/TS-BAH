// src/Utils/runScript.ts
import { resolve } from 'path';
import { fileURLToPath } from 'url';

process.argv.splice(0, 2);

const scriptName = process.argv[0];
process.argv.splice(0, 1);

const binScriptsPath = resolve(
  fileURLToPath(import.meta.url),
  `../../bin/${scriptName}`,
);

console.log('Running script', binScriptsPath);

await import(binScriptsPath);
