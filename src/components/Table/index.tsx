import React from "react";
import styles from "./table.module.css";

const Table: React.FC = ({ children }) => <table className={styles.table}>{children}</table>;
const Thead: React.FC = ({ children }) => <thead className={styles.thead}>{children}</thead>;
const Tbody: React.FC = ({ children }) => <tbody className={styles.tbody}>{children}</tbody>;

export { Thead, Tbody };
export default Table;
