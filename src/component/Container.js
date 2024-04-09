import styles from "./Container.module.css";
const Container = (props) => {
    console.log(props.children);
  return (
    <div className=" container" id={styles.item}>{props.children}</div>
    
  );
};

export default Container;