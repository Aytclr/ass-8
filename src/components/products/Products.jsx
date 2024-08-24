import React from 'react'
import ProductCard from "./ProductCard.jsx"

import "./Products.scss"

const Products = ({products}) => {
  
  return (
    <div className='product-list' >
      {
        products.map((ürün)=>(

          <ProductCard key={ürün.id} {...ürün} />
          


        ))
      }
    </div>
  )
}

export default Products