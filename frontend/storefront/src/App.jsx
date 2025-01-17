import { useState,useEffect } from 'react';
import { Typography } from '@mui/material';
import Product from './components/Product';


export default function App() {
  const [products, setProducts] = useState(null);
  const url="http://127.0.0.1:8000/store/products/";
  const fetchProducts=async()=>{
  await fetch(url)
  .then(res=>{console.log(res);
    return res.json();})
  .then(res=>{
    console.log(res);
    setProducts(res);
    return ;
  }).finally(()=>{})
}
    useEffect(()=>
    fetchProducts(),[products]
   )
    

  return (
   <div>
 {products?<>
  <Product prodItem={products[0]}></Product><Product prodItem={products[1]}/><Product prodItem={products[2]}/><Product prodItem={products[3]}/>
  </>:"not found"}
  </div>)
  }
