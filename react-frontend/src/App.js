import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Info from "./components/Information/Info";
import Search from "./components/Search/Search";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Jobs from "./components/Jobs/Jobs";
// Style sheet
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info/>
      {/* <Search/>
      <LeftSidebar/>
      {/* <Jobs/> */}
       */}
    </div>
  );
}

export default App;
