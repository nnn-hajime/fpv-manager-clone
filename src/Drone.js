import favorite from "./favorite.svg";

const Drone = (props) => {
    return (
        <div className="section">
          <img src={props.image} className="image" />
          <img src={favorite} className="icon" />
          <div className="droneName">{props.droneName}</div>
          <div className="date">{props.date}</div>
        </div>
    );
};
export default Drone;