
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
// import { IoIosAdd } from "react-icons/io";
import Container from './component/Container';
import Item from './component/item';
import Item1 from './component/Item1';
function App() {
  const [first, setfirst] = useState("");
  const [first1, setfirst1] = useState("");
  const [first2, setfirst2] = useState([]);
  var i=0;
  function click() {
    const todo={name:first,date:first1};
    setfirst2([...first2,todo])
  }
  function input(e) {
    setfirst(e.target.value);
  }
  function intdate(e) {
    console.log(e.key)
      setfirst1(e.target.value);
  }

  function input1(name) {
    const oddNumbers = first2.filter(number => number.name !== name);
     setfirst2(oddNumbers);
  }
  return (
    <Container>
      <h2 className="text-center">TO Do List</h2>
    <Item input={input} intdate={intdate} click={click}/>
    {first2.map(item=><Item1 key={i++} name={item.name} dob={item.date} input1={input1}/>)}
    </Container>
  );
}

export default App;
