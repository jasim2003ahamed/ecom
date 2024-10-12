import {Fragment, useEffect, useState} from 'react';
import ProductCard from '../component/productCard';
import { useSearchParams } from 'react-router-dom';



export default function Home(){
    const [products,setproducts] = useState([]);
    const [searchParams,setSearchParams] = useSearchParams()
  

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/product?'+searchParams)
        .then(res => res.json())
        .then(res => setproducts(res.products))
    },[searchParams])

    return <Fragment>
    <h1 id="products_heading">Latest Products</h1>

    <section id="products" class="container mt-5">
      <div class="row">
       {products.map(product => <ProductCard product={product}/>)}
       
      </div>
    </section>

   

    </Fragment>
}