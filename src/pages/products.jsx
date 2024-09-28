import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';
import { fetchProducts } from '@/utils/useApi';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '@/pages/Products.module.scss';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0); // State to track total price

  const router = useRouter();

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (products.length > 0) {
        // Ensure products are loaded
        const total = cart.reduce((acc, item) => {
          const product = products.find((p) => p.id === item.productId);
          return acc + (product ? product.price * item.quantity : 0);
        }, 0);
        setTotalPrice(total);
      }
    };

    calculateTotalPrice();
  }, [cart, products]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/login';
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchP = async () => {
      const response = await fetchProducts();
      setProducts(response);
    };

    fetchP();
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities({
      ...quantities,
      [productId]: quantity,
    });
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const existingItem = cart.find((item) => item.productId === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.productId === product.id || 1
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { productId: product.id, name: product.name, quantity },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.productId !== productId));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = 1;

    const orderData = {
      user: userId,
      order_items: cart.map((item) => ({
        product: item.productId,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/orders/',
        orderData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Order created successfully');
      setCart([]);
      setQuantities({});
      router.push('/orders/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles['product-list']}>
          {products.map((product) => {
            const isInCart = cart.some((item) => item.productId === product.id);

            return (
              <div key={product.id} className={styles['product-card']}>
                <Link
                  href={`/products/${product.id}/`}
                  className={styles['link']}>
                  <div className={styles['product-info']}>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                  </div>
                </Link>
                <select
                  value={quantities[product.id]}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value))
                  }>
                  {[...Array(8).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  disabled={isInCart}>
                  {isInCart ? 'Added to cart' : 'Add to cart'}
                </button>
              </div>
            );
          })}
        </div>
        <div className={styles['cart-container']}>
          <h3>Your cart</h3>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item) => (
                <li key={item.productId} className={styles['cart-item']}>
                  <span>
                    {item.name} - Quantity: {item.quantity}
                  </span>
                  <button onClick={() => removeFromCart(item.productId)}>
                    Remove from Cart
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty</p>
          )}
          {cart.length > 0 && (
            <>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>{' '}
              <button onClick={handleSubmit}>Submit Order</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
