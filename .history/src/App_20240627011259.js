import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row title="NETFLIX ORIGINA" id="NO" />
    </div>
  );
}

export default App;
