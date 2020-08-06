import React from 'react';
import styles from '../styling/home.module.scss';
import { Link } from 'react-router-dom';
import Main from './FileUpload';

const Home = () => {
  let info = '';
  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
      </div>
      <div className={styles.infoContainer}>
        <div>
          <Main Info={info} />
        </div>
        <div className ={styles.text}>
        <Link  to='/info'>Get more info</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;