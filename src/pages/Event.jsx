import React from "react";
import { Link } from "react-router-dom";
import event_img from "../img/event_img.jpg";

const Event = () => {
  return (
    <div className="event-main">
      <div className="event-sub">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Events</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Events</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="event-page-content-main">
          <div className="blog-page-data-sub event-page-data-sub">
            <div className="blog-page-data-img">
              <img src={event_img} alt="" />
            </div>
            <div className="blog-page-content-main-txt">
              <div className="blog-page-data-txt">
                <Link to='/events/gujarat-dental-show-2024'>
                  <h1>Gujarat Dental Show 2024</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
