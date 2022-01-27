import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Info from "./components/Information/Info";

// Style sheet
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
    </div>
  );
}

export default App;
