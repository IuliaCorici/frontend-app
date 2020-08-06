
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styling/header.module.scss';
import imgHome from './home.png';
import imgContact from './CONTACT_BUN.png';


const Header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to='/'>
        <img  height="110px" width="120px" src={imgHome} alt=""/>
      </Link>
      <Link className={styles.link} to='/name'>
        <img  height="120px" width="130px" src={imgContact} alt=""/>
      </Link>
    </div>
  );
};
export default Header;