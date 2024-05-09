import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

import AOS from "aos";
import "aos/dist/aos.css";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    subject: "",
    file: "",
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.file) {
        console.error("File is required.");
        return;
      }
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("mobile", formData.mobile_number);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("file", formData.file);

      const response = await fetch(
        `https://denticadentalstudio.com/api/career/store`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        console.log("Application submitted successfully");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Review Submitted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.log("Failed to submit application");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to submit application",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <div className="career-main">
      <div className="career-sub" data-aos="fade-up" data-aos-duration="2000">
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
                  Please attach your CV below and submit the form or mail us at:{" "}
                  <br />
                  denticadentalstudio@gmail.com
                </p>
              </div>
              <div className="career-form-main">
                <form className="home-msg-form" onSubmit={handleSubmit}>
                  <div className="home-msg-form-p1">
                    <div className="home-msg-input-div">
                      <p>Name</p>
                      <div>
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
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
                          type="text"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
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
                        <input
                          type="text"
                          placeholder="Phone"
                          name="mobile_number"
                          value={formData.mobile_number}
                          onChange={handleChange}
                        />
                        <span>
                          <FaPhone />
                        </span>
                      </div>
                    </div>
                    <div className="home-msg-input-div">
                      <p>Subject</p>
                      <div>
                        <input
                          type="text"
                          placeholder="Apply for"
                          name="subject"
                          onChange={handleChange}
                        />
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
                        <input
                          type="file"
                          name="file"
                          onChange={(e) => handleChange(e)}
                        />
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
