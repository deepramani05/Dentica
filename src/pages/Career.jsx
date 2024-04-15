import React from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaTextWidth } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Career = () => {
  return (
    <div className="career-main">
      <div className="career-sub">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Career</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Career</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="career-content-main">
          <div className="career-content-sub">
            <div className="career-page-form">
              <div className="career-page-form-head">
                <h1>Join The Dentica Team!!</h1>
                <p>
                  Please attach your CV below and submit the form or mail us at: <br />
                  denticadentalstudio@gmail.com
                </p>
              </div>
              <div className="career-form-main">
                <form className="home-msg-form">
                  <div className="home-msg-form-p1">
                    <div className="home-msg-input-div">
                      <p>Name</p>
                      <div>
                        <input type="text" placeholder="Name" />
                        <span>
                          <FaUser />
                        </span>
                      </div>
                    </div>
                    <div className="home-msg-input-div">
                      <p>Email</p>
                      <div>
                        <input type="text" placeholder="Email" />
                        <span>
                          <IoIosMail />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-msg-form-p2">
                    <div className="home-msg-input-div">
                      <p>Phone</p>
                      <div>
                        <input type="text" placeholder="Phone" />
                        <span>
                          <FaPhone />
                        </span>
                      </div>
                    </div>
                    <div className="home-msg-input-div">
                      <p>Subject</p>
                      <div>
                        <input type="text" placeholder="Apply for" />
                        <span>
                          <FaBook />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-msg-form-p3">
                    <div className="home-msg-input-div home-msg-txt-area">
                      <p>File Input</p>
                      <div>
                        <input type="file" />
                      </div>
                    </div>
                  </div>
                  <div className="home-msg-form-submit">
                    <input type="submit" value="SEND" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
