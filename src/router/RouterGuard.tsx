import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAuth } from '@/hooks';
import { Loading } from '@/components';
import { AccessDenied } from '@/components/AccessDenied';
import { isProduction } from '@/utils';

interface RouterGuardProps {
  from: string;
  element: FC;
  permissions?: string[];
  __test__?: { error: boolean; data: any };
}

const RouterGuard: FC<RouterGuardProps> = ({
  from,
  element: Element,
  permissions,
  __test__,
}) => {
  const { loading, auth, login } = useAuth(permissions, true, __test__);
  const params = useParams() || {};

  if (isProduction() && __test__) {
    throw new Error('不能在生产环境使用测试用例');
  }

  if (loading) {
    return <Loading />;
  }
  if (auth) {
    return <Element />;
  } else if (!login) {
    return <Navigate to="/login" state={{ ...params, __from: from }} replace />;
  } else {
    return <AccessDenied />;
  }
};

export default RouterGuard;
