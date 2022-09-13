import useSWR from 'swr';
import { isProduction } from '@/utils';

interface UseAuthResponse {
  loading: boolean;
  auth: boolean;
  login: boolean;
}

interface UserData {
  identity: string[];
}

interface Response {
  status: number;
  data: UserData | undefined;
}

const hasPermissions = (
  userPermissions: string[],
  permissionsToBeVerified: string[],
  loose: boolean,
) =>
  loose
    ? permissionsToBeVerified.some((permission) =>
        userPermissions.includes(permission),
      )
    : permissionsToBeVerified.every((permission) =>
        userPermissions.includes(permission),
      );

export const useAuth = (
  permissions?: string[],
  loose: boolean = true,
  __test__?: { error: boolean; data: Response | null },
): UseAuthResponse => {
  let response;
  response = useSWR<Response>({
    method: 'get',
    url: '/napi/people/profile/',
  });
  if (isProduction() && __test__) {
    throw new Error('不能在生产环境使用测试用例');
  }
  if (!isProduction() && __test__) {
    response = __test__;
  }
  // 不需要权限
  if (!Array.isArray(permissions)) {
    return {
      loading: false,
      auth: true,
      login: true,
    };
  }
  // 请求失败
  if (response.error) {
    return {
      loading: false,
      auth: false,
      login: false,
    };
  }
  // 请求成功
  if (response.data) {
    const { status, data } = response.data;
    // 登录
    if (status === 1 && data) {
      // 有权限。permissions是空数组代表只需要登录，不需要其他特殊权限
      if (
        permissions.length === 0 ||
        (permissions.length > 0 &&
          hasPermissions(data.identity, permissions, loose))
      ) {
        return {
          loading: false,
          auth: true,
          login: true,
        };
      } else {
        // 登录 & 无权限
        return {
          loading: false,
          auth: false,
          login: true,
        };
      }
    } else {
      // 未登录
      return {
        loading: false,
        auth: false,
        login: false,
      };
    }
  } else {
    // 请求中
    return {
      loading: true,
      auth: false,
      login: false,
    };
  }
};
