import React from "react";
import Footer from "../footer/Footer";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-wrapper">
          <h1 className="about-main">GIỚI THIỆU</h1>
          <div className="about-introduce">GIỚI THIỆU</div>
          <div className="distance1"></div>
          <h3 className="about-title">
            GIỚI THIỆU VỀ CÔNG TY CỔ PHẦN THỜI TRANG WB88
          </h3>
          <p>
            "Thời trang WB88 không phải là công ty tiên phong làm thương hiệu
            Việt nhưng sẽ khẳng định được thương hiệu thời trang Việt", Đó là
            khẳng định của chúng tôi và với những gì đã làm được, WB88 xin giới
            thiệu sơ lược quá trình hình thành và phát triển...
          </p>
          <img
            className="about-img"
            src="https://cdn.tgdd.vn//GameApp/1347647//h1-800x450.jpg"
            alt=""
          />
          <h4 className="about-title1">Sứ mệnh của WB88</h4>
          <p>
            "Sứ mệnh của chúng tôi là tạo ra những sản phẩm thời trang của người
            Việt, phục vụ tốt nhất những khách hàng trong nước và bạn bè Quốc
            Tế"
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
