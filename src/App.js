import "./App.css";
import drone1 from "./drone1.jpg";
import favorite from "./favorite.svg";
import droneIcon from "./droneIcon.svg";


function App() {
  return (
    <div className="App">

      <div className="header">
        <header>Drones</header>
        
        <input type="text"></input>
      </div>

      <div className="switch">
        <div>ALL</div>
        <div>FAVORITE</div>
      </div>

      <div className="body">
        <div className="section">
        <img src={drone1} className="image"/>
        <img src={favorite} className="icon"/>
        <div className="droneName">レースドローン</div>
        <div className="date">2022/02/28</div>
        </div>
      </div>

      <div className="navbar">
        <div><img src={droneIcon}/> </div>
        <div><img src={droneIcon}/> </div>
        <div><img src={droneIcon}/> </div>
      </div>
    </div>
  );
}

export default App;
