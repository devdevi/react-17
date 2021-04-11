import React from 'react';
import initalState from '../initalState'
import Products from './Products'
import MetaHead from './Helmet'

const Home = () => (
              <>
              <MetaHead
                     title="Productos"
                     description="Encuentra todos tus productos favoritos"
                     image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
                     url="https://youthful-bassi-a35236.netlify.app/"
              />
       <Products products={initalState.products} />
       </>
)

export default Home