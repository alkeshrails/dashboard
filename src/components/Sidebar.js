import React from 'react';
import apps from '../assets/apps.png';
import security from '../assets/security.png';
import setting from '../assets/setting.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <a className="sidebar_xs_menu" href="#"><i className="fas fa-bars" /></a>
      <ul>
        <li>
          <a href="#"><img src={apps} alt="" /></a>
        </li>
        <li>
          <a className="active" href="#"><i className="far fa-envelope"></i></a>
        </li>
        <li>
          <a href="#"><i className="fas fa-desktop" /></a>
        </li>
        <li>
          <a href="#"><img src={security} alt="" /></a>
        </li>
        <li>
          <a href="#"><i className="fas fa-history" /></a>
        </li>
        <li>
          <a href="#"><i className="far fa-user-circle" /></a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="#"><i className="far fa-question-circle" /></a>
        </li>
        <li>
          <a href="#"><img src={setting} alt="" /></a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
