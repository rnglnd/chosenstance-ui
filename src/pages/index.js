import React from 'react';
import Link from 'gatsby-link';
import {
  sectionClassName,
  pageClassName,
  smallAboutClassName,
  neutralButtonClassName,
  collectionSectionClassName,
  collectionClassName,
  collectionBoxesClassName,
  header1ClassName,
  paragraphClassName
} from '../utils/styles';

const IndexPage = () => (
  <div className={pageClassName}>
    <section className={sectionClassName}>
      CHOSENSTANCE
    </section>
    <div className={smallAboutClassName}>
      <h1 className={header1ClassName}>What are we?</h1>
      <p className={paragraphClassName}>We are a car scene brand with a difference</p>
      <Link to="/blog" className={neutralButtonClassName}>Learn more</Link>
    </div>
    <section className={collectionSectionClassName}>
      <h1 className={header1ClassName}>Shop the collection</h1>
      <div className={collectionClassName}>
        <div className={collectionBoxesClassName}/>
        <div className={collectionBoxesClassName}/>
        <div className={collectionBoxesClassName}/>
      </div>
    </section>
  </div>
)

export default IndexPage
