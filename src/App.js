import { useState, useEffect } from "react";
import DisplayOutput from "./components/DisplayOutput";


function App() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com'
  const [data, setData] = useState('users');
  const [resp, setResp] = useState([])
  // console.log(data);

  useEffect(() => {
    console.log(data);
    // const fetchData = '';
    if(data === 'users'){
       const fetchData = async () => {
        try{
          const response = await fetch(`${BASE_URL}/${data}`);
          if(!response.ok) throw Error('Facing some Error');

          const listData = await response.json();

          setResp(listData);
          console.log(listData);
        } catch (err){
          setResp(err.message);
        }
      }
      (async () => await fetchData())();
    }else if (data === 'posts'){
      const fetchData = async () => {
        try{
          const response = await fetch(BASE_URL + data);
          if(!response.ok) throw Error('Facing some Error');

          const listData = await response.json();

          setResp(listData);
          console.log(listData);
        } catch (err){
          setResp(err.message);
        }
      }
      (async () => await fetchData())();
    }

    setResp([])


  }, [])
  

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setData('users')} >
          users
        </button>
        <button onClick={() => setData('posts')}>
          posts
        </button>
        <button onClick={() => setData('comments')}>
          comments
        </button>
      </div>
      {
        resp.map(item => {
          console.log(item);
          <p>{item}</p>
        })
      }
    </div>
  );
}

export default App;
