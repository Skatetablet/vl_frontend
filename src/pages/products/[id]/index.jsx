import { fetchProductById } from '@/utils/useApi';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link for navigation
import styles from '@/pages/products/[id]/ProductDetail.module.scss';

import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (id) {
        const response = await fetchProductById(id);
        setProduct(response);
        console.log(product);
      }
    };
    fetchProductDetails();
  }, [id]); // Dependency on id to refetch when it changes

  if (!product) {
    return <p>Loading...</p>; // Loading state
  }
  return (
    <div className={styles.container}>
      <Link href='/products' className={styles['backButton']}>
        Back to Home
      </Link>
      <div className={styles['card']}>
        <h2>Product Details</h2>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
