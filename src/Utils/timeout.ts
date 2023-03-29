// src/Utils/timeout.ts

/**
 * Returns a promise that resolves after the specified timeout in ms
 * @param timeout time in ms to wait before resolving promise
 */
export function timeout(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
