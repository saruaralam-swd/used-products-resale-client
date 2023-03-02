import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../../Components/Loader';
import ProductOrderModal from '../ProductOrderModal/ProductOrderModal';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
  const categoryProducts = useLoaderData();
  const [product, setProduct] = useState(null);

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch(`https://used-products-resale-server.vercel.app/categories`);
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loader></Loader>
  }

  return (
    <div className='my-10'>
      <div>
        {
          categoryProducts.map(categoryProduct =>
            <CategoryProduct
              key={categoryProduct._id}
              setProduct={setProduct}
              categoryProduct={categoryProduct}
            > </CategoryProduct>)
        }
      </div>
      {
        product && <ProductOrderModal product={product} setProduct={setProduct}></ProductOrderModal>
      }
    </div>
  );
};

export default CategoryProducts;