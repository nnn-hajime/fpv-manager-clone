import "./App.css";
import drone1 from "./drone1.jpg";
import drone2 from "./drone2.jpg";
import drone3 from "./drone3.jpg";
import drone4 from "./drone4.jfif";
import favorite from "./favorite.svg";
import droneIcon from "./droneIcon.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <header>Drones</header>

        <input type="text" className="searchBar"></input>
      </div>

      <div className="switch">
        <div>ALL</div>
        <div>FAVORITE</div>
      </div>

      <div className="body">
        <div className="section">
          <img src={drone1} className="image" />
          <img src={favorite} className="icon" />
          <div className="droneName">レースドローン</div>
          <div className="date">2022/02/28</div>
        </div>
        <div className="section">
          <img src={drone2} className="image" />
          <img src={favorite} className="icon" />
          <div className="droneName">ドローンA</div>
          <div className="date">2022/02/28</div>
        </div>
        <div className="section">
          <img src={drone3} className="image" />
          <img src={favorite} className="icon" />
          <div className="droneName">ドローンA</div>
          <div className="date">2022/02/28</div>
        </div>
        <div className="section">
          <img src={drone4} className="image" />
          <img src={favorite} className="icon" />
          <div className="droneName">ドローンA</div>
          <div className="date">2022/02/28</div>
        </div>
      </div>

      <div className="navbar">
        <img src={droneIcon} className="navicon" />
        <img src={droneIcon} className="navicon" />
        <img src={droneIcon} className="navicon" />
      </div>
    </div>
  );
}

export default App;
