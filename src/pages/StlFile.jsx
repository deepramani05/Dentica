import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTextWidth } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const StlFile = () => {
  let [name, setName] = useState("");
  let [mail, setMail] = useState("");
  let [message, setMessage] = useState("");
  let [file, setFile] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("fname", name);
    formDataToSend.append("phone", mail);
    formDataToSend.append("message", message);
    formDataToSend.append("file", file);

    axios
      .post(`https://denticadentalstudio.com/webapp/api/stl/store`, formDataToSend)
      .then((res) => {
        // console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Data Saved !",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    setName("");
    setMail("");
    setMessage("");
    setFile("");
  };

  return (
    <div className="stl-main">
      {loading && (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      )}
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
                      name="fname"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <span>
                      <FaUser />
                    </span>
                  </div>
                </div>
                <div className="home-msg-input-div">
                  <p>Phone Number</p>
                  <div>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
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
                      name="message"
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
                      name="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      // value={file}
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
