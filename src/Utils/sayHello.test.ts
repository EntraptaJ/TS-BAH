// src/Utils/sayHello.test.ts
import { TestSuite } from '@k-foss/ts-estests';
import { strictEqual } from 'assert';
import { name } from 'faker';
import { sayHello } from './sayHello';

export class SayHelloTest extends TestSuite {
  public testName = 'SayHello Suite';

  public async sayHello(): Promise<void> {
    const fakeName = name.firstName();

    const result = await sayHello(fakeName);

    strictEqual(result, `Hello ${fakeName}!`);
  }

  public async test(): Promise<void> {
    await this.sayHello();
  }
}
