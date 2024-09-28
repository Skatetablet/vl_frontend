import { fetchOrders } from '@/utils/useApi';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import styles from '@/components/OrdersTable.module.scss';

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchO = async () => {
      try {
        const response = await fetchOrders();
        setOrders(response); // Set orders if API call is successful
      } catch (err) {
        console.error('Error fetching orders:', err);
      }
    };
    fetchO(); // Call the async function
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles['orders-container']}>
        <h2>Your Orders</h2>

        {orders.length > 0 && (
          <table
            className={`${styles['orders-table']} ${
              orders.length > 0 ? styles.visible : ''
            }`}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Total Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id.slice(-5)}</td>
                  <td>{order.user}</td>
                  <td>{order.total_price}</td>
                  <td>{new Date(order.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default OrdersTable;
