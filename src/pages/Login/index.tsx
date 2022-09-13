import qs from 'qs';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const loginSuccess = useCallback(() => {
    const state: any = { ...(location.state || {}) };
    const path = state?.__from;
    delete state.__from;
    const query = qs.stringify(state);
    const fromPath = path ? path + (query ? `?${query}` : '') : '/';
    navigate(fromPath, { replace: true });
  }, []);
  return <div onClick={loginSuccess}>TODO: 登录</div>;
};

export default Login;
