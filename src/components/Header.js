import React from 'react';
import logo from '../assets/logo.png';
import userProfileIcon from '../assets/user_profile_icon.png';

function Header() {
  return (
    <header>
      <div className="row">
        <div className="col-md-7 col-sm-7 col-xs-4">
          <a className="logo" href="#"><img src={logo} alt="Inbox logo" /></a>
        </div>
        <div className="col-md-5 col-sm-5 col-xs-8 text-right menu_sectn">
          <ul>
            <li><a href="#"><i className="fas fa-search" /></a></li>
            <li>
              <a className="notification" href="#"><i className="far fa-bell" /></a>
            </li>
            <li>
              <div className="dropdown">
                <div className="user_profile"><img src={userProfileIcon} alt="" /></div>
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span><i className="fas fa-chevron-down" /></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
