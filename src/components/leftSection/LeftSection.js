import React from "react";
import styles from "./leftSection.module.css";
import data from '../jsonData/unitSold.json';


function LeftSection() {
  return (
    <div className={styles.leftSection}>
      <div className={styles.leftMainContent}>
        <div className={styles.heading}>
          <h5>Units Sold</h5>
          <input type="text" placeholder="&#128269; Search Product Name" />
        </div>
          {
            data.map((item, index) => {
              return(
                  <div className={styles.items}>
                    <div className={styles.leftDiv}>
                      <li>{item.productPic}</li>
                      <li>{item.product}</li>
                    </div>
                    <div className={styles.rightDiv}>
                      <li>{item.stock}</li>
                      <li>{item.price}</li>
                    </div>
                  </div>
              )
            })
          }
      </div>
      <footer>
        <a href="#">Show More</a>
      </footer>
    </div>
  );
}

export default LeftSection;
