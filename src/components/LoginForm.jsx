import { useAuth } from '@/context/AuthContext';
import { loginAndFetchToken } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '@/components/LoginForm.module.scss';

const LoginForm = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await loginAndFetchToken(username, password);

      login();
      router.push('/products');

      console.log(token);
    } catch (error) {
      alert('Login failed' + error);
    }
  };

  return (
    <div className={styles['login-form-container']}>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usename:</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
