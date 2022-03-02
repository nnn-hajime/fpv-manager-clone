import "./App.css";

import Drone from "./Drone.js";

import drone1 from "./drone1.jpg";
import drone2 from "./drone2.jpg";
import drone3 from "./drone3.jpg";
import drone4 from "./drone4.jfif";

import droneIcon from "./droneIcon.svg";
import addIcon from "./add.svg";
import menu from "./menu.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={menu} className="menu" />
        <div className="headerTop">
          <h3>Drones</h3>
          <input type="text" className="searchBar" placeholder="検索"></input>
        </div>
      </div>

      <div className="body">
        <div className="switch">
          <div>ALL</div>
          <div>FAVORITE</div>
        </div>

        <Drone
          image={drone1}
          droneName={"レース用ドローン"}
          date={"2022/03/02"}
        />
        <Drone
          image={drone2}
          droneName={"レース用ドローン"}
          date={"2022/03/02"}
        />
        <Drone
          image={drone3}
          droneName={"レース用ドローン"}
          date={"2022/03/02"}
        />
        <Drone
          image={drone4}
          droneName={"レース用ドローン"}
          date={"2022/03/02"}
        />
      </div>
      <div className="addButton">
        <div className="circle">
          <img src={addIcon} className="addIcon" />
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
