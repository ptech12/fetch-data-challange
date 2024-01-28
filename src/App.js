import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";


function App() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/'
  const [req, setReq] = useState('users');
  const [data, setData] = useState([])
  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`${BASE_URL}${req}`);
        const responseData = await response.json();
        console.log(responseData);
        setData(responseData)
      }catch (err){
        console.log(err);
      }
    }
    fetchData();

  }, [req])
  

  return (
    <div className="App">
      <Form req={req} setReq={setReq}/>
      <List data={data} />

    </div>
  );
}

export default App;
