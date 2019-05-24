import React from 'react';
import userIconYellow from '../../assets/user_icon_yellow.png';
import userIconGreen from '../../assets/user_icon_green.png';

function MiddleLeftSection() {
  return (
    <div className="col-md-3 col-sm-4 col-xs-12 pd-0">
      <div className="white_main_box recent_sectn">
        <h5 className="head">Recent <span><i className="fas fa-chevron-down" /></span></h5>

        <div className="row action_row">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <strong>1,362</strong>
            <p>Total requests</p>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <strong>03</strong>
            <p>New</p>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <strong>1.264</strong>
            <p>Solved</p>
          </div>
        </div>

        <div className="row action_row">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <strong>26</strong>
            <p>In progress</p>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <strong>36</strong>
            <p>Pending</p>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <strong>20</strong>
            <p>In review</p>
          </div>
        </div>

        <div className="mail_details">
          <section className="open unread">
            <div className="img_sctn">
              <img src={userIconYellow} alt="" />
            </div>
            <div className="usermail">
              <h5>Derek Shepherd (sheperd@gre...)</h5>
              <p>Data Access <span>20 min ago</span></p>
            </div>
            <div className="clearfix" />
          </section>

          <section className="unread">
            <div className="img_sctn">
              <img src={userIconGreen} alt="" />
            </div>
            <div className="usermail">
              <h5>George Omalley (georgeomalley...)</h5>
              <p>Question <span>20 min ago</span></p>
            </div>
            <div className="clearfix" />
          </section>

          <section className="unread">
            <div className="img_sctn">
              <img src="assets/user_icon_blue.png" alt="" />
            </div>
            <div className="usermail">
              <h5>Meredith Grey (merder@greys.com)</h5>
              <p>Data transfer <span>20 min ago</span></p>
            </div>
            <div className="clearfix" />
          </section>

          <section>
            <div className="img_sctn">
              <img src={userIconGreen} alt="" />
            </div>
            <div className="usermail">
              <h5>Lizzie Pierce (lizzie@jardim.com)</h5>
              <p>Question <span>20 min ago</span></p>
            </div>
            <div className="clearfix" />
          </section>

          <section>
            <div className="img_sctn">
              <img src={userIconYellow} alt="" />
            </div>
            <div className="usermail">
              <h5>Chrsitina Yang (christinayang@hos...)</h5>
              <p>Data Access <span>20 min ago</span></p>
            </div>
            <div className="clearfix" />
          </section>

          <section>
            <div className="img_sctn">
              <img src="assets/user_icon_red.png" alt="" />
            </div>
            <div className="usermail">
              <h5>Tim Maia (tim@primavera.com)</h5>
              <p>Complaint <span>20 min ago</span></p>
            </div>
            <div className="clearfix" />
          </section>

          <section>
            <div className="img_sctn">
              <img src={userIconYellow} alt="" />
            </div>
            <div className="usermail">
              <h5>Tom Jobim (tomecaetano@mpb.com)</h5>
              <p>Data Access <span>20 min ago</span></p>
            </div>
            <div className="clearfix" />
          </section> 

          <section>
            <div className="img_sctn">
              <img src={userIconYellow} alt="" />
            </div>
            <div className="usermail">
              <h5>Chrsitina Yang (christinayang@hos...)</h5>
              <p>Data Access <span>20 min ago</span></p>
            </div>
            <div className="clearfix" />
          </section>

          <section>
            <div className="img_sctn">
              <img src="assets/user_icon_red.png" alt="" />
            </div>
            <div className="usermail">
              <h5>Tim Maia (tim@primavera.com)</h5>
              <p>Complaint <span>20 min ago</span></p>
            </div>
            <div className="clearfix" />
          </section>

          <section>
            <div className="img_sctn">
              <img src={userIconYellow} alt="" />
            </div>
            <div className="usermail">
              <h5>Tom Jobim (tomecaetano@mpb.com)</h5>
              <p>Data Access <span>20 min ago</span></p>
            </div>
            <div className="clearfix" />
          </section>

        </div>

      </div>
    </div>
  );
}

export default MiddleLeftSection;
