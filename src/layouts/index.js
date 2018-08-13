import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { backgroundClassName, mainClassName, subClassName } from '../utils/styles';
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => {
  const { children } = props;
  const siteTitle = 'Proverbs 3:6 | Chosen Stance';

  return (
  <div className={mainClassName}>
    <div className={backgroundClassName}/>
    <Helmet
      title={siteTitle}
      meta={[
        { name: 'description', content: 'Chosen Stance is a car scene brand with a difference ✝' },
        { name: 'keywords', content: 'Jesus, God, cars, love, brand, shirts, clothes, stickers' },
      ]}
    />
    <Header siteTitle={siteTitle} />
    <div className={subClassName}>
      {children()}
    </div>
    <Footer />
  </div>
);
};

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;
