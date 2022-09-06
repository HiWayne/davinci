import useSWR from 'swr';

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

export const useAuth = (permissions?: string[]): UseAuthResponse => {
  const response = useSWR<Response>({
    method: 'get',
    url: '/napi/people/profile/',
  });
  // 不需要权限
  if (!permissions) {
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
      // 有权限
      if (
        Array.isArray(permissions) &&
        permissions.length > 0 &&
        permissions.includes(response as any)
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
