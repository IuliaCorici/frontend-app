import React from 'react';
import styles from '../styling/info.module.scss';
import {connect} from "react-redux"



function Info(props) {
    const {name, info} = props;
   return (
   <div className={styles.container}>
      <div className={styles.nameContainer}>
      </div>
      <div className={styles.infoContainer}>
         <div className={styles.text}>
            {info}
        </div>
      </div>
    </div>
   );
}


const MapState = ({fotoInfo}) => ({
  name: fotoInfo.name,
  info: fotoInfo.info
})
export default connect(MapState, null)(Info);