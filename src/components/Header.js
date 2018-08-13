import React from 'react';
import Link from 'gatsby-link';
import { headerClassName, linkHeaderClassName } from '../utils/styles';

const Header = ({ siteTitle }) => (
  <div
    className={headerClassName}
  >
    <div>
        <Link
          to="/"
          className={linkHeaderClassName}
        >
          Home
        </Link>
        <Link
          to="/blog"
          className={linkHeaderClassName}
        >
          Blog
        </Link>
        <Link
          to="/shop"
          className={linkHeaderClassName}
        >
          Shop
        </Link>
    </div>
    <div/>
  </div>
)

export default Header;
