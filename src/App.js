import { useState, useEffect } from "react";
import Form from "./components/Form";



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

    </div>
  );
}

export default App;
