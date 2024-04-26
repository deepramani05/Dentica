import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaTextWidth } from "react-icons/fa";
import { error } from "jquery";

const Review = () => {
  const [formData, setFormData] = useState({
    name:"",
    mobile_number:"",
    review:"",
    image:""  
  });

  const handleChange =(e) =>{
    if (e.target.name === "image"){
      setFormData({ ...formData, image: e.target.files[0] });
    }else{
      setFormData({ ...formData, [e.target.name]: e.target.value});
    }
  };
  const handleSubmit = async (e) =>{
    console.log(formData);
    e.preventDefault();
    try {
      const formDataSend = new FormData();
      formDataSend.append("name", formData.name);
      formDataSend.append("mobile", formData.mobile_number);
      formDataSend.append("review", formData.review);
      formDataSend.append("image", formData.image);

      const response = await fetch(`https://denticadentalstudio.com/api/review`,{
        method: "POST",
        body: formDataSend
      });
      if (response.ok){
        console.log("Review Submitted success");
      }else{  
        console.log("Failed to submit");
      }
    }catch (err) {
      console.error("Network error: " ,error);
    }
  };

  return (
    <div className="review-main">
      <div className="reviwe-sub">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Review</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Review</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="review-page-form">
          <div className="home-msg-sub">
            <div className="home-msg-head">
              <div className="home-msg-head-txt">
                <span>SEND A MESSAGE</span>
              </div>
              <h1>
              Share Your Experience with <br /> Dentica Dental Studio
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
                        placeholder="Enter Name Here ..."
                        value={formData.name} 
                        name="name"
                        onChange={handleChange}
                      />
                      <span>
                        <FaUser />
                      </span>
                    </div>
                  </div>
                  <div className="home-msg-input-div">
                    <p>Phone</p>
                    <div>
                      <input 
                        type="text" 
                        name="mobile_number"
                        placeholder="Enter Contact Nuber Here ..."
                        value={formData.mobile_number} 
                        onChange={handleChange}
                        />
                      <span>
                        <FaPhone />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-msg-form-p2">
                  <div className="home-msg-input-div home-msg-txt-area">
                    <p>Subject</p>
                    <div>
                      <textarea 
                        type="text" 
                        name="review"
                        placeholder="Tell us about your visit - your feedback matters"  
                        cols="30" 
                        rows="5" 
                        value={formData.review}
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
                        name="image"
                        // value={formData.image}
                        onChange={(e)=>handleChange(e)}
                      />
                      {/* <span>
                        <FaTextWidth />
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="home-msg-form-submit">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
