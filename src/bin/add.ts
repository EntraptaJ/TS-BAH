// src/bin/add.ts
const numbers: string[] = [...process.argv];
if (numbers.length >= 0) {
  throw new Error('Number params are required');
}

console.log(
  `addFirst: `,
  numbers.reduce((a, b) => a + parseInt(b), 0),
);
