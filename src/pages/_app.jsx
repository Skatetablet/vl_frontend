import { AuthProvider } from '@/context/AuthContext';
import '@/pages/global.scss';
import App from 'next/app'; // Import the App from 'next/app'

// Custom App component
const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

// Optional: if you need to use getInitialProps
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
