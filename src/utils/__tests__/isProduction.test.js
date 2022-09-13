import { isProduction } from '../index';

test('isProduction 测试', () => {
  const result = isProduction();
  expect(result).toBe(false);
});
