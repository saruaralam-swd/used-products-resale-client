import React from 'react';
import ProductOrderModal from '../../CategoryProducts/ProductOrderModal/ProductOrderModal';
import Advertisement from '../Advertisement.js/Advertisement';
import Categories from '../Categories/Categories';
import UserDocument from '../UserDocument/UserDocument';

const Home = () => {
  return (
    <>
      <Categories></Categories>
      <UserDocument></UserDocument>
      <Advertisement></Advertisement>
    </>
  );
};

export default Home;