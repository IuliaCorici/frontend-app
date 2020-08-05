import React from 'react';
import styles from '../styling/home.module.scss';
import { Link } from 'react-router-dom';
import Main from './FileUpload';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        {/* <div className={styles.text}>
          <Link to='/name'>Name of the Landmark</Link>
        </div> */}
      </div>
      <div className={styles.infoContainer}>
        <div>
          <Main />
        </div>
        <div className ={styles.text}>
        <Link to='/info'>Get more info</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;