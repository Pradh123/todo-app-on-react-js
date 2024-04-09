import styles from "./Item1.module.css";
import { MdDelete } from "react-icons/md";
const Item1 = ({name,dob,input1}) => {
  return (
      <div className=" row" id={styles.row}>
        <div className=" col-6" >
          <h2 id={styles.colOne}>{name}</h2>
        </div>
        <div className=" col-4" >
        <p id={styles.colOne} className=" text-2xl">{dob}</p>
        </div>
        <div className=" col-2" >
        <button className=" bg-slate-300 text-red-600 py-1 font-medium px-2 ms-1 rounded" id={styles.colOne} onClick={()=>input1(name)}><MdDelete className=" text-4xl"/></button>
        </div>
      </div>
  );
};

export default Item1;
