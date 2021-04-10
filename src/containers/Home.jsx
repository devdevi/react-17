import React from 'react';
import initalState from '../initalState'
import Products from './Products'

const Home =  () => (
       <Products products={initalState.products} />
)

export default Home