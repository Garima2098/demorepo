import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const AddcardHandler = () => {
    setTitle('Pop');
  }

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
        <button onClick={AddcardHandler}>Add to cart</button>
      </div>

    </Card>
  );
}

export default ProductItem;




{/* <button onClick={clickHandler}>Add to Cart</button> */ }


// const [title, setTitle] = useState(props.title);


// function clickHandler() {
//   //title = "Popcorn";
//   setTitle("Popcorn");
//   console.log("button clicked");
// }