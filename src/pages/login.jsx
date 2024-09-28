import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (isAuthenticated) {
    router.push('/products');
    return null;
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
