import styles from './FlexWrap.module.scss';

const FlexWrap = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default FlexWrap;