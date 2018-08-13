import React from 'react'
import Link from 'gatsby-link'
import { shopClassName, collectionSectionClassName, collectionClassName, collectionBoxesClassName } from '../utils/styles';

const Shop = () => (
  <div className={shopClassName}>
    <h2>The collection</h2>
      <div className={collectionClassName}>
        <div className={collectionBoxesClassName}/>
        <div className={collectionBoxesClassName}/>
        <div className={collectionBoxesClassName}/>
      </div>
  </div>
)

export default Shop;
