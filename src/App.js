import "./App.css";
const Box = (props) => {
  return (
    <div className="box">
      <div>
        <h2>{props.name}</h2>
        <p>Title:{props.title} </p>
        <p>Age: {props.age}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header>
        <h1>Logo</h1>
      </header>
      <main>
        <Box name="Maria" title="CEO" age="20" />
        <Box name="Sara" title="Accountant" age="36" />
        <Box name="Dani" title="Designer" age="40" />
      </main>
      <footer>
        <p>
          <small>Copyrights</small>
        </p>
      </footer>
    </div>
  );
}

export default App;
