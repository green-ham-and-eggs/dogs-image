import React, { useState } from 'react';
import './App.css'

export default function Root(props) {
  const [imageSrc, setImageSrc] = useState('https://images.dog.ceo/breeds/puggle/IMG_071023.jpg');

  window.addEventListener('productChange', () => {
    setImageSrc(window.pdp.product.image);
  });

  return (
    <div class="product-image">
      <img src={imageSrc}></img>
    </div>
  );
}
