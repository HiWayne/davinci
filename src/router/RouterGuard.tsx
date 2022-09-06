import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAuth } from '@/hooks';
import { Loading } from '@/components';
import { AccessDenied } from '@/components/AccessDenied';

interface RouterGuardProps {
  from: string;
  element: FC;
  permissions?: string[];
}

const RouterGuard: FC<RouterGuardProps> = ({
  from,
  element: Element,
  permissions,
}) => {
  const { loading, auth, login } = useAuth(permissions);
  const params = useParams() || {};

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
