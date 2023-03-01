import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import ProductOrderModal from '../../CategoryProducts/ProductOrderModal/ProductOrderModal';
import AdvertisementCard from './AdvertisementCard';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import ProductGridView from './ProductGridView';

const Advertisement = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [productView, setProductView] = useState('');

  const { data: advertisement = [], isLoading } = useQuery({
    queryKey: ['advertisement'],
    queryFn: async () => {
      const res = await fetch(`https://used-products-resale-server.vercel.app/advertisement?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='my-20 bg-white'>
      {
        advertisement.length > 0 &&
        <div className='px-10' >
          <div className='flex items-center justify-between'>
            <div className='hidden lg:block'>{" "}</div>
            <h2 className="text-2xl text-center font-bold text-slate-700 mb-10">Advertisement</h2>
            <div className='flex gap-3'>
              <BsFillGrid3X3GapFill onClick={() => setProductView(true)} className='h-6 w-6 inline-block cursor-pointer' />
              <FaListUl onClick={() => setProductView(false)} className='w-6 h-6 inline-block cursor-pointer' />
            </div>
          </div>

          <div>
            {
              productView ?
                <div className='grid md:grid-cols-4 lg:grid-cols-4 gap-10'>
                  {
                    advertisement.map(product => <ProductGridView setProduct={setProduct} key={product._id} product={product}></ProductGridView>)
                  }
                </div>
                :
                <div>
                  {
                    advertisement.map(product => <AdvertisementCard setProduct={setProduct} key={product._id} product={product}></AdvertisementCard>)
                  }
                </div>
            }
          </div>

          <div>
            {
              product && <ProductOrderModal product={product} setProduct={setProduct}></ProductOrderModal>
            }
          </div>
        </div >
      }
    </div>
  );
};

export default Advertisement;