import Menu from "./Components/Menu";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import "./App.css";

function App() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Menu />
        <div className="layout-page">
          <NavBar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
