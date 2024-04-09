
import { IoIosAdd } from "react-icons/io";
const Btn = ({click}) => {
  return (
          <button className=" bg-green-700 rounded py-2 text-center text-2xl px-4" onClick={click}><IoIosAdd  /></button>    
  );
};

export default Btn;