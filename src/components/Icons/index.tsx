import React from "react";
import clsx from "clsx";
import { ReactComponent as ArrowRightIcon } from "./arrow-right.svg";
import { ReactComponent as StarIcon } from "./star.svg";
import styles from "./icons.module.css";

const Icons: React.FC = () => (
  <div className={styles.container}>
    <div className={clsx(styles.box, styles.inverted)}>
      <ArrowRightIcon />
    </div>
    <div className={styles.box}>
      <StarIcon />
    </div>
    <div className={styles.box}></div>
    <div className={styles.box}></div>
  </div>
);

export { ArrowRightIcon, StarIcon };

export default Icons;
