import { ReactNode, useEffect } from 'react';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';
import { useRouter } from 'next/router';

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  const router = useRouter();

  useEffect(() => {
    if (!checkingStatus && !loggedIn) {
      router.push('/sign-in');
    }
  }, [loggedIn, checkingStatus, router]);

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <>{children}</> : null;
};

export default PrivateRoute;
