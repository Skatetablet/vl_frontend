import OrdersTable from '@/components/OrdersTable';
import { AuthProvider } from '@/context/AuthContext';

const Orders = () => {
  return (
    <AuthProvider>
      <div>
        <OrdersTable />
      </div>
    </AuthProvider>
  );
};

export default Orders;
