import React, { useEffect, useState } from 'react'

const ProductList = () => {

    const [products,setProducts]=useState([])

    async function getProducts() {
       const res=await fetch('http://localhost:3000/api/products')
       const prods=await res.json()
        setProducts(prods)
    }

    useEffect(()=>{
        getProducts()
    },[])

    // console.log(products)

  return (
    <div>
      <h2>Prod List:</h2>
      {products.length === 0 ? (
        <p>No products.</p>
      ) : (
        products.map((product,id) => (
          <div key={product._id} style={{display:'flex',alignItems:'center',gap:'1rem'}}>
            <h3>{id+1}</h3>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default ProductList
