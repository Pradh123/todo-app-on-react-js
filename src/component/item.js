
import styles from "./item.module.css";
import Btn from "./Btn";
const Item = ({input,intdate,click}) => {
 
  return (
    <div className=" row" id={styles.row}>
      <div className=" col-6">
        <input
          type="text"
          className=" py-2 border-2 border-black rounded"
          id={styles.colOne}
          onChange={ input}
        ></input>
      </div>
      <div className=" col-4">
        <input type="date" className=" py-2 border-2 border-black rounded" id={styles.colOne} onChange={ intdate} />
      </div>
      <div className=" col-2">
        <Btn  click={click} />
      </div>
    </div>
  );
};

export default Item;
