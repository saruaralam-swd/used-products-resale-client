import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`, {
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
    <div>
      <h2 className="text-3xl text-center">All My Orders</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th>S/N</th>
              <th>Image</th>
              <th>title</th>
              <th>Price</th>
              <th>email</th>
              <th>available/sold</th>
            </tr>
          </thead>
          <tbody>
            {
              orders?.map((order, index) =>
                <tr key={index}>

                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask w-20 h-20">
                        <img src={order?.productImage} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{order?.productName}</td>
                  <td>{order?.price}</td>
                  <td>{order?.email}</td>
                  <td>
                    {
                      order?.price && !order?.paid && <Link to={`/dashboard/payment/${order?._id}`}><button className='btn btn-sm btn-primary'>Pay</button></Link>
                    }
                    {
                      order?.price && order?.paid && <span className='text-green-500'>Paid</span>
                    }
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;