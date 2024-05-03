import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTextWidth } from "react-icons/fa";
import axios from "axios";

const StlFile = () => {
  let [name, setName] = useState("");
  let [mail, setMail] = useState("");
  let [message, setMessage] = useState("");
  let [file, setFile] = useState("");

  let obj = {
    name: name,
    mail: mail,
    message: message,
    file: file,
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:5000/stl`,obj)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })

    setName("")
    setMail("")
    setMessage("")
    setFile("")

  };

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
            <form className="home-msg-form" onSubmit={handleSubmit}>
              <div className="home-msg-form-p1">
                <div className="home-msg-input-div">
                  <p>Name</p>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <span>
                      <FaUser />
                    </span>
                  </div>
                </div>
                <div className="home-msg-input-div">
                  <p>Email</p>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setMail(e.target.value)}
                      value={mail}
                    />
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
                    <textarea
                      id=""
                      cols="30"
                      rows="7"
                      placeholder="Your Message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                    />
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
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.value)}
                      value={file}
                    />
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
