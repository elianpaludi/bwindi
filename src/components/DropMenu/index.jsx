import React from "react";
import "./DropMenu.css";
import { Link } from "react-router-dom";
function DropMenu(props) {
  const { className } = props;
  

 

  return (
    <div className="menuDrop dropdown dropdown-keep-open">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MEMBERS </button>
      <div className="dropdown-menu overlap-group9 jost-semi-bold-white-131px" aria-labelledby="dropdownMenuButton">
        <div className="overlap-group9-item"><Link to="/members">THE JUNGLE</Link></div>
          <div className="overlap-group9-item"><Link to="/members">BWINDI CLUB</Link></div>
          <div className="overlap-group9-item"><Link to="/members">MARKETPLACE</Link></div>
          <div className="overlap-group9-item"><Link to="/members">TREEHOUSE</Link></div>
          <div className="overlap-group9-item"><Link to="/members">SAFARI PARK</Link></div>
          <div className="overlap-group9-item"><Link to="/members">DATING CAVE</Link></div>
        </div>
      </div>


  // <div className="nav-item dropdown drop-menu" >
  //     {/* <img className="polygon-1" src="/img/polygon-1@2x.svg" alt=""/> */}
  //     <a href="javascript:;" className="nav-link dropdown-toggle" data-toggle="dropdown"></a>
  //   <ul className="dropdown-menu jost-semi-bold-white-13px" onclick="event.stopPropagation()" aria-labelledby="dropdownMenuButton1">
  //      <li><a className="dropdown-item" href="#">Action</a></li>
  //      <li><a className="dropdown-item" href="#">Another action</a></li>
  //      <li><a className="dropdown-item" href="#">Something else here</a></li>
  //    </ul>
  // </div>
  //   <div className="dropdown">
  //   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  //     Dropdown button
  //   </button>
  //   <ul className="dropdown-menu" onclick="event.stopPropagation()" aria-labelledby="dropdownMenuButton1">
  //     <li><a className="dropdown-item" href="#">Action</a></li>
  //     <li><a className="dropdown-item" href="#">Another action</a></li>
  //     <li><a className="dropdown-item" href="#">Something else here</a></li>
  //   </ul>
  // </div> 
    // <div className={`drop-menu ${className || ""}`}>
    //   <img className="polygon-1" src="/img/polygon-1@2x.svg" alt=""/>
    //   <div className="overlap-group9 jost-semi-bold-white-13px">
    //     <div className="overlap-group9-item">THE JUNGLE</div>
    //     <div className="overlap-group9-item">BWINDI CLUB</div>
    //     <div className="overlap-group9-item">MARKETPLACE</div>
    //     <div className="overlap-group9-item">TREEHOUSE</div>
    //     <div className="overlap-group9-item">SAFARI PARK</div>
    //     <div className="overlap-group9-item">DATING CAVE</div>
    //   </div>
    // </div>
  );
}

export default DropMenu;
