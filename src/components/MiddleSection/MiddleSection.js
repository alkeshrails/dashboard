import React from 'react';
import bigUserIconGreen from '../../assets/big_user_icon_green.png';
import userImg from '../../assets/user_img.png';

function MiddleSection() {
  return (
    <div className="col-md-6 col-sm-5 col-xs-12">
      <div className="center_question_box">

        <h4 className="head"><img src={bigUserIconGreen} alt="" /> Question</h4>
        <p>Upload the data requested and we’ll e-mail the user with a link to download it on your LegalSite page. Remember: you have 1 month to solve a request.</p>

        <div className="row center_user_sectn">
          <div className="col-lg-1 col-md-2 col-sm-4 col-xs-3 pd-0">
            <div className="user_img">
              <img src={userImg} alt="" />
            </div>
          </div>
          <div className="col-lg-11 col-md-10 col-sm-8 col-xs-9 pd-0">
            <h5>Derek Sheperd</h5>
            <p>Germany</p>
          </div>
        </div>

        <div className="row">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Status</th>
                <th>Request</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Question</td>
                <td>Pending</td>
                <td>#2526</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Due date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12 April 2019 - 9.30h</td>
                <td>12 may 2019</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <h5>Question</h5>
          <p>I would like to know which third-party data processors also keep my data, why and for how long?</p>
        </div>

        <h5>Write an awnser:</h5>
        <textarea value="" readOnly>Write your message</textarea>
        <button className="btn btn-default send_btn">Send</button>

      </div>


      <div className="center_question_box action_box">
        <h5>Solved: data erasure request <span>12/01/19</span></h5>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-4 pd-0">
            <p>Request #2512</p>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-4 pd-0">
            <p>Status: Solved</p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-4 text-right pd-0">
            <a href="#" className="download" />
            <a href="#" className="share" />
            <a href="#"><i className="far fa-trash-alt"></i></a>
          </div>
        </div>
      </div>

      <div className="center_question_box action_box">
        <h5>Data erasure request <span>14/12/18</span></h5>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-4 pd-0">
            <p>Request #2512</p>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-4 pd-0">
            <p>Status: Solved</p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-4 text-right pd-0">
            <a href="#" className="download" />
            <a href="#" className="share" />
            <a href="#"><i className="far fa-trash-alt" /></a>
          </div>
        </div>
      </div>

      <div className="center_question_box action_box">
        <h5>Solved: data access request <span>07/12/18</span></h5>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-4 pd-0">
            <p>Request #2512</p>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-4 pd-0">
            <p>Status: Solved</p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-4 text-right pd-0">
            <a href="#" className="download" />
            <a href="#" className="share" />
            <a href="#"><i className="far fa-trash-alt" /></a>
          </div>
        </div>
      </div>

      <div className="center_question_box action_box">
        <h5>data access request <span>07/11/18</span></h5>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-4 pd-0">
            <p>Request #2512</p>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-4 pd-0">
            <p>Status: Solved</p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-4 text-right pd-0">
            <a href="#" className="download" />
            <a href="#" className="share" />
            <a href="#"><i className="far fa-trash-alt"></i></a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MiddleSection;