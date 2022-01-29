import React from 'react';

import "./LeftSidebar.css";
import {BarItems} from "./BarItems";
import icon from "../../icon1.jpg";
function LeftSidebar() {
  return (
    <div>
      <div className="left-sidebar">
        <div className="menu-profile">
          <div className="picture">
            <img src="" alt="image" />
          </div>
          <div className="name">
            <h4>John Doe</h4>
          </div>
        </div>
        <div className="left-Menu">
          <ul className="left-menu">
            {BarItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
