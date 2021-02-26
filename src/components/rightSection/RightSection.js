import React from "react";
import styles from "./rightSection.module.css";

function RightSection() {
  return (
    <div className={styles.rightSection}>
      <div className={styles.rightMainContent}>
        <h2>Product Details</h2>
        <div className={styles.subHeading}>
          <div>Units Sold</div>
          <div>100</div>
        </div>
        <div className={styles.description}>
          <h5>Description</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem earum asperiores iusto. Corrupti laudantium commodi dolore optio sit sed nemo fugiat obcaecati laboriosam rem dolor nobis fugit consequuntur explicabo, suscipit tempore. Optio atque id iste fugit velit fuga dolorum amet impedit, dolorem magni tenetur. Veritatis facilis libero numquam saepe harum.</p>
        </div>
        {/* <h4 className={styles.heading}>Orders <h5 className={styles.status}>Status:Active</h5></h4> */}
        <div className={styles.heading}>
          <div></div>
          <div>Orders</div>
          <div>Status:Active</div>
        </div>
        <div className={styles.items}>
          <li>1</li>
          <li>Woman Peacoat</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>432</li>
          <li>59,928</li>
        </div>
        <div className={styles.items}>
          <li>1</li>
          <li>Woman Peacoat</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>432</li>
          <li>59,928</li>
        </div>
        <div className={styles.items}>
          <li>1</li>
          <li>Woman Peacoat</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>432</li>
          <li>59,928</li>
        </div>
      </div>
      <footer>
        <div className={styles.itemTotal}>
          <div>Item Total</div>
          <div>--------------------------------------------------------------</div>
          <div>$49640</div>
        </div>
        <div className={styles.orderBtn}>
          <button className={styles.approveBtn}>Approve Order</button>
          <button className={styles.disapproveBtn}>Disapprove Order</button>
        </div>
        <div className={styles.inventoryBtn}>
          <button className={styles.checkBtn}>Check Inventory</button>
        </div>
      </footer>
    </div>
  );
}

export default RightSection;
