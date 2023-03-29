// src/Utils/add.test.ts
import { TestSuite } from '@k-foss/ts-estests';
import { strictEqual } from 'assert';
import { add } from './add';
import { timeout } from './timeout';

export class AddTestSuite extends TestSuite {
  public testName = 'AddTest Suite';

  public async test(): Promise<void> {
    strictEqual(add(1, 1), 2, 'add(1, 1) === 2');

    await timeout(500);
  }
}
