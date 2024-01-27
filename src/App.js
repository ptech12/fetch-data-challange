import DisplayOutput from "./components/DisplayOutput";


function App() {
  return (
    <div className="App">
      <div className="buttons">
        <button>
          users
        </button>
        <button>
          posts
        </button>
        <button>
          comments
        </button>
      </div>
      <DisplayOutput />
    </div>
  );
}

export default App;
