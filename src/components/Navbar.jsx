import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import styles from '@/components/Navbar.module.scss';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-links']}>
        <Link href='/products'>Home</Link>
        <Link href='/orders'>Orders</Link>
      </div>
      {isAuthenticated ? (
        <button onClick={logout} className={styles['logout-button']}>
          Logout
        </button>
      ) : (
        <Link href='/login'>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
