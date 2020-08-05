
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styling/header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to='/'>
        Home
      </Link>
      <Link className={styles.link} to='/name'>
        Contact
      </Link>
      {/* <Link className={styles.link} to='/info'>
        Info
      </Link> */}
    </div>
  );
};
export default Header;