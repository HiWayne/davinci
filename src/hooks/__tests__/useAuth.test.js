import { renderHook } from '@testing-library/react-hooks';
import { useAuth } from '../index';

test('useAuth 测试 登录无权限', () => {
  const { result } = renderHook(() =>
    useAuth(['normal_manager'], true, {
      error: false,
      data: { status: 1, data: { identity: [] } },
    }),
  );
  // result.current 包含hooks的返回值
  expect(result.current.loading).toBe(false);
  expect(result.current.auth).toBe(false);
  expect(result.current.login).toBe(true);
});

test('useAuth 测试 宽松模式有部分权限', () => {
  const { result } = renderHook(() =>
    useAuth(['normal_manager', 'user_manager'], true, {
      error: false,
      data: {
        status: 1,
        data: { identity: ['normal_manager'] },
      },
    }),
  );
  // result.current 包含hooks的返回值
  expect(result.current.loading).toBe(false);
  expect(result.current.auth).toBe(true);
  expect(result.current.login).toBe(true);
});

test('useAuth 测试 严格模式有部分权限', () => {
  const { result } = renderHook(() =>
    useAuth(['normal_manager', 'user_manager'], false, {
      error: false,
      data: {
        status: 1,
        data: { identity: ['normal_manager'] },
      },
    }),
  );
  // result.current 包含hooks的返回值
  expect(result.current.loading).toBe(false);
  expect(result.current.auth).toBe(false);
  expect(result.current.login).toBe(true);
});

test('useAuth 测试 未登录', () => {
  const { result } = renderHook(() =>
    useAuth(['normal_manager'], true, {
      error: false,
      data: {
        status: 2,
        data: null,
      },
    }),
  );
  // result.current 包含hooks的返回值
  expect(result.current.loading).toBe(false);
  expect(result.current.auth).toBe(false);
  expect(result.current.login).toBe(false);
});

test('useAuth 测试 请求中', () => {
  const { result } = renderHook(() =>
    useAuth(['normal_manager'], true, {
      error: false,
      data: null,
    }),
  );
  // result.current 包含hooks的返回值
  expect(result.current.loading).toBe(true);
  expect(result.current.auth).toBe(false);
  expect(result.current.login).toBe(false);
});
