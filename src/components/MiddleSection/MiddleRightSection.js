import React from 'react';

function MiddleRightSection() {
  return (
    <div className="col-md-3 col-sm-3 col-xs-12 pd-0">
      <div className="white_main_box right_box">
        <p><a className="right_download" href="#">Download</a></p>
        <p><a className="right_share" href="#">Share</a></p>
        <p><a className="right_lawyer_review" href="#">Lawyer review</a></p>

        <p><strong>Client Info</strong> <a className="pull-right" href="#"><i className="far fa-edit" /></a></p>
        <p>Nora M. Buchanan</p>
        <p>noramirian@company.com</p>
        <p>+144–3412–4422</p>
        <p>
          This user has already requested for accessing data and deleting data. All of the requests were resolved and the user was informed.
        </p>

        <p><a className="see_more" href="#">See more <i className="fas fa-arrow-right" /></a></p>

      </div>
    </div>
  );
}

export default MiddleRightSection;