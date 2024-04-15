import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTextWidth } from "react-icons/fa";

const StlFile = () => {
  return (
    <div className="stl-main">
      <div className="stl-sub">
        <div className="home-msg-sub">
          <div className="home-msg-head">
            <div className="home-msg-head-txt">
              <span>SEND A MESSAGE</span>
            </div>
            <h1>
              Drop a line & get a reply <br /> from our team
            </h1>
          </div>
          <div className="home-msg-form-main">
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
                <div className="home-msg-input-div home-msg-txt-area">
                  <p>Message</p>
                  <div>
                    <textarea id="" cols="30" rows="7" placeholder="Your Message" />
                    <span>
                      <FaTextWidth />
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-msg-form-p3">
                <div className="home-msg-input-div home-msg-txt-area">
                  <p>File Input</p>
                  <div>
                    <input type="file" />
                    {/* <span>
                        <FaTextWidth />
                      </span> */}
                  </div>
                </div>
              </div>
              <div className="home-msg-form-submit">
                <input type="submit" value="SEND MESSAGE" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StlFile;
